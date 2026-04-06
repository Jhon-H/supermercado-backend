import sequelize from '../config/database.js'

async function createSaleTotalTrigger() {
  await sequelize.query(`
    CREATE OR REPLACE FUNCTION update_sale_total()
    RETURNS TRIGGER AS $$
    DECLARE
      v_sale_id INTEGER := COALESCE(NEW."saleId", OLD."saleId");
    BEGIN
      UPDATE sale
      SET total = COALESCE((
        SELECT SUM(quantity * price)
        FROM "saleDetail"
        WHERE "saleId" = v_sale_id AND "deletedAt" IS NULL
      ), 0)
      WHERE id = v_sale_id;

      RETURN NULL;
    END;
    $$ LANGUAGE plpgsql;
  `)

  await sequelize.query(`
    DROP TRIGGER IF EXISTS trg_sale_detail_change ON "saleDetail";
    CREATE TRIGGER trg_sale_detail_change
    AFTER INSERT OR UPDATE OR DELETE ON "saleDetail"
    FOR EACH ROW
    EXECUTE FUNCTION update_sale_total();
  `)

  console.log('Sale total trigger created successfully.')
}

export default createSaleTotalTrigger

class SaleController {
  constructor(saleService) {
    this.saleService = saleService
  }

  async getAllSales(req, res) {
    const sales = await this.saleService.getAllSales()

    return res
      .status(200)
      .json({ message: 'Sales retrieved successfully', data: sales })
  }

  async getSaleById(req, res) {
    const sale = await this.saleService.getSaleById(req.params.id)

    return res
      .status(200)
      .json({ message: 'Sale retrieved successfully', data: sale })
  }

  async createSale(req, res) {
    const sale = await this.saleService.createSale(req.body)

    return res
      .status(201)
      .json({ message: 'Sale created successfully', data: sale })
  }

  async updateSale(req, res) {
    const sale = await this.saleService.updateSale(req.params.id, req.body)

    return res
      .status(200)
      .json({ message: 'Sale updated successfully', data: sale })
  }

  async deleteSale(req, res) {
    await this.saleService.deleteSale(req.params.id)

    return res.status(200).json({
      message: 'Sale deleted successfully',
      data: { id: req.params.id }
    })
  }
}

export default SaleController

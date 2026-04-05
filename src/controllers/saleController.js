class SaleController {
  async getAllSales(req, res) {
    try {
      // SERVICE
      return res.status(200).json({ message: 'Sales retrieved successfully', data: [] })
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving sales' })
    }
  }
  
  async getSaleById(req, res) {
    try {
      // SERVICE
      return res.status(200).json({ message: 'Sale retrieved successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving sale' })
    }
  }
  
  async createSale(req, res) {
    try {
      // SERVICE
      return res.status(201).json({ message: 'Sale created successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error creating sale' })
    }
  }
  
  async updateSale(req, res) {
    try {
      // SERVICE
      return res.status(200).json({ message: 'Sale updated successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error updating sale' })
    }
  }

  async deleteSale(req, res) {
    try {
      // SERVICE
      return res.status(200).json({ message: 'Sale deleted successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error deleting sale' })
    }
  }
}

export default SaleController

class SaleDetailController {
  async getAllSaleDetails(req, res) {
    try {
      // SERVICE
      return res.status(200).json({ message: 'Sale details retrieved successfully', data: [] })
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving sale details' })
    }
  }
  
  async getSaleDetailById(req, res) {
    try {
      // SERVICE
      return res.status(200).json({ message: 'Sale detail retrieved successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving sale detail' })
    }
  }
  
  async createSaleDetail(req, res) {
    try {
      // SERVICE
      return res.status(201).json({ message: 'Sale detail created successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error creating sale detail' })
    }
  }
  
  async updateSaleDetail(req, res) {
    try {
      // SERVICE
      return res.status(200).json({ message: 'Sale detail updated successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error updating sale detail' })
    }
  }

  async deleteSaleDetail(req, res) {
    try {
      // SERVICE
      return res.status(200).json({ message: 'Sale detail deleted successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error deleting sale detail' })
    }
  }
}

export default SaleDetailController

class ProviderController {
  async getAllProviders(req, res) {
    try {
      // SERVICE
      return res.status(200).json({ message: 'Providers retrieved successfully', data: [] })
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving providers' })
    }
  }
  
  async getProviderById(req, res) {
    try {
      // SERVICE
      return res.status(200).json({ message: 'Provider retrieved successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving provider' })
    }
  }
  
  async createProvider(req, res) {
    try {
      // SERVICE
      return res.status(201).json({ message: 'Provider created successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error creating provider' })
    }
  }
  
  async updateProvider(req, res) {
    try {
      // SERVICE
      return res.status(200).json({ message: 'Provider updated successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error updating provider' })
    }
  }

  async deleteProvider(req, res) {
    try {
      // SERVICE
      return res.status(200).json({ message: 'Provider deleted successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error deleting provider' })
    }
  }
}

export default ProviderController

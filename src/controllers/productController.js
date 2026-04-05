class ProductController {
  async getAllProducts(req, res) {
    try {
      // SERVICE
      return res.status(200).json({ message: 'Products retrieved successfully', data: [] })
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving products' })
    }
  }
  
  async getProductById(req, res) {
    try {
      // SERVICE
      return res.status(200).json({ message: 'Product retrieved successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving product' })
    }
  }
  
  async createProduct(req, res) {
    try {
      // SERVICE
      return res.status(201).json({ message: 'Product created successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error creating product' })
    }
  }
  
  async updateProduct(req, res) {
    try {
      // SERVICE
      return res.status(200).json({ message: 'Product updated successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error updating product' })
    }
  }

  async deleteProduct(req, res) {
    try {
      // SERVICE
      return res.status(200).json({ message: 'Product deleted successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error deleting product' })
    }
  }
}

export default ProductController

class ProductController {
  constructor(productService) {
    this.productService = productService
  }

  async getAllProducts(req, res) {
    const products = await this.productService.getAllProducts()

    return res
      .status(200)
      .json({ message: 'Products retrieved successfully', data: products })
  }

  async getProductById(req, res) {
    const product = await this.productService.getProductById(req.params.id)

    return res
      .status(200)
      .json({ message: 'Product retrieved successfully', data: product })
  }

  async createProduct(req, res) {
    const product = await this.productService.createProduct(req.body)

    return res
      .status(201)
      .json({ message: 'Product created successfully', data: product })
  }

  async updateProduct(req, res) {
    const product = await this.productService.updateProduct(
      req.params.id,
      req.body
    )

    return res
      .status(200)
      .json({ message: 'Product updated successfully', data: product })
  }

  async deleteProduct(req, res) {
    await this.productService.deleteProduct(req.params.id)

    return res.status(200).json({
      message: 'Product deleted successfully',
      data: { id: req.params.id }
    })
  }
}

export default ProductController

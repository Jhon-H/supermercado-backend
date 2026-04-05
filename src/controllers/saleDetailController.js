class SaleDetailController {
  constructor(saleDetailService) {
    this.saleDetailService = saleDetailService
  }

  async getAllSaleDetails(req, res) {
    const saleDetails = await this.saleDetailService.getAllSaleDetails()

    return res
      .status(200)
      .json({
        message: 'Sale details retrieved successfully',
        data: saleDetails
      })
  }

  async getSaleDetailById(req, res) {
    const saleDetail = await this.saleDetailService.getSaleDetailById(
      req.params.id
    )

    return res
      .status(200)
      .json({ message: 'Sale detail retrieved successfully', data: saleDetail })
  }

  async createSaleDetail(req, res) {
    const saleDetail = await this.saleDetailService.createSaleDetail(req.body)

    return res
      .status(201)
      .json({ message: 'Sale detail created successfully', data: saleDetail })
  }

  async updateSaleDetail(req, res) {
    const saleDetail = await this.saleDetailService.updateSaleDetail(
      req.params.id,
      req.body
    )

    return res
      .status(200)
      .json({ message: 'Sale detail updated successfully', data: saleDetail })
  }

  async deleteSaleDetail(req, res) {
    await this.saleDetailService.deleteSaleDetail(req.params.id)

    return res.status(200).json({
      message: 'Sale detail deleted successfully',
      data: { id: req.params.id }
    })
  }
}

export default SaleDetailController

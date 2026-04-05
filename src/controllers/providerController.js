class ProviderController {
  constructor(providerService) {
    this.providerService = providerService
  }

  async getAllProviders(req, res) {
    const providers = await this.providerService.getAllProviders()

    return res
      .status(200)
      .json({ message: 'Providers retrieved successfully', data: providers })
  }

  async getProviderById(req, res) {
    const provider = await this.providerService.getProviderById(req.params.id)

    return res
      .status(200)
      .json({ message: 'Provider retrieved successfully', data: provider })
  }

  async createProvider(req, res) {
    const provider = await this.providerService.createProvider(req.body)

    return res
      .status(201)
      .json({ message: 'Provider created successfully', data: provider })
  }

  async updateProvider(req, res) {
    const provider = await this.providerService.updateProvider(
      req.params.id,
      req.body
    )

    return res
      .status(200)
      .json({ message: 'Provider updated successfully', data: provider })
  }

  async deleteProvider(req, res) {
    await this.providerService.deleteProvider(req.params.id)

    return res.status(200).json({
      message: 'Provider deleted successfully',
      data: { id: req.params.id }
    })
  }
}

export default ProviderController

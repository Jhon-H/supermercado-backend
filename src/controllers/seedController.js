class SeedController {
  constructor(seedService) {
    this.seedService = seedService
  }

  async seed(req, res) {
    await this.seedService.seed()

    return res.status(201).json({ message: 'Seed executed successfully' })
  }
}

export default SeedController

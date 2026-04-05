class UserController {
  constructor(userService) {
    this.userService = userService
  }

  async getAllUsers(req, res) {
    const users = await this.userService.getAllUsers()

    return res
      .status(200)
      .json({ message: 'Users retrieved successfully', data: users })
  }

  async getUserById(req, res) {
    const user = await this.userService.getUserById(req.params.id)

    return res
      .status(200)
      .json({ message: 'User retrieved successfully', data: user })
  }

  async createUser(req, res) {
    const user = await this.userService.createUser(req.body)

    return res
      .status(201)
      .json({ message: 'User created successfully', data: user })
  }

  async updateUser(req, res) {
    const user = await this.userService.updateUser(req.params.id, req.body)

    return res
      .status(200)
      .json({ message: 'User updated successfully', data: user })
  }

  async deleteUser(req, res) {
    await this.userService.deleteUser(req.params.id)

    return res
      .status(200)
      .json({
        message: 'User deleted successfully',
        data: { id: req.params.id }
      })
  }
}

export default UserController

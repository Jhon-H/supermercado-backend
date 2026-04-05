class UserController {
  async getAllUsers(req, res) {
    try {
      // SERVICE
      return res
        .status(200)
        .json({ message: 'Users retrieved successfully', data: [] })
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving users' })
    }
  }

  async getUserById(req, res) {
    try {
      // SERVICE
      return res
        .status(200)
        .json({ message: 'User retrieved successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving user' })
    }
  }

  async createUser(req, res) {
    try {
      // SERVICE
      return res
        .status(201)
        .json({ message: 'User created successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error creating user' })
    }
  }

  async updateUser(req, res) {
    try {
      // SERVICE
      return res
        .status(200)
        .json({ message: 'User updated successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error updating user' })
    }
  }

  async deleteUser(req, res) {
    try {
      // SERVICE
      return res
        .status(200)
        .json({ message: 'User deleted successfully', data: {} })
    } catch (error) {
      res.status(500).json({ error: 'Error deleting user' })
    }
  }
}

export default UserController

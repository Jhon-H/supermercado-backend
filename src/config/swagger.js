import swaggerAutogen from 'swagger-autogen'

const basePath = process.env.API_BASE_PATH || ''

const doc = {
  info: {
    title: 'Supermercado MarketSoft API',
    description:
      'API REST para la gestión de un supermercado. Permite administrar (CRUD) productos, proveedores, usuarios y ventas.',
    version: '1.0.0'
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}${basePath}`,
      description: 'Servidor local'
    }
  ],
  definitions: {
    User: {
      id: 1,
      name: 'Carlos Ramírez',
      email: 'carlos@mail.com',
      role: 'admin'
    },
    UserInput: {
      $name: 'Carlos Ramírez',
      $email: 'carlos@mail.com',
      $role: 'admin'
    },
    Provider: {
      id: 1,
      name: 'Distribuidora El Campo',
      phone: '3101234567',
      email: 'elcampo@mail.com',
      city: 'Manizales'
    },
    ProviderInput: {
      $name: 'Distribuidora El Campo',
      $phone: '3101234567',
      $email: 'elcampo@mail.com',
      $city: 'Manizales'
    },
    Product: {
      id: 1,
      name: 'Arroz Diana 500g',
      description: 'Arroz blanco de primera calidad',
      price: 3500,
      stock: 100,
      providerId: 1
    },
    ProductInput: {
      $name: 'Arroz Diana 500g',
      description: 'Arroz blanco de primera calidad',
      $price: 3500,
      $stock: 100,
      $providerId: 1
    },
    Sale: {
      id: 1,
      userId: 1,
      date: '2026-04-05T10:00:00.000Z',
      total: 54600
    },
    SaleInput: {
      $userId: 1,
      $details: [
        { $productId: 1, $quantity: 3 },
        { $productId: 2, $quantity: 1 }
      ]
    },
    SaleDetail: {
      id: 1,
      saleId: 1,
      productId: 1,
      quantity: 3,
      price: 3500
    },
    SaleDetailInput: {
      $saleId: 1,
      $productId: 1,
      $quantity: 3,
      $price: 3500
    },
    SuccessResponse: {
      message: 'Operation completed successfully',
      data: {}
    },
    ErrorNotFound: {
      message: 'Resource not found'
    },
    ErrorValidation: {
      message: 'Invalid field value'
    },
    ErrorConflict: {
      message: 'Resource already exists'
    },
    ErrorServer: {
      message: 'Internal Server Error'
    }
  }
}

const outputFile = './src/config/swagger-output.json'
const routes = [
  './src/views/userSwagger.js',
  './src/views/providerSwagger.js',
  './src/views/productSwagger.js',
  './src/views/saleSwagger.js',
  './src/views/saleDetailSwagger.js',
  './src/views/seedSwagger.js'
]

const generate = async () => {
  await swaggerAutogen({ openapi: '3.0.0' })(outputFile, routes, doc)
}

generate()

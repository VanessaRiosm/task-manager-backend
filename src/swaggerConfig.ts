import swaggerJsdoc from 'swagger-jsdoc'

const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentación de API de task manager',
    },
    servers: [
      {
        url: process.env.URL || '',
      },
    ],
  },
  apis: ['./src/**/*.ts'],
}

const swaggerSpec = swaggerJsdoc(swaggerOptions)

export default swaggerSpec

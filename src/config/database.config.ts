export default (): Record<string, any> => ({
  database_connection: process.env.DATABASE_CONNECTION || 'mysql',
  database_host: process.env.DATABASE_HOST,
  database_port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  database_username: process.env.DATABASE_USERNAME,
  database_password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB_NAME,
})

export = {
  host: process.env.DATABASE_HOST,
  type: 'mysql',
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB_NAME,
  migrations: [
    'src/database/migrations/*.ts',
  ],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

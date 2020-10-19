module.exports = {
  development: {
    database: {
      host: "localhost",
      name: "estetica",
      dialect: "mysql",
      port: 3306,
      user: "root",
      password: "13094554Vi@"
    }
  },
  production: {
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT
    }
  }
};
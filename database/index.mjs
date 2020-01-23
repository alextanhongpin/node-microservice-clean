import postgres from 'postgres'

const sql = postgres('postgres://username:password@host:port/database', {
  host: process.env.DB_HOST, // Postgres ip address or domain name
  port: process.env.DB_PORT, // Postgres server port
  database: process.env.DB_NAME, // Name of database to connect to
  username: process.env.DB_USER, // Username of database user
  password: process.env.DB_PASS, // Password of database user
  ssl: false, // True, or options for tls.connect
  max: 10, // Max number of connections
  timeout: 60 // Timeout in seconds
})

export default sql

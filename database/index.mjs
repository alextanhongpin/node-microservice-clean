import DBMigrate from 'db-migrate'

const dbmigrate = DBMigrate.getInstance(true, {
  config: 'database/config.json',
  env: process.env.ENV
})

dbmigrate.up().then(data => console.log(data))

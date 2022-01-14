import { Sequelize } from 'sequelize'

const database = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'openlibrary_development',
    username: 'openlibrary',
    password: 'openlibrary',
})

export { database }
import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'
import { database } from '../database'
import Author from '../models/author'
import User from '../models/user'

AdminJs.registerAdapter(AdminJsSequelize)

const adminJs = new AdminJs({
    databases: [database],
    resources: [{
        resource: Author,
        options: {
            navigation: 'Biblioteca'
        }
    }, {
        resource: User,
        options: {
            navigation: 'Administração'
        }
    }],
    rootPath: '/admin',
    branding: {
        companyName: 'OpenLibrary'
    }
})

const adminJsRouter = AdminJsExpress.buildRouter(adminJs)

export { adminJs, adminJsRouter }
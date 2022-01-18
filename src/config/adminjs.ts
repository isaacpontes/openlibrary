import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'
import { database } from '../database'
import { adminJsResources } from '../adminjs/resources'

AdminJs.registerAdapter(AdminJsSequelize)

const adminJs = new AdminJs({
    databases: [database],
    resources: adminJsResources,
    rootPath: '/admin',
    branding: {
        companyName: 'OpenLibrary'
    }
})

const adminJsRouter = AdminJsExpress.buildRouter(adminJs)

export { adminJs, adminJsRouter }
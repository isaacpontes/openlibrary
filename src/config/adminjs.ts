import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'
import { database } from '../database'
import { resources } from '../adminjs/resources'
import { locale } from '../adminjs/locale'
import { dashboard } from '../adminjs/dashboard'
import { branding } from '../adminjs/branding'
import { authOptions } from '../adminjs/auth-options'

AdminJs.registerAdapter(AdminJsSequelize)

const adminJs = new AdminJs({
    databases: [database],
    resources: resources,
    rootPath: '/admin',
    branding: branding,
    dashboard: dashboard,
    locale: locale
})

const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(adminJs, authOptions)

export { adminJs, adminJsRouter }
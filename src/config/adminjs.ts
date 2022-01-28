import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'
import bcrypt from 'bcrypt'
import { database } from '../database'
import { adminJsResources } from '../adminjs/resources'
import { User } from '../models'
import { locale } from '../adminjs/locale'
import { dashboard } from '../adminjs/dashboard'

AdminJs.registerAdapter(AdminJsSequelize)

const adminJs = new AdminJs({
    databases: [database],
    resources: adminJsResources,
    rootPath: '/admin',
    branding: {
        companyName: 'OpenLibrary',
        theme: {
            colors: {
                primary100: '#C84B31',
                primary80: '#d66c57',
                primary60: '#db7e6b',
                primary40: '#e09080',
                primary20: '#eab4a9',
                grey100: '#191919',
                grey80: '#333333',
                grey60: '#4d4d4d',
                hoverBg: '#545454',
                filterBg: '#2D4263',
                accent: '#eab4a9'
            }
        }
    },
    dashboard: dashboard,
    locale: locale
})

const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(adminJs, {
    authenticate: async (username, password) => {
        const user = await User.findOne({ where: { username } })

        if (user) {
            const matched = await bcrypt.compare(password, user.password)
            if (matched) {
                return user
            }
        }

        return false
    },
    cookiePassword: 'some-secret-password-used-to-secure-cookie'
})

export { adminJs, adminJsRouter }
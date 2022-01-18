import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'
import uploadFileFeature from '@adminjs/upload'
import { database } from '../database'
import Author from '../models/author'
import User from '../models/user'
import path from 'path'

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
            navigation: 'Administração',
            editProperties: ['name', 'username', 'password', 'role', 'uploadImage'],
            filterProperties: ['name', 'username','role', 'createdAt', 'updatedAt'],
            listProperties: ['id', 'name', 'username', 'role', 'avatar'],
            showProperties: ['id', 'name', 'username', 'role', 'avatar']
        },
        features: [
            uploadFileFeature({
                provider: { 
                    local: { 
                        bucket: path.join(__dirname, '../../public/uploads'),
                    }
                },
                properties: { 
                    key: 'avatar',
                    file: 'uploadImage'
                },
                uploadPath: (record, filename) => `images/${record.get('username')}/${filename}`
            })
        ]
    }],
    rootPath: '/admin',
    branding: {
        companyName: 'OpenLibrary'
    }
})

const adminJsRouter = AdminJsExpress.buildRouter(adminJs)

export { adminJs, adminJsRouter }
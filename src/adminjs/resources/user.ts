import path from 'path'
import bcrypt from 'bcrypt'
import uploadFileFeature from '@adminjs/upload'
import { FeatureType, ResourceOptions } from 'adminjs'

const userResourceOptions: ResourceOptions = {
    navigation: 'Administração',
    properties: {
        password: {
            type: 'password'
        }
    },
    actions: {
        new: {
            before: async (request) => {
                if (request?.payload!.password) {
                    request.payload = {
                        ...request.payload,
                        password: await bcrypt.hash(request.payload.password, 10),
                    }
                }
                return request
            },
        }
    },
    editProperties: ['name', 'username', 'password', 'role', 'uploadImage'],
    filterProperties: ['name', 'username', 'role', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'name', 'username', 'role', 'avatar'],
    showProperties: ['id', 'name', 'username', 'role', 'avatar', 'createdAt', 'updatedAt']
}

const userResourceFeatures: FeatureType[] = [
    uploadFileFeature({
        provider: {
            local: {
                bucket: path.join(__dirname, '../../../public/uploads'),
            }
        },
        properties: {
            key: 'avatar',
            file: 'uploadImage'
        },
        uploadPath: (record, filename) => `images/${record.get('username')}/${filename}`
    })
]

export {
    userResourceOptions,
    userResourceFeatures
}
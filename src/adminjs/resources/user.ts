import path from 'path'
import uploadFileFeature from '@adminjs/upload'
import { FeatureType, ResourceOptions } from 'adminjs'

const userResourceOptions: ResourceOptions = {
    navigation: 'Administração',
    properties: {
        birth: {
            type: 'date'
        },
        password: {
            type: 'password'
        },
        role: {
            availableValues: [
                { value: 'admin', label: 'Administrador' },
                { value: 'user', label: 'Usuário' }
            ]
        }
    },
    editProperties: [
        'firstName',
        'lastName',
        'phone',
        'birth',
        'email',
        'password',
        'role',
        'uploadImage'
    ],
    filterProperties: [
        'firstName',
        'lastName',
        'phone',
        'birth',
        'email',
        'role',
        'createdAt',
        'updatedAt'
    ],
    listProperties: [
        'id',
        'firstName',
        'email',
        'role'
    ],
    showProperties: [
        'id',
        'firstName',
        'lastName',
        'phone',
        'birth',
        'email',
        'role',
        'avatar',
        'createdAt',
        'updatedAt'
    ]
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
        uploadPath: (record, filename) => `images/user-${record.get('id')}/${filename}`
    })
]

export {
    userResourceOptions,
    userResourceFeatures
}
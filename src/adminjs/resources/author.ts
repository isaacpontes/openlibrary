import { ResourceOptions } from 'adminjs'

const authorResourceOptions: ResourceOptions = {
    navigation: 'Biblioteca',
    editProperties: ['name'],
    filterProperties: ['name', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'name'],
    showProperties: ['id', 'name', 'createdAt', 'updatedAt']
}

export { authorResourceOptions }
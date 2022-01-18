import { ResourceOptions } from 'adminjs'

const categoryResourceOptions: ResourceOptions = {
    navigation: 'Biblioteca',
    editProperties: ['name'],
    filterProperties: ['name', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'name'],
    showProperties: ['id', 'name', 'createdAt', 'updatedAt']
}

export { categoryResourceOptions }
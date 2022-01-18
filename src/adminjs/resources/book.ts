import { ResourceOptions } from 'adminjs'

const bookResourceOptions: ResourceOptions = {
    navigation: 'Biblioteca',
    editProperties: [
        'title',
        'categoryId',
        'summary',
        'authorId',
        'isbn',
        'publishDate',
        'situation'
    ],
    filterProperties: [
        'title',
        'categoryId',
        'summary',
        'authorId',
        'isbn',
        'publishDate',
        'situation',
        'createdAt',
        'updatedAt'
    ],
    listProperties: [
        'title',
        'categoryId',
        'authorId',
        'situation'
    ],
    showProperties: [
        'id',
        'title',
        'categoryId',
        'summary',
        'authorId',
        'isbn',
        'publishDate',
        'situation',
        'createdAt',
        'updatedAt'
    ]
}

export { bookResourceOptions }
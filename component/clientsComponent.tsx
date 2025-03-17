import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'clientsComponent',
    title: 'Clients Page Component',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{type: 'block'}]
        }),
        defineField({
            name: 'headerImage',
            title: 'Header Image',
            type: 'image'
        }),
    ]
})

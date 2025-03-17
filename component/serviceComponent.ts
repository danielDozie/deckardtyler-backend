import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'serviceComponent',
    title: 'Services Page Component',
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
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'rotatingTextTitle',
            title: 'Rotating text title',
            type: 'string',
        }),
        defineField({
            name: 'rotatingTexts',
            title: 'Rotating texts',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'service' }]
            }]
        }),
    ]
})

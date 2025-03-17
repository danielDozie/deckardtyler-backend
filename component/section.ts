import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'section',
    title: 'Section',
    type: 'document',
    fields: [
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'button'},
                { type: 'hero' },
                { type: 'aboutComponent' },
                { type: 'serviceComponent' },
                { type: 'researchComponent' },
                { type: 'clientsComponent' },
                { type: 'blogComponent' },
                { type: 'homeComponent' },
            ]
        }),
    ],
     preview: {
        select: {
            title: 'content[0].title',
        }
    }
})

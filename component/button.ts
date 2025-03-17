import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'button',
    title: 'Button',
    type: 'object',
    fields: [
        defineField({
            name: 'text',
            title: 'Button Text',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'link',
            title: 'Button Link',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'isExternal',
            title: 'Is External Link',
            type: 'boolean',
            description: 'Open link in new tab',
            initialValue: false
        })
    ],
    preview: {
        select: {
            title: 'text',
            subtitle: 'link'
        },
        prepare(selection) {
            const {title, subtitle} = selection
            return {
                title: `🔗 Button: ${title}`,
                subtitle: subtitle
            }
        }
    }
})

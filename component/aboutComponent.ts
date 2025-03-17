import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'aboutComponent',
    title: 'About Page Component',
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
            name: 'paragraphImage',
            title: 'Paragraph Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'paragraphHeading',
            title: 'Paragraph Heading',
            type: 'array',
            of: [{type: 'block'}]
        }),
        defineField({
            name: 'paragraphText',
            title: 'Paragraph Text',
            type: 'array',
            of: [{type: 'block'}]
        }),
        defineField({
            name: 'SecondparagraphText',
            title: 'Second Paragraph Text',
            type: 'array',
            of: [{type: 'block'}]
        }),
        defineField({
            name: 'paragraphButton',
            title: 'Paragraph Button',
            type: 'object',
            fields: [
                {
                    name: 'showButton',
                    title: 'Show Button',
                    type: 'boolean',
                    initialValue: false
                },
                {
                    name: 'buttonText',
                    title: 'Button Text',
                    type: 'string',
                    hidden: ({parent}) => !parent?.showButton
                },
                {
                    name: 'buttonLink',
                    title: 'Button Link',
                    type: 'string',
                    hidden: ({parent}) => !parent?.showButton
                }
            ]
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'title',
                        title: 'Title',
                        type: 'string'
                    },
                    {
                        name: 'text',
                        title: 'Text',
                        type: 'text'
                    },
                    {
                        name: 'icon',
                        title: 'Icon',
                        description: 'Icon name from Lucide React (e.g. "Workflow", "Regex", "Ungroup"). See available icons at https://lucide.dev/icons/',
                        type: 'string',
                        validation: Rule => Rule.required()
                    },
                    {
                        name: 'linkText',
                        title: 'Link Text',
                        type: 'string'
                    },
                    {
                        name: 'link',
                        title: 'Link',
                        type: 'string'
                    }
                ]
            }]
        }),
        defineField({
            name: 'contentBlocks',
            title: 'Content Blocks',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'heading',
                        title: 'Heading',
                        type: 'string'
                    },
                    {
                        name: 'texts',
                        title: 'Text Content',
                        type: 'array',
                        of: [{type: 'block'}]
                    },
                    {
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                        options: {
                            hotspot: true
                        }
                    }
                ]
            }]
        }),
    ]
})

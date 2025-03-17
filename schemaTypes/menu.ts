import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Menu Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'items',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Link Text',
              type: 'string',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'linkType',
              title: 'Link Type',
              type: 'string',
              options: {
                list: [
                  {title: 'External URL', value: 'external'},
                  {title: 'Internal Page', value: 'internal'},
                  {title: 'Post', value: 'post'},
                  {title: 'Category', value: 'category'}
                ]
              },
              validation: (Rule) => Rule.required()
            },
            {
              name: 'externalUrl',
              title: 'External URL',
              type: 'string',
              hidden: ({parent}) => parent?.linkType !== 'external',
            },
            {
              name: 'internalPage',
              title: 'Select Page',
              type: 'reference',
              to: [{type: 'page'}],
              hidden: ({parent}) => parent?.linkType !== 'internal',
            },
            {
              name: 'post',
              title: 'Select Post',
              type: 'reference',
              to: [{type: 'post'}],
              hidden: ({parent}) => parent?.linkType !== 'post',
            },
            {
              name: 'isExternal',
              title: 'Opens in new tab',
              type: 'boolean',
              initialValue: false
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0
    })
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})

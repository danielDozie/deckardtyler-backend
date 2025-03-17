import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading', 
      type: 'string'
    }),
    defineField({
      name: 'yearEstablished',
      title: 'Year Established', 
      type: 'string'
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string'
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'hasSocialIcons',
      title: 'Has Social Icons',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'socialIcons',
      title: 'Social Icons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string'
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Enter the React Icon name (e.g. "FaGithub", "FaTwitter", "FaLinkedin"). See available icons at https://react-icons.github.io/react-icons/'
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url'
            }
          ]
        }
      ],
      hidden: ({ parent }) => !parent?.hasSocialIcons
    })
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'heroImage'
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: Array.isArray(title) ? title.join(' ') : title,
        media: media
      }
    }
  }
})

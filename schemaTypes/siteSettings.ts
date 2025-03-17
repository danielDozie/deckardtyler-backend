import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {
      name: 'general',
      title: 'General Settings',
      default: true
    },
    {
      name: 'seo',
      title: 'SEO & Metadata'
    },
    {
      name: 'social',
      title: 'Social Media'
    },
    {
      name: 'contact',
      title: 'Contact Information'
    }
  ],
  fields: [
    // General Settings
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'general'
    }),
    defineField({
      name: 'url',
      title: 'Site URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
      group: 'general'
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'general'
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'general'
    }),

    // SEO & Metadata
    defineField({
      name: 'description',
      title: 'Default Meta Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
      group: 'seo'
    }),
    defineField({
      name: 'keywords',
      title: 'Default Keywords',
      type: 'array',
      of: [{type: 'string'}],
      group: 'seo'
    }),
    defineField({
      name: 'author',
      title: 'Site Author',
      type: 'string',
      group: 'seo'
    }),
    defineField({
      name: 'ogImage',
      title: 'Default Open Graph Image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'seo'
    }),

    // Social Media
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          title: 'Plat',
          type: 'object',
          fields: [
            {
              name: 'platform',
              type: 'string',
              options: {
                list: [
                  {title: 'Twitter', value: 'twitter'},
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'GitHub', value: 'github'}
                ]
              }
            },
            {name: 'url', type: 'url'},
            {name: 'handle', type: 'string'},
            // {
            //   name: 'lucideIcon',
            //   type: 'string',
            //   description: 'Find a Lucide icon at https://lucide.dev/icons',
            // }
          ]
        }
      ],
      group: 'social'
    }),

    // Contact Information
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
      group: 'contact'
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone',
      type: 'string',
      group: 'contact'
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      group: 'contact'
    }),
    defineField({
      name: 'googleAnalyticsID',
      title: 'Google Analytics ID',
      type: 'string',
      group: 'general'
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      group: 'general'
    })
  ]
})


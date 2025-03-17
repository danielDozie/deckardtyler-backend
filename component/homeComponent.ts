import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homeComponent',
  title: 'Home Page Component',
  type: 'document',
  groups: [
    {
      name: 'section1',
      title: 'First Section',
    },
    {
      name: 'section2',
      title: 'Industry Served Section',
    },
    {
      name: 'section3', 
      title: 'Project Section',
    },
    {
      name: 'section4',
      title: 'Team Section',
    },
    {
      name: 'section5',
      title: 'Blog Section',
    }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'section',
      title: 'Section with heading and images',
      type: 'object',
      group: 'section1',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading', 
          type: 'string'
        }),
        defineField({
          name: 'subheading',
          title: 'Subheading',
          type: 'string'
        }),
        defineField({
          name: 'contentImage',
          title: 'Content Images',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'subtitle',
                  title: 'Subtitle',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'array',
                  of: [{type: 'block'}]
                },
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                }
              ]
            }
          ]
        }),
        // defineField({
        //   name: 'description',
        //   title: 'Description',
        //   type: 'text',
        //   rows: 5
        // }),
        // defineField({
        //   name: 'button',
        //   title: 'Button',
        //   type: 'object',
        //   fields: [
        //     {
        //       name: 'text',
        //       title: 'Button Text',
        //       type: 'string'
        //     },
        //     {
        //       name: 'link',
        //       title: 'Button Link',
        //       type: 'string'
        //     }
        //   ]
        // })
      ]
    }),
    defineField({
      name: 'section2',
      title: 'Industry Service Section',
      type: 'object',
      group: 'section2',
      fields: [
        defineField({
          name: 'yearsInService',
          title: 'Years in Service',
          type: 'number',
        }),
        defineField({
          name: 'yearsInServiceDescription',
          title: 'Years in Service Description',
          type: 'string',
        }),
         defineField({
          name: 'featureService',
          title: 'Industry Served',
          type: 'array',
          of: [
            {
              title: 'Industries',
              type: 'object', 
              fields: [
                {
                  name: 'image',
                  title: 'Industry Image',
                  type: 'image'
                },
                {
                  name: 'description',
                  title: 'Industry Description',
                  type: 'array',
                  of: [{'type': 'block'}]
                },
              {
                name: 'category',
                title: 'Service Category',
                type: 'string',
                options: {
                  list: [
                    { title: 'Regional', value: 'regional' },
                    { title: 'Urban', value: 'urban' },
                    { title: 'Industrial', value: 'industrial' },
                    { title: 'Institutional', value: 'institutional' },
                    { title: 'Commercial', value: 'commercial' },
                    { title: 'Residential + Mixed-Use', value: 'residential-mixed-use' }
                  ],
                  layout: 'dropdown', // or 'radio' if you prefer
                  preview: {
                    select: {
                      title: 'title',
                      media: 'image'
                    }
                  }
                }
              },
              {
                name: 'projectLink',
                title: 'Project Link',
                type: 'string',
                description: 'Porject link URL'
              }
              ]
            }
          ]
        }),
        defineField({
          name: 'button',
          title: 'Button',
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
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
        })
      ]
    }),
    defineField({
      name: 'section3',
      title: 'Featured Projects',
      type: 'object',
      group: 'section3',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'sectionTitleButton',
          title: 'Section Title Button',
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
          name: 'featuredProjects',
          title: 'Featured Projects',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'project'}]}]
        }),
        defineField({
          name: 'bottomText',
          title: 'Bottom Text',
          type: 'string'
        }),
        defineField({
          name: 'button',
          title: 'Contact Button',
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
        })
      ]
    }),
    defineField({
      name: 'section4',
      title: 'Team Section',
      type: 'object',
      group: 'section4',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 5,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'teamMembers',
          title: 'Team Members',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'teamMember'}]}]
        }),
        defineField({
          name: 'button',
          title: 'Team Button',
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
        })
      ]
    }),
    defineField({
      name: 'section5',
      title: 'Featured Blog Posts',
      type: 'object',
      group: 'section5',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'featuredPosts',
          title: 'Featured Posts',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'post'}]}]
        }),
        defineField({
          name: 'button',
          title: 'Blog Button',
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
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      sectionHeading: 'section.heading'
    },
    prepare(selection) {
      const { title, sectionHeading } = selection
      return {
        title: title || 'Home Component',
        subtitle: sectionHeading
      }
    }
  }
});

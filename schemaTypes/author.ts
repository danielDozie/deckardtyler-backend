import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'teamMember',
      title: 'Team Member', 
      type: 'reference',
      to: [{type: 'teamMember'}],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'post'}]
        }
      ],
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'teamMember.name',
      media: 'teamMember.image'
    },
  },
})

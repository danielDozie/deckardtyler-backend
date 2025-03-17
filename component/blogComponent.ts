import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogComponent',
  title: 'Blog Page Component',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
    defineField({
      name: 'featuredPosts',
      title: 'Featured Posts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'post' }] }],
    }),
    defineField({
      name: 'postsPerPage',
      title: 'Posts Per Page',
      type: 'number',
      initialValue: 10,
    }),
    defineField({
      name: 'showAuthor',
      title: 'Show Author',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showDate',
      title: 'Show Date',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})

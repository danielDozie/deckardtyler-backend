import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'postCategory',
  title: 'Post Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title', 
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      posts: 'posts',
    },
    prepare(selection) {
      const {title, posts} = selection
      return {
        title: title,
        subtitle: `${posts?.length || 0} post${posts?.length === 1 ? '' : 's'}`
      }
    },
  },
})

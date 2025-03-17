import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'documentManager',
  title: 'Document',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'fileType',
      title: 'File Type',
      type: 'string',
      options: {
        list: [
          {title: 'Document', value: 'document'},
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'},
          {title: 'Audio', value: 'audio'},
          {title: 'Other', value: 'other'}
        ]
      }
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx,.txt,image/*,video/*,audio/*'
      },
      hidden: ({document}) => document?.fileType === 'image',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      hidden: ({document}) => document?.fileType !== 'image',
      validation: (Rule) => Rule.required()
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'file'
    }
  }
})

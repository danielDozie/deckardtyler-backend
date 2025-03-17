import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo', 
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'subtitle1',
      title: 'Subtitle 1',
      type: 'string',
    }),
    defineField({
      name: 'subtitle1Url',
      title: 'URL 1',
      type: 'url',
    }),
    defineField({
      name: 'subtitle2', 
      title: 'Subtitle 2',
      type: 'string',
    }),
    defineField({
      name: 'subtitle2Url',
      title: 'URL 2', 
      type: 'url',
    }),
  ]
})

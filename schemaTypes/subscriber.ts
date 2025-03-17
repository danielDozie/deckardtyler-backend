import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'subscriber',
  title: 'Subscriber',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
      readOnly: true
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true
    }),
    defineField({
      name: 'subscribed',
      title: 'Subscribed',
      type: 'boolean',
      initialValue: true,
      readOnly: true
    }),
    defineField({
      name: 'subscribedAt',
      title: 'Subscribed At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true
    })
  ]
})

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'message',
  title: 'Message',
  type: 'document',
  fields: [

    defineField({
      name: 'isCallbackRequest',
      title: 'Is Callback Request',
      type: 'boolean',
      initialValue: false,
      readOnly: true
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      //initialValue: ({ parent }) => parent.isCallbackRequest ? 'Callback Request' : 'Contact Message',
      readOnly: true
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      hidden: ({ parent }) => parent.isCallbackRequest,
      readOnly: true
      
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      hidden: ({ parent }) => parent.isCallbackRequest,
      readOnly: true
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      hidden: ({ parent }) => parent.isCallbackRequest,
      readOnly: true
    }),
    defineField({
      name: 'callbackName',
      title: 'Contact Name',
      type: 'string',
      hidden: ({ parent }) => !parent.isCallbackRequest,
      readOnly: true
    }),
    defineField({
      name: 'callbackPhoneNumber',
      title: 'Contact Phone Number',
      type: 'string',
      hidden: ({ parent }) => !parent.isCallbackRequest,
      readOnly: true
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true
    })
  ]
})

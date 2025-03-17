import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'isStat',
            title: 'Is Stat',
            description: 'Is this Item a stat?',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'statNumber',
            title: 'Stat Number',
            type: 'string',
            hidden: ({ document }) => !document?.isStat
        }),
        defineField({
            name: 'statHeadline',
            title: 'Stat Headline',
            type: 'string',
            hidden: ({ document }) => !document?.isStat
        }),

        // Otherwise

        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            hidden: ({ document }) => !!document?.isStat,
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: "block" }],
            hidden: ({ document }) => !!document?.isStat,
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'string',
            hidden: ({ document }) => !!document?.isStat,
        }),
        defineField({
            name: 'clients',
            title: 'Clients',
            type: 'string',
            hidden: ({ document }) => !!document?.isStat,
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            hidden: ({ document }) => !!document?.isStat,
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            hidden: ({ document }) => !!document?.isStat,
        }),
        defineField({
            name: 'displayImage',
            title: 'Display Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            hidden: ({ document }) => !!document?.isStat,
        }),
        defineField({
            name: 'projectGallery',
            title: 'Project Gallery',
            type: 'array',
            of: [
                { type: 'image', options: { hotspot: true } },
            ],
            hidden: ({ document }) => !!document?.isStat,
        }),
        defineField({
            name: 'projectPresentation',
            title: 'Project Presentation',
            type: 'array',
            of: [
                {type: 'object', fields: [
                    {name: 'embedUrl', type: 'url', title: 'Embed url'},
                    {name: 'displayImage', type: 'image', title: 'Display image', options: {hotspot: true}},
                ]}
            ],
            hidden: ({ document }) => !!document?.isStat,
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            hidden: ({ document }) => !!document?.isStat,
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'array',
            of: [{ type: 'string' }],
            hidden: ({ document }) => !!document?.isStat,
        }),
        defineField({
            name: 'size',
            title: 'Size',
            type: 'string',
            options: {
                list: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Large', value: 'large' },
                    { title: 'Small', value: 'small' },
                ],
            },
            hidden: ({ document }) => !!document?.isStat,
        }),
        defineField({
            name: 'isLeft',
            title: 'Is Left',
            type: 'boolean',
            initialValue: true,
            hidden: ({ document }) => !!document?.isStat,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            isStat: 'isStat',
            description: 'description',
            image: 'displayImage' // Ensure this is the correct path to the image
        },
        prepare({ title, isStat, description, image }) {
            return {
                title: isStat ? description.statHeadline : title,
                subtitle: isStat ? description.statHeadline : description?.[0]?.children?.[0]?.text,
                media: image ? image : null // Ensure media is set to null if image is not available
            };
        },
    },
});

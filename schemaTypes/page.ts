import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true
    },
    {
      name: 'seo',
      title: 'SEO & Metadata'
    },
    {
      name: 'preview',
      title: 'Preview Settings'
    }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content'
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
      group: 'content'
    }),
    defineField({
      name: 'content',
      title: 'Content (Sections)',
      type: 'array',
      of: [
        {
          type: 'section'
        }
      ],
      validation: (Rule) => Rule.required(),
      group: 'content'
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title used for SEO (if different from main title)',
      validation: (Rule) => Rule.max(60).warning('Longer titles may be truncated by search engines'),
      group: 'seo'
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description for search engines',
      validation: (Rule) => Rule.max(160).warning('Longer descriptions may be truncated by search engines'),
      group: 'seo'
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Add keywords that describe the page',
      group: 'seo'
    }),
    defineField({
      name: 'isIndexed',
      title: 'Search Engine Indexing',
      type: 'boolean',
      description: 'Should this page be indexed by search engines?',
      initialValue: true,
      group: 'seo'
    }),
    defineField({
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image shown when sharing on social media',
      options: {
        hotspot: true,
      },
      group: 'preview'
    }),
    defineField({
      name: 'previewTitle',
      title: 'Preview Title',
      type: 'string',
      description: 'Custom title for preview (defaults to main title if empty)',
      group: 'preview'
    }),
    defineField({
      name: 'previewDescription',
      title: 'Preview Description',
      type: 'text',
      rows: 2,
      description: 'Custom description for preview (defaults to meta description if empty)',
      group: 'preview'
    }),
  ],
  preview: {
    select: {
      title: 'previewTitle',
      fallbackTitle: 'title',
      subtitle: 'previewDescription',
      fallbackSubtitle: 'metaDescription',
      media: 'openGraphImage',
      slug: 'slug.current'
    },
    prepare({title, fallbackTitle, subtitle, fallbackSubtitle, media, slug}) {
      return {
        title: title || fallbackTitle || 'Untitled Page',
        subtitle: subtitle || fallbackSubtitle || `/${slug || ''}`,
        media: media
      }
    }
  },
})

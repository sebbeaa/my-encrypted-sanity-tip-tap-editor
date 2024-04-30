import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'page',
  title: 'Page',
  icon: DocumentIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      initialValue: 'New Page',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pageContent',
      title: 'Page Content',
      type: 'content',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Private Page',
        title,
      }
    },
  },
})

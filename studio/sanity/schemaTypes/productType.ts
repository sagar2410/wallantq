import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleAccent',
      title: 'Title Accent',
      type: 'string',
      description: 'Italic accent word in the title',
    }),
    defineField({
      name: 'titleAfter',
      title: 'Title After',
      type: 'string',
      description: 'Text after the accent word',
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
    defineField({
      name: 'sku',
      title: 'SKU',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'num',
      title: 'Number',
      type: 'string',
      description: 'e.g., Nº 001',
    }),
    defineField({
      name: 'sub',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      initialValue: 'Wall art',
    }),
    defineField({
      name: 'material',
      title: 'Material',
      type: 'string',
      initialValue: 'Dimensional Wood Relief',
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
    }),
    defineField({
      name: 'weight',
      title: 'Weight',
      type: 'string',
      initialValue: 'On request',
    }),
    defineField({
      name: 'finish',
      title: 'Finish',
      type: 'string',
      initialValue: 'Hand Painted with Protective PU Coat',
    }),
    defineField({
      name: 'deck',
      title: 'Deck / Description',
      type: 'text',
    }),
    defineField({
      name: 'maker',
      title: 'Maker',
      type: 'string',
      initialValue: 'Wallantq Private Atelier',
    }),
    defineField({
      name: 'leadTime',
      title: 'Lead Time',
      type: 'string',
      initialValue: 'Ready to ship · 7 days',
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
    }),
    defineField({
      name: 'colorPalette',
      title: 'Color Palette',
      type: 'string',
    }),
    defineField({
      name: 'mood',
      title: 'Mood',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'provenance',
      title: 'Provenance / Care & Assurance',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'provenanceItem',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'body', title: 'Body', type: 'text'},
          ],
        },
      ],
    }),
    // Option to upload new image to Sanity OR use legacy Hostinger assets
    defineField({
      name: 'mediaSource',
      title: 'Media Source',
      type: 'string',
      options: {
        list: [
          {title: 'Use Hostinger Legacy Subdomain (using SKU)', value: 'hostinger'},
          {title: 'Upload directly to CMS', value: 'cms'},
        ],
        layout: 'radio',
      },
      initialValue: 'hostinger',
    }),
    defineField({
      name: 'productImage',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({document}) => document?.mediaSource !== 'cms',
    }),
    defineField({
      name: 'productVideo',
      title: 'Product Video File',
      type: 'file',
      description: 'Upload product video (.mp4)',
      hidden: ({document}) => document?.mediaSource !== 'cms',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product?',
      type: 'boolean',
      initialValue: false,
      description: 'Display this product in the featured gallery on the homepage',
    }),
    defineField({
      name: 'newArrival',
      title: 'New Arrival?',
      type: 'boolean',
      initialValue: false,
      description: 'Display this product in the "Recently added" section on the homepage',
    }),
    defineField({
      name: 'hasVideo',
      title: 'Has Video? (For Hostinger legacy)',
      type: 'boolean',
      initialValue: true,
      hidden: ({document}) => document?.mediaSource !== 'hostinger',
    }),
  ],
})

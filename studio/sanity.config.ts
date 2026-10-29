'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {HelpCircleIcon} from '@sanity/icons'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'
import {GuideTool} from './sanity/guide/GuideTool'

export default defineConfig({
  name: 'wallantq',
  title: 'Wallantq Studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  // Client handbook at /admin/guide — Studio tools only render after sign-in
  tools: (prev) => [
    ...prev,
    {name: 'guide', title: 'Guide', icon: HelpCircleIcon, component: GuideTool},
  ],
})

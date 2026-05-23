import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'
import { theme } from './theme'

const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "36w74cui").trim()
const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || "production").trim()

export default defineConfig({
  basePath: '/admin',
  name: 'DecimaMinusLtd_CMS',
  title: 'Decima Minus Ltd CMS',

  projectId,
  dataset,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
  theme,
})

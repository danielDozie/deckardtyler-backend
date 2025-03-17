import { theme } from 'https://themer.sanity.build/api/hues?primary=2d2e2f';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import {
  dashboardTool,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard";
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list'



import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import { deskStructure } from './structures/desk'
import { DTYLLogo } from './component/DTYLLogo'
import Preview from './component/Preview';

export default defineConfig({
  name: 'default',
  title: 'deckardtyler',

  projectId: 'a62sg25p',
  dataset: 'production',
  studioHost: 'dtyl-backend',
  theme,
  form: {
    components: {
      preview: Preview, //TODO: not working - check and fix
    },
  },
  icon: () => DTYLLogo,
  plugins: [
    dashboardTool({
    widgets: [
        documentListWidget({ layout: { width: 'medium' }, }),
      projectUsersWidget(),
      projectInfoWidget(),
    ]
  }),
    structureTool({
    structure: deskStructure
    }),
    visionTool(),
    media(),
    unsplashImageAsset(),
  ],

  schema: {
    types: schemaTypes,
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

// @ts-ignore
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        (_options?: any, nuxt?: any) => {
            // @ts-ignore
            nuxt.hooks.hook('vite:extendConfig', (config?: any) => {
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    routeRules: {
        '/': {prerender: true},
        // Cached for 1 hour
        // '/api/*': {cache: {maxAge: 60 * 60}},
        // Redirection to avoid 404
        '/old-page': {
            redirect: {to: '/new-page', statusCode: 302}
        }
    },
    server: {
        // @ts-ignore
        port: process.env.PORT || 3001,
        host: '0.0.0.0'
    },
})

// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
// @ts-ignore
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration
        theme: {
            defaultTheme: 'myCustomLightTheme',
            themes: {
                myCustomLightTheme,
            },
        },
        display: {
            mobileBreakpoint: 'sm',
            // thresholds: {
            //     xs: 0,
            //     sm: 340,
            //     md: 540,
            //     lg: 800,
            //     xl: 1280,
            // },
        },

    })
    app.vueApp.use(vuetify)
})

const myCustomLightTheme = {
    dark: false,
    // colors: {
    //     background: '#EEECE8',
    //     surface: '#EEECE8',
    //     // primary: '#6200EE',
    //     'primary-darken-1': '#c9c8c4',
    //     'secondary-darken-1': '#018786',
    //     error: '#B00020',
    //     info: '#2196F3',
    //     success: '#4CAF50',
    //     warning: '#FB8C00',
    //     primary: '#E64926',
    //     accent: '#1D1D1D',
    //     secondary: '#EEECE8',
    //     lighter: '#EEECE8',
    //     darker: '#E4DFD4',
    // },
    colors: {
        background: '#ffffff',
        surface: '#f6f9fc',
        // primary: '#6200EE',
        'primary-darken-1': '#c9c8c4',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        primary: '#e94560',
        accent: '#1D1D1D',
        secondary: '#0f3460',
        lighter: '#ffffff',
        darker: '#E4DFD4',
    },
}



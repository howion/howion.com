const isProduction = process.env.NODE_ENV === 'production'

export const App = {
    name: 'Howion',
    baseUrl: isProduction ? 'https://howion.com' : 'http://localhost:3000',
    isProduction,
    version: '0.1.0',
    defaults: {
        description: 'Howion\'s Personal Website',
        author: 'howion',
        keywords: ['howion', 'omer', 'mert', 'coskun', 'omer mert coskun'],
        themeColor: '#010102'
    },
    api: {
        baseUrl: isProduction ? 'https://howion.com/api' : 'http://localhost:3000/api'
    }
} as const

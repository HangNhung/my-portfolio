const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
    plugins: [
        // require("postcss-import"), 
        require("tailwindcss")("./tailwind.config.js"),
        require("autoprefixer"),
        cssnano({
            preset: 'default'
        }),
        purgecss({
            content: ['**/*.js'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
        ]
   };

// use this config to only add prefixes and removing comments in production
// module.exports = {
//     plugins: [
//       require('tailwindcss'),
//       process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
//       process.env.NODE_ENV === 'production'
//         ? cssnano({ preset: 'default' })
//         : null,
//       purgecss({
//         content: ['./layouts/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
//         defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
//       })
//     ]
//   }
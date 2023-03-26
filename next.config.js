/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    compress: true, // disable if proxy already compresses
    optimizeFonts: true
    // experimental: {
    //     optimizeCss: true,
    // }
    // webpack: (config, options) => {
    //     config.plugins.push(new StylelintPlugin())
    //     return config
    // }
}

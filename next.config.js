module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co']
  },
  env: {
    IMGBB_API: process.env.IMGBB_API,
    URL: process.env.URL,
    IMGBB_UPLOAD: process.env.IMGBB_UPLOAD
  }
}

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_CLOUD_NAME'),
        api_key: env('CLOUDINARY_API_KEY'),
        api_secret: env('CLOUDINARY_API_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "strapi-zeptomail",
      providerOptions: {
        apiKey: env("ZEPTOMAIL_API_KEY"),
      },
      settings: {
        defaultFrom: "No-reply <no-reply@srsths.edu.ph>"
      },
    },
  },
});

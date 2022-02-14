module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '32db319638a6f39085b8381f6d86f5e5'),
  },
});

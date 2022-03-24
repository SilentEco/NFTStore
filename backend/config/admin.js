module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f5ea0b7ee524238ee24f39ac5e559fa7'),
  },
});

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9dfcdce48b89e8e8f178a6e926f18b34'),
  },
});

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'KLRPYoYpQe1OTSfvXJQCfVrsl4IsJCp3DIzVr9aV43k='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'ZzUV5R8dYr43+MgxCsSURw=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});

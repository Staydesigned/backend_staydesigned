module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/similar-designs/:type',
      handler: 'design.similarDesigns',
      config: {
        auth: false,
      },
    },
  ],
};

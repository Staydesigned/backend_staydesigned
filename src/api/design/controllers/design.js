'use strict';

/**
 * design controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::design.design', ({ strapi }) => ({

  // Extending the core controller by adding the custom logic
  async similarDesigns(ctx) {
    const { type } = ctx.params;

    try {
      // Query to find designs that match the 'type' and limit to 3
      const similarDesigns = await strapi.entityService.findMany('api::design.design', {
        filters: { type: type },
        limit: 3,
        populate: '*'
      });

      // Return the filtered designs as the response
      return similarDesigns;

    } catch (error) {
      // Handle errors, for example, invalid 'type'
      ctx.throw(400, 'Unable to fetch similar designs');
    }
  },

}));

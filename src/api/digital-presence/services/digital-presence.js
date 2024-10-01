'use strict';

/**
 * digital-presence service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::digital-presence.digital-presence');

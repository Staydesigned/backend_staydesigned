'use strict';

/**
 * infrastructure-image service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::infrastructure-image.infrastructure-image');

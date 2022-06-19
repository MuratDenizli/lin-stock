'use strict';

/**
 * set service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::set.set');

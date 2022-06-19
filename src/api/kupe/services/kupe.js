'use strict';

/**
 * kupe service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kupe.kupe');

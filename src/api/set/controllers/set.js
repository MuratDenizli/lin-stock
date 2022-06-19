'use strict';

/**
 *  set controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::set.set');

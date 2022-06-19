'use strict';

/**
 * yuzuk service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::yuzuk.yuzuk');

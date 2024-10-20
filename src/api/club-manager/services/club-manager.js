'use strict';

/**
 * club-manager service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::club-manager.club-manager');

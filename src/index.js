'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap(/*{ strapi }*/) {
    const conditions = [
      {
        displayName: "Belongs to same club",
        name: "belongs-to-same-club",
        async handler(user) {
          // get from club-manager and compare if user belongs to the same
          // club as post
          const result = await strapi.db.query("api::club-manager.club-manager").findOne({
            where: {
              user: {
                id: user.id
              }
            },
            populate: {
              user: true,
              club: true
            }
          })

          return {
            id: {
              $eq: result.club.id
            }
          }
        }
      }
    ]

    await strapi.admin.services.permission.conditionProvider.registerMany(conditions)
  },
};

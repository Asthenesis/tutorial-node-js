"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "john@email.com",
          uuid: "38f3611e-9f42-4242-8607-737d4557dec4",
          role: "admin",
          createdAt: "2023-09-12T08:11:05.028Z",
          updatedAt: "2023-09-12T08:12:22.938Z",
        },
        {
          name: "Jane Doe",
          email: "jane@email.com",
          uuid: "45f3611e-9f42-4242-8607-737d4557dec4",
          role: "admin",
          createdAt: "2023-09-12T08:11:05.028Z",
          updatedAt: "2023-09-12T08:12:22.938Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};

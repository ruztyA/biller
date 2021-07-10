"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Option_prices",
      [
        {
          option_id: 1,
          price_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 1,
          price_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 1,
          price_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 1,
          price_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 1,
          price_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 1,
          price_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 1,
          price_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 1,
          price_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 3,
          price_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 3,
          price_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 3,
          price_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 3,
          price_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 3,
          price_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 3,
          price_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 3,
          price_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 3,
          price_id: 8,
          provider: null,
          package_name: null,
          description: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 4,
          price_id: 1,
          provider: "Telkomsel",
          package_name: "Internet 2GB",
          description:
            "Paket Internet berlaku untuk 3 hari, dengan kuota : 2 GB internet untuk akses internet di jaringan 2G/3G/4G",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 4,
          price_id: 2,
          provider: "Telkomsel",
          package_name: "Internet 5GB",
          description:
            "Paket Internet berlaku untuk 7 hari, dengan kuota : 5 GB internet untuk akses internet di jaringan 2G/3G/4G",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 4,
          price_id: 3,
          provider: "Telkomsel",
          package_name: "Internet OMG! 14GB",
          description:
            "Paket Internet OMG! berlaku untuk 30 hari, dengan kuota : Kuota Internet dengan akses di semua jaringan (2G/3G/4G). Kuota 2 GB OMG! untuk akses Youtube, Facebook, Instagram, MAXstream, HOOQ, Viu, iFlix, Klik Film, Bein Sport, dan Nickelodeon Play berlaku 30 hari. Termasuk berlangganan HOOQ 30 hari.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          option_id: 4,
          price_id: 4,
          provider: "Telkomsel",
          package_name: "Internet OMG! 52GB",
          description:
            "Paket Internet OMG! berlaku untuk 30 hari, dengan kuota : Kuota Internet dengan akses di semua jaringan (2G/3G/4G). Kuota 2 GB OMG! untuk akses Youtube, Facebook, Instagram, MAXstream, HOOQ, Viu, iFlix, Klik Film, Bein Sport, dan Nickelodeon Play berlaku 30 hari. Termasuk berlangganan HOOQ 30 hari.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Option_prices", null, {});
  },
};

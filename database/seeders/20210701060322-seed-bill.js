"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "bills",
      [
        {
          user_id: 1,
          bill_type: "Listrik-Token",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          bill_type: "Listrik-Tagihan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          bill_type: "PDAM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          bill_type: "BPJS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // Already Paid Case
          bill_type: "BPJS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // VA Number Non Active
          bill_type: "BPJS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // PDAM Service Not Active
          bill_type: "PDAM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // PDAM Service Already Paid
          bill_type: "PDAM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // PDAM Service Late 1 Month
          bill_type: "PDAM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // PDAM Service Late 2 Month
          bill_type: "PDAM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // PDAM Service Late 2 Month
          bill_type: "PDAM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // Listrik Token Bank Transfer Confirmation // id : 12
          bill_type: "Listrik-Token",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // Listrik Tagihan Bank Transfer Confirmation // id : 13
          bill_type: "Listrik-Tagihan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // Mobile Pulsa Bank Transfer Confirmation // id : 14
          bill_type: "Mobile-Pulsa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // Mobile Internet Bank Transfer Confirmation // id : 15
          bill_type: "Mobile-Internet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // Landline Bank Transfer Confirmation // id : 16
          bill_type: "Landline",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // Internet-TV Bank Transfer Confirmation // id : 17
          bill_type: "Internet-TV",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // PDAM Bank Transfer Confirmation // id : 18
          bill_type: "PDAM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // BPJS Bank Transfer Confirmation // id : 19
          bill_type: "BPJS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3, // No Recurring Bank Transfer Confirmation // id : 20
          bill_type: "Listrik-Tagihan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("bills", null, {});
  },
};

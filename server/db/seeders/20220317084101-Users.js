'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [
       {
        name: 'Алексей',
        surname: 'Киселев',
        email: 'alex@gmail.com',
        password: '123',
        telephone: '+7-999-999-00-00',
        city: 'Москва',
        img: '/img/Ava_3.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ольга',
        surname: 'Нагорная',
        email: 'olya@gmail.com',
        password: '123',
        telephone: '+7-999-999-00-01',
        city: 'Москва',
        img: '/img/Ava_4.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Александр',
        surname: 'Цветков',
        email: 'hello@podarki-ot-dushi.com',
        password: '123',
        telephone: '+7-999-999-00-02',
        city: 'Москва',
        img: '/img/Ava_2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};

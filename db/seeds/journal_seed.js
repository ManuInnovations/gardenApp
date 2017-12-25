
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('journal').del()
    .then(function () {
      // Inserts seed entries
      return knex('journal').insert([
        {id: 1, entry: 'This is the first entry of the garden journal'}
      ]);
    });
};

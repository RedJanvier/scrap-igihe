exports.seed = function (knex) {
  return knex('posts')
    .del()
    .then(function () {
      return knex('posts').insert([
        {
          id: 1,
          title: 'test',
          tags: ['fake', 'test'],
          body: 'this is a fake post body',
          front_image: 'http://randomuser.me/api/portraits/men/34.jpg',
          images: [
            'http://randomuser.me/api/portraits/men/34.jpg',
            'http://randomuser.me/api/portraits/men/43.jpg',
            'http://randomuser.me/api/portraits/women/33.jpg',
          ],
          date: new Date().toISOString(),
          url: 'http://randomuser.me/api/portraits/men/34.jpg',
        },
        {
          id: 2,
          title: 'test2',
          tags: ['fake', 'test'],
          body: 'this is a fake post body',
          front_image: 'http://randomuser.me/api/portraits/men/34.jpg',
          images: [
            'http://randomuser.me/api/portraits/men/34.jpg',
            'http://randomuser.me/api/portraits/men/43.jpg',
            'http://randomuser.me/api/portraits/women/33.jpg',
          ],
          date: new Date().toISOString(),
          url: 'http://randomuser.me/api/portraits/men/34.jpg',
        },
      ]);
    });
};

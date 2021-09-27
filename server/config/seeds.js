const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Photography' },
    { name: 'Art' },
    { name: 'Albums' },
    { name: 'Sports Cards'}
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Boat',
      description:
        'A photo of a blue boat alone at sea',
      image: 'boat.jpeg',
      category: categories[0]._id,
      price: 2.99
    },
    {
      name: 'Home',
      description:
        'A vibrant orange house surronded by a lush green field',
      image: 'house.jpeg',
      category: categories[0]._id,
      price: 1.99
    },
    {
      name: 'Road',
      description:
        'A windy road by the sea side',
      image: 'road.jpeg',
      category: categories[0]._id,
      price: 2.99
    },
    {
      name: 'beach',
      description:
        'A bird\'s eye view of a sandy beach',
      image: 'beach.jpeg',
      category: categories[0]._id,
      price: 1.99
    },
    {
      name: 'Boat',
      description:
        'A photo of a blue boat alone at sea',
      image: 'boat.jpeg',
      category: categories[0]._id,
      price: 2.99
    },
    {
      name: 'Triangle',
      description:
        'An abstract art peice with different overlapping geometric shapes',
      image: 'art-triangle.jpeg',
      category: categories[1]._id,
      price: 1.99
    },
    {
      name: 'Fish',
      description:
        'A mosaic photo',
      image: 'road.jpeg',
      category: categories[1]._id,
      price: 2.99
    },
    {
      name: 'Face',
      description:
        'A close up of a person with colorful face paint',
      image: 'art-face.jpeg',
      category: categories[1]._id,
      price: 1.99
    },
    {
      name: 'Flower',
      description:
        'A field of colorful flowers',
      image: 'art-flower.jpeg',
      category: categories[1]._id,
      price: 1.99
    },
    {
      name: 'Thriller',
      description:
        'Micheal Jackson\' album thriller',
      image: 'album-thriller.jpeg',
      category: categories[2]._id,
      price: 1.99
    },
    {
      name: 'Abbey Road',
      description:
        'The Beatles album Abbey Road',
      image: 'album-abbyRoad.jpeg',
      category: categories[2]._id,
      price: 2.99
    },
    {
      name: 'Adele',
      description:
        'Adeles self titles album',
      image: 'album-adele.jpeg',
      category: categories[2]._id,
      price: 1.99
    },
    {
      name: 'Back In Black',
      description:
        'ACDC\'s album back in black',
      image: 'albums-ACDC.jpeg',
      category: categories[2]._id,
      price: 1.99
    }
  ]);

  console.log('products seeded');

  process.exit();
});

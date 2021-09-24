const db = require('../config/connection');
const { Product, Category } = require('../models');
const categorySeeds = require('./categorySeeds.json')
const productSeeds = require('./productSeeds.json');

db.once('open', async () => {
  await Product.deleteMany({});
  await Category.deleteMany({});

  await Category.create(categorySeeds);
  await Product.create(productSeeds);

  console.log('all done!');
  process.exit();
})
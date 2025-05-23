const mongoose = require('mongoose');
const Product = require('../models/Product');
const config = require('./config');

// Brand mapping from old to new
const brandMapping = {
  'ashley': 'nilkamal',
  'pottery-barn': 'durian',
  'west-elm': 'stanley',
  'crate-barrel': 'hometown',
  'ethan-allen': 'royaloak'
};

async function migrateBrands() {
  try {
    // Connect to MongoDB using the config
    await mongoose.connect(config.DBURL);
    console.log('Connected to MongoDB');

    // Get all products
    const products = await Product.find({});
    console.log(`Found ${products.length} products to migrate`);

    // Update each product's brand
    let migratedCount = 0;
    for (const product of products) {
      if (brandMapping[product.brand]) {
        const oldBrand = product.brand;
        product.brand = brandMapping[product.brand];
        await product.save();
        migratedCount++;
        console.log(`Migrated product ${product.title} from ${oldBrand} to ${product.brand}`);
      }
    }

    console.log(`Migration completed. Migrated ${migratedCount} products.`);
  } catch (error) {
    console.error('Error during migration:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run the migration
migrateBrands(); 
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db');
const assetCategoryRoutes = require('./routes/assetCategoryRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1/asset-categories', assetCategoryRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});


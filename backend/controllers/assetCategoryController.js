const AssetCategory = require('../models/AssetCategory');

exports.getAll = async (req, res) => {
  const data = await AssetCategory.findAll();
  res.json(data);
};

exports.createOne = async (req, res) => {
  const category = await AssetCategory.create(req.body);
  res.json(category);
};

exports.updateOne = async (req, res) => {
  await AssetCategory.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ message: 'Updated' });
};

exports.deleteOne = async (req, res) => {
  await AssetCategory.destroy({
    where: { id: req.params.id },
  });
  res.json({ message: 'Deleted' });
};

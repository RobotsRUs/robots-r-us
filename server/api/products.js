const router = require('express').Router();
const {
  models: { Product },
} = require('../db');

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    res.send(allProducts);
  } catch (err) {
    next(err);
  }
});

// GET /api/products/:productId
router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    } else {
      res.json(product);
    }
  } catch (err) {
    next(err);
  }
});

// POST /api/products
router.post('/', (req, res, next) => {});

// PUT /api/products
router.put('/', (req, res, next) => {});

// DELETE /api/products
router.delete('/', (req, res, next) => {});

module.exports = router;

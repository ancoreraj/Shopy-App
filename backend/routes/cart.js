const express = require("express");
const router = express.Router();

const { requireSignin, isAuth } = require("../controllers/auth");
const { addToCart, removeFromCart } = require("../controllers/cart")

router.post('/addtocart/:productId', requireSignin, isAuth, addToCart)
router.post('/removefromcart/:productId', requireSignin, isAuth, removeFromCart)

module.exports = router;


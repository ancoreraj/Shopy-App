const { errorHandler } = require("../helpers/dbErrorHandler");

exports.addToCart = (req, res) => {
    const {productId} = req.params;
    req.profile.cart.push(productId);
    req.profile.save((err)=> {
        if (err) {
            return res.status(400).json({ error: errorHandler(err) });
          }
          res.json(result);
    })
}

exports.removeFromCart = (req, res) => {
    const {productId} = req.params
    const index =  req.porfile.cart.indexOf(productId)
    if(index > -1) {
        req.profile.cart.slice(index, 1);
    }

    req.porfile.save((err) => {
        if (err) {
            return res.status(400).json({ error: errorHandler(err) });
        }
        res.json(result);
    })
}

exports.placeOrder = (req, res)
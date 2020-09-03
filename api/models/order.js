const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", //ref: dl quan he
    required: true,
  }, 
  quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model("Order", orderSchema);

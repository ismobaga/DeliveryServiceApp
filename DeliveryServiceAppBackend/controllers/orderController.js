// controllers/orderController.js
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { senderName, senderAddress, recipientName, recipientAddress } = req.body;

  try {
    const order = new Order({ senderName, senderAddress, recipientName, recipientAddress, user: req.user.id });
    await order.save();
    res.status(201).json({ message: 'Order created successfully!', order });
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

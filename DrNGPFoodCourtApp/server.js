const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/foods', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const paymentSchema = new mongoose.Schema({
  recipient: String,
  message: String,
  paymentStatus: Boolean,
  upiId: String,
});

const Payment = mongoose.model('Payment', paymentSchema);

app.post('/api/savePaymentDetails', async (req, res) => {
  const { recipient, message, upiId } = req.body;

  try {
    const savedPayment = await Payment.create({
      recipient,
      message,
      paymentStatus: true,
      upiId,
    });

    res.json(savedPayment);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

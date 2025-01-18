require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

// Save Profile
app.post("/save-profile", async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        res.json({ status: true, message: "Profile saved successfully", data: { name, email, phone } });
    } catch (error) {
        res.status(500).json({ error: "Error saving profile" });
    }
});

// Validate Bank Account
app.post("/validate-bank", async (req, res) => {
    try {
        const { account_number, bank_code } = req.body;
        const response = await axios.get(`https://api.paystack.co/bank/resolve?account_number=${account_number}&bank_code=${bank_code}`, {
            headers: { Authorization: `Bearer ${PAYSTACK_SECRET_KEY}` }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Bank account validation failed" });
    }
});

// Check Card BIN
app.get("/card-bin/:bin", async (req, res) => {
    try {
        const { bin } = req.params;
        const response = await axios.get(`https://api.paystack.co/decision/bin/${bin}`, {
            headers: { Authorization: `Bearer ${PAYSTACK_SECRET_KEY}` }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Card BIN lookup failed" });
    }
});

// Initiate Payment
app.post("/initiate-payment", async (req, res) => {
    try {
        const { email } = req.body;
        const response = await axios.post(
            "https://api.paystack.co/transaction/initialize",
            { email, amount: 400 * 100, currency: "NGN" },
            { headers: { Authorization: `Bearer ${PAYSTACK_SECRET_KEY}` } }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Payment initiation failed" });
    }
});

// Verify Payment
app.get("/verify-payment/:reference", async (req, res) => {
    try {
        const { reference } = req.params;
        const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
            headers: { Authorization: `Bearer ${PAYSTACK_SECRET_KEY}` }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Payment verification failed" });
    }
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

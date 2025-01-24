#  Paystack Payment Platform

This is a **simple payment integration platform** built with **HTML, JavaScript, Express (Node.js), and Paystack API**. It allows users to:
- ✅ Complete a profile with personal details
- ✅ Validate bank accounts using the Paystack API
- ✅ Check and save card details securely
- ✅ Initiate and complete a payment via Paystack
- ✅ Verify successful transactions

## 🌐 **Live Demo**
🔗 **Frontend (Netlify)**: [https://packstack-completeprofile.netlify.app/]  

## 🛠️ **Tech Stack**
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **API Integration**: Paystack API
- **Hosting**: Netlify (Frontend), Render (Backend)

## 🔌 **Paystack APIs Used**
This project integrates multiple Paystack API endpoints:  
1. **Bank Account Validation** ➝ `https://api.paystack.co/bank/resolve`  
2. **Card BIN Lookup** ➝ `https://api.paystack.co/decision/bin/{bin}`  
3. **Payment Initialization** ➝ `https://api.paystack.co/transaction/initialize`  
4. **Get Bank Codes** ➝ `https://api.paystack.co/bank`  
5. **Verify Payment** ➝ `https://api.paystack.co/transaction/verify/{reference}`  

## 📌 **How It Works**
1. The user **enters personal information** and saves it.
2. The system **validates the provided bank account** before proceeding.
3. The user **enters their card details**, which are checked using the **BIN Lookup API**.
4. The system **initiates a payment of ₦400** using Paystack’s **payment gateway**.
5. Once the user **completes the payment**, the system **verifies the transaction** before finalizing the process.

## 🚀 **Deployment**
- **Frontend** is deployed on **Netlify**.
- **Backend** is deployed on **Render**.



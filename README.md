# 🚀 Paystack Payment Platform

This is a **simple payment integration platform** built with **HTML, JavaScript, Express (Node.js), and Paystack API**. It allows users to:
- ✅ Complete a profile with personal details
- ✅ Validate bank accounts using the Paystack API
- ✅ Check and save card details securely
- ✅ Initiate and complete a payment via Paystack

## 🌐 **Live Demo**
🔗 **Frontend (Netlify)**: [https://packstack-completeprofile.netlify.app/]  
🔗 **Backend (Heroku)**: [https://paystack-backend-e0232dce66c6.herokuapp.com](#)  

## 🛠️ **Tech Stack**
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **API Integration**: Paystack API
- **Hosting**: Netlify (Frontend), Heroku (Backend)

## 🔌 **Paystack APIs Used**
This project integrates multiple Paystack API endpoints:  
1. **Bank Account Validation** ➝ `https://api.paystack.co/bank/resolve`  
2. **Card BIN Lookup** ➝ `https://api.paystack.co/decision/bin/{bin}`  
3. **Payment Initialization** ➝ `https://api.paystack.co/transaction/initialize`  
4. **Get Bank Codes** ➝ `https://api.paystack.co/bank`  

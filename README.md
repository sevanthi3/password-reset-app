# Password Reset App — Backend

This is the backend for a secure Password Reset application using **Node.js**, **Express**, **MongoDB**, and **JWT**. It allows users to register, login, request password reset via email, and securely update their password using a token.

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- Bcrypt.js (for password hashing)
- JWT (for authentication)
- Nodemailer (for email service)
- dotenv (.env environment management)

---

## 📦 API Endpoints

| Method | Route | Description |
|--------|--------------------------------------|------------------------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |
| POST | `/api/auth/forgot-password` | Send password reset link |
| POST | `/api/auth/reset-password/:token` | Reset password with token |

---

## 🧪 Postman Collection

You can test all routes using this Postman collection:  
**[Click here to view the Postman collection](https://documenter.getpostman.com/view/44617620/2sB2qWFPDi)**  
(Replace the link with your exported collection URL)

To import:
1. Open Postman
2. Click **"Import"**
3. Paste the link or upload the exported `.json` file

---



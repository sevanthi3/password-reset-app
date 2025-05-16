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

## 🛠️ Environment Variables (.env)

Create a `.env` file in your backend folder and add:

```env
MONGO_URI=mongodb+srv://sevanthimayak3:mayak%401234@cluster0.o1u6k3l.mongodb.net/
JWT_SECRET=cd51930ac7c37eaaf2575087ad910e743b0b1bdeab08089f130c72c10b403e5a79c8fa45c2d2797a39c114405dcdc8a2cdf5f95b690ba0973d5de59efc258086
EMAIL_USER=sevanthimayak3@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
FRONTEND_URL=http://localhost:5173/

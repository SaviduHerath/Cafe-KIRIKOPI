# Cafe KiriKopi ☕️

A full-stack food ordering and cafe management application built with the MERN stack (MongoDB, Express, React, Node.js). 

## 🌟 Features

- **Customer Frontend**: Browse the menu, add items to the cart, and place orders.
- **Admin Dashboard**: Manage menu items, view incoming orders, and update order statuses.
- **Authentication**: Secure user login and registration using JSON Web Tokens (JWT).
- **Payment Integration**: Secure checkout process using Stripe.
- **Responsive Design**: Beautiful UI that works across desktop and mobile devices.

## 🏗️ Project Structure

This repository is divided into three main parts:

- **`/frontend`**: The customer-facing React web application.
- **`/admin`**: The admin panel React application for cafe staff.
- **`/backend`**: The Express.js backend REST API handling database operations, authentication, and payments.

## 🚀 Tech Stack

- **Frontend & Admin**: React, Vite, React Router, Axios
- **Backend**: Node.js, Express, Mongoose (MongoDB), JSON Web Token (JWT), Multer (Image Uploads)
- **Database**: MongoDB
- **Payments**: Stripe

## ⚙️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB account and connection URI
- Stripe account (for payment processing)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add your environment variables:
   ```env
   JWT_SECRET="your_jwt_secret"
   STRIPE_SECRET_KEY="your_stripe_secret_key"
   ```
   *(Note: MongoDB connection URI is configured in `backend/server.js` or `backend/config/db.js`)*
4. Start the backend server:
   ```bash
   npm run dev
   ```
   The backend will run on `http://localhost:4000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend will run on the port provided by Vite (usually `http://localhost:5173`).

### Admin Setup

1. Navigate to the admin directory:
   ```bash
   cd admin
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

## 📝 License

This project is licensed under the ISC License.

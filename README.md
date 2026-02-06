# Paradise Nursery 🌿

Welcome to **Paradise Nursery**, a React-based e-commerce application for houseplant enthusiasts. This application allows users to browse a curated selection of plants, learn about them, and manage their shopping cart for a seamless checkout experience.

## 🚀 Live Demo
[View Live Demo](https://athul-sivanand.github.io/IBM-React-course) _(Note: Ensure this link matches your deployment)_

## ✨ Features

- **Landing Page**: A beautiful, welcoming introduction to the nursery with a call-to-action to get started.
- **Product Listing**: Browse a variety of houseplants categorized by type (Indoor, Outdoor, Succulents).
- **Shopping Cart**: 
  - Add items to your cart.
  - specific "Add to Cart" button updates to "Add More" if the item is already selected.
  - Adjust quantities or remove items entirely.
  - Real-time total cost and item count updates.
- **Responsive Design**: Fully responsive UI built with custom CSS, generic Flexbox, and Grid layouts.
- **State Management**: specific `CartContext` using React Context API for global state management without external libraries like Redux.

## 🛠️ Technologies Used

- **React.js** (Vite)
- **React Router** (Single Page Application navigation)
- **Context API** (State Management)
- **CSS3** (Custom styling, Variables, Flexbox, Grid)
- **GitHub Pages** (Deployment)

## 📦 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js installed (v14 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/athul-sivanand/Paradise-Nursery.git
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🚢 Deployment

This project is configured for deployment on **GitHub Pages**.

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```
   This command pushes the `dist` folder to the `gh-pages` branch.

## 📂 Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # Reusable UI components (Header, ProductCard, CartItem)
├── context/        # Context API definitions (CartContext)
├── data/           # Static data files (plants.js)
├── pages/          # Page components (LandingPage, ProductListingPage, CartPage)
├── App.jsx         # Main application component with Routing
└── main.jsx        # Entry point
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

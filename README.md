# TOP - 🛒 React Shopping Cart Project

A simple e-commerce demo built with **React** to practice component design, state management, API fetching, routing, and testing.  
This project simulates a small shop where users can browse products, add them to a cart, and adjust quantities.

---

## 🚀 Features

- **Multi-page setup with React Router**
  - Home page with hero section and intro text
  - Shop page with product listing
  - Cart page with dynamic cart management

- **Reusable components**
  - Product cards with title, image, price, and quantity controls
  - Navbar displayed on all pages, including a live cart count
  - Cart item cards with quantity update & remove options

- **Quantity control**
  - Increment and decrement buttons
  - Manual input field for custom quantities
  - Real-time total price per item

- **Cart functionality**
  - Add products with a chosen quantity
  - Automatically update if the same item is added again
  - Live cart count displayed in the navbar
  - Adjust quantity directly in the cart page

- **API integration**
  - Products fetched from [Fake Store API](https://fakestoreapi.com/)

- **Routing & SPA behavior**
  - Handled with `react-router-dom`
  - Works as a single-page application after deployment

- **Styling**
  - Responsive layout with custom CSS
  - Styled quantity picker (custom input instead of browser spinners)

- **Testing**
  - Unit & integration tests with React Testing Library
  - Focus on components and user interactions (not external libraries)

- **Deployment**
  - Built and deployed as a Single Page Application (SPA)

---

## 🧑‍💻 Learnings

This project was built to practice and solidify key React concepts:

- Setting up a **React project structure** with components and pages
- Passing data and methods via **props** and **Outlet context**
- Managing **global state** (cart items) with `useState`
- Updating nested data immutably (e.g. increasing item quantities)
- Working with **React Router v6** for multipage navigation
- Handling **form inputs** (number inputs, preventing refresh on submit)
- Using **object spread syntax** to update arrays/objects
- Styling with **CSS** and fixing browser quirks (e.g. number input arrows, scrollbars)
- Fetching data asynchronously with **fetch API**
- Writing **tests with React Testing Library**
- Configuring deployment for an SPA

---

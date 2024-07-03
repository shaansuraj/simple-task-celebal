# Hello World Application

**Author: Suraj Kumar Sahu (aka Shaan Suraj)**

---

## Overview

This project is a simple yet visually appealing "Hello World" web application built with Node.js, Express.js, and EJS for templating. The backend is powered by MongoDB for storing reviews.

---

## Features

- **Hello World Message**: Click a button to fetch and display a welcome message from the server.
- **Enhanced UI/UX**: The application features a modern, responsive design with animations and a clean layout.

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shaansuraj/hello-world-app.git
   cd hello-world-app

2. **Install Dependencies**
    npm install

3. **Setup Environment Variables**
    Create an .env file in the root directory and add these values
    PORT=3000

4. **Run the application**
    nodemon index.js


5. **Access the application**
    Open your browser and go to http://localhost:3000


## Project Structure
hello-world/
├── controllers/
│   ├── messageController.js
├── routes/
│   ├── messageRoutes.js
├── views/
│   └── index.ejs
├── public/
│   ├── styles.css
│   └── scripts.js
├── config/
│   └── config.js
├── middlewares/
│   └── logger.js
├── models/
│   └── review.js
├── index.js
└── package.json

## Usage
**Fetch Hello World Message:**

- Click the "Click Me!" button to fetch and display a welcome message from the server.

## Dependencies
- Node.js
- Express.js
- EJS
- dotenv

## Contributing
    Contributions are welcome! Please open an issue or submit a pull request if you have any improvements.

## Acknowledgements
    This project was created as part of an assignment at Celebal Technologies.

**Author:** ***Suraj Kumar Sahu (aka Shaan Suraj)***

**Email:** ***surajsahu9658@gmail.com***
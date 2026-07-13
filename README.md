# 📦 Asset Management Dashboard

A modern Asset Management Dashboard built with **React**, **Context API**, and **Tailwind CSS** for managing organizational assets. Users can add assets through a form and view them in a dynamic table with color-coded status indicators.

## 🚀 Features

- ➕ Add new assets using a modal form
- 📋 Display assets in a dynamic table
- 🎨 Color-coded status badges
  - 🟢 Available
  - 🔵 Assigned
  - 🔴 Repair
- ⚛️ Global state management using React Context API
- 💻 Responsive and clean UI
- ✨ Reusable React components

## 🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- React Context API
- React Icons

## 📂 Folder Structure

```
src
│
├── assets/                   
│
├── components/
│   ├── features/              # Reusable feature components
│   │   ├── ActionsBtns.jsx
│   │   ├── AssetsForm.jsx
│   │   ├── Cards.jsx
│   │   ├── HeaderBtns.jsx
│   │   ├── MobileTable.jsx
│   │   ├── SortDropDown.jsx
│   │   ├── Table.jsx
│   │   └── TableContent.jsx
│   │
│   └── Page/
│       └── Dashboard.jsx      # Main Dashboard Page
│
├── context/
│   └── AssetContext.jsx       # Global State Management
│
├── utils/                     # Helper Functions
│   ├── cards.js
│   ├── formInputs.js
│   ├── useClickOutside.js
│   └── validate.js
│
├── App.jsx                    # Root Component
├── main.jsx                   # Application Entry Point
└── index.css                  # Global Styles

Root Files
│
├── public/
├── node_modules/
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
├── .gitignore
└── README.md
```

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/asset-management-dashboard.git
```

Navigate to the project

```bash
cd asset-management-dashboard
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

## 📸 Screenshots



## 🎯 Upcoming Features

- ✏️ Edit assets
- 🗑️ Delete assets
- 🔍 Search & Filter
- 📊 Dashboard analytics
- 💾 Local Storage / Database integration
- 🔐 Authentication
- 📄 Pagination

## 📖 Learning Highlights

This project helped me practice:

- React component architecture
- State management with Context API
- Controlled Forms
- Props and Event Handling
- Dynamic Rendering with `map()`
- Tailwind CSS layouts
- Reusable UI components

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

## 📜 License


---

Made with ❤️ by **Alekh**

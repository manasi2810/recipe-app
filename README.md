# 🍳 Recipe App

A modern and user-friendly **Recipe App** built with **React and Vite** that helps users discover, search, save, and plan delicious recipes. The application uses **TheMealDB API** to fetch recipe data and provides features such as recipe search, categories, cuisines, favorites, and a weekly meal planner.

## ✨ Features

### 🔍 Recipe Search

Search for recipes by name and quickly discover meals that match your preferences.

### 🍽️ Browse by Category

Explore recipes based on different food categories such as:

* Breakfast
* Lunch
* Dinner
* Desserts
* Seafood
* Vegetarian
* And more

### 🌎 Explore by Cuisine

Discover recipes from different cuisines and explore a variety of international dishes.

### 🧊 What's in My Fridge?

Have a few ingredients at home? Enter the ingredients you have and discover recipes you can make with them.

### 📖 Recipe Details

View detailed information about each recipe, including:

* Recipe name
* Ingredients
* Instructions
* Category
* Cuisine
* Recipe image
* Additional recipe information

### ❤️ Favorites

Save your favorite recipes for quick access later. Favorites are stored using **localStorage**, so they remain available when you revisit the application.

### 📅 Weekly Meal Planner

Plan meals for the week and organize your recipes according to different days.

> 🚧 The meal-planning functionality is currently under development and uses Firebase for data storage.

## 🛠️ Tech Stack

| Technology        | Purpose                           |
| ----------------- | --------------------------------- |
| **React.js**      | Building the user interface       |
| **Vite**          | Development server and build tool |
| **React Router**  | Client-side routing               |
| **JavaScript**    | Application logic                 |
| **CSS**           | Styling and responsive UI         |
| **TheMealDB API** | Recipe data                       |
| **Firebase**      | Meal planner data storage         |
| **localStorage**  | Storing favorite recipes          |

## 📂 Project Structure

```text
recipe-app/
│
├── public/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── assets/
│   └── ...
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/manasi2810/recipe-app.git
```

2. Navigate to the project directory:

```bash
cd recipe-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local development URL shown in your terminal.

## 🔑 Environment Variables

If your Firebase configuration is required, create a `.env` file in the project root and add the required Firebase variables.

Example:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> Never commit private credentials or sensitive configuration values to GitHub.

## 🔗 API

This project uses **TheMealDB API** to retrieve recipe information.

The API provides recipe data such as:

* Meal names
* Categories
* Areas/Cuisines
* Ingredients
* Instructions
* Images

## 💡 How It Works

```text
User
  │
  ▼
React Application
  │
  ├── Search / Browse
  │       │
  │       ▼
  │   TheMealDB API
  │       │
  │       ▼
  │   Recipe Results
  │
  ├── Favorites
  │       │
  │       ▼
  │   localStorage
  │
  └── Meal Planner
          │
          ▼
       Firebase
```

## 🎯 Key Learning Outcomes

Through this project, I worked with:

* React component-based architecture
* React Hooks and state management
* React Router for navigation
* Fetching and displaying data from REST APIs
* Handling asynchronous API requests
* Search and filtering functionality
* Browser `localStorage`
* Firebase integration
* Responsive UI development
* Organizing a React project into reusable components

## 🔮 Future Improvements

Some features that can be added in future versions:

* 👤 User authentication
* ☁️ Cloud-synced favorites
* 📅 More advanced meal planning
* 🛒 Automatic shopping-list generation
* 🥗 Dietary preference filters
* ⭐ Recipe ratings and reviews
* 📱 Improved mobile experience
* 🌙 Dark mode
* 🤖 AI-powered recipe recommendations

 

GitHub: [@manasi2810](https://github.com/manasi2810)

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub!

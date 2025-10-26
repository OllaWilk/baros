# 🍸 BarOS – Drink Menu App

Welcome to BarOS, a recruitment project for the KN Solvro scientific circle at Wrocław University of Science and Technology.
This React + TypeScript application displays a list of cocktails fetched from an external API, allowing users to explore, paginate, and (soon) manage their favorite drinks. Cheers! 🥂

## 🙋🏼‍♀️ Live demo:

[![Live demo](./public/screenshot.png)](https://baros-sigma.vercel.app)

**Live site:** [https://baros-sigma.vercel.app](https://baros-sigma.vercel.app)

## ✨ Features

    ✅ Fetching data from a remote API using React Query (useQuery)

    ✅ Displaying cocktails in an interactive grid layout

    ✅ Pagination for improved performance and UX

    ✅ Routing between the main view and cocktail detail pages using React Router

    ✅ Clean component structure with TypeScript typings
    
    ✅ Modular and scalable SCSS styling system
    
## 🧩 Tech Stack

  - React.js (with hooks)

  - TypeScript

  - React Query for data fetching and caching

  - React Router DOM for navigation

  - SCSS Modules for styling

  - Deploy on Vercel

## 🦋 How It Works 

### 1. CocktailsList – Main View

Displays all cocktails fetched from the API.
Implements pagination logic to show 12 items per page.
Each cocktail card links to its detailed view.

### 2. CocktailDetails – Detail View

Fetches and displays extended information about a selected drink, including: image, category, type (alcoholic / non-alcoholic), glass type, ingredients and preparation instructions

### 3. Pagination Component

Custom pagination with dynamic page numbers. Handles navigation without reloading the page. Scrolls smoothly to the top when switching pages.

## 🧠 Challenges
The project was developed under a tight time limit (≈10 hours) as part of a recruitment task.
The main challenge was to fetch and handle a large dataset (≈500 cocktails) efficiently, ensuring the UI remains fast and responsive.


## 🧰 Installation

**Clone the project:**

```
git clone https://github.com/OllaWilk/baros
```

**Go to the project directory:**

```
cd baros
```

**Install dependencies:**

```
npm install
```

**Start the server:**

```
npm dev
```

## 🚀 Next Steps & Improvements

✅ Implement filtering and search functionality 🔧

✅ Add “Favorites” system using Context API + LocalStorage 

✅ Highlight favorite drinks across the app

✅ UI refinements and animations for better UX

## 🎉  Explore, sip, and enjoy your favorite cocktail!



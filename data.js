exports.projects = [
  {
    name: "MGL Shopping Cart",
    slug: "mgl_shop",
    url: "https://mgl-shopping.vercel.app/",
    description: `A Shopping Cart for MGL.
        Implementing react routing / SPA and managing context variables.
        This game is fully responsive, the data is fetched from 'Rawg'
        api, and its specific to the games approved at the MGL website.
        search, carousel view, cart notification , and more cool
        features are included in the shop!`,
    tech: ["react js", "css", "react router .6", "rawg api"],
    img_ph: "/images/shop_ph.jpg",
    img: "/images/shop.jpg",
  },
  {
    name: "Basic Inventory App",
    slug: "inventory",
    url: "https://basic-inventory-app-production.up.railway.app/",
    description: `Inventory management app following the MVC approach, and MongoDb as a database 
    used to store the items and categories. The app enable you to do basic CRUD operation throw 
    express routing system, and many security measures applied with express middlewares like helmet and 
    express-validator. This app comes with minimal styling as a schema for future projects or improvements.`,
    tech: ["express", "mongodb", "pug", "css"],
    img_ph: "/images/inventory_ph.jpg",
    img: "/images/inventory.jpg",
  },
  {
    name: "Remember The Heros",
    slug: "heros_memo_cards",
    url: "https://remembertheheros-abdou-naab.vercel.app/",
    description: `A Memory card game developed @ the oden project in context of
        learning side effects. this game is fully responsive in addition
        to glow and tilt animations and other side effects controls...,
        the player can manage sound, play multiple times and get to know
        the heros!`,
    tech: ["react js", "css"],
    img_ph: "/images/herosMemoCards_ph.jpg",
    img: "/images/herosMemoCards.jpg",
  },
  {
    name: "CV Builder",
    slug: "cv_builder",
    url: "https://cv-builder-abdou-naab.vercel.app/",
    description: `CV builder app that can generate a cv based on the information
        provided by the user. The app uses react.js to ensure better
        state management of dynamic content in adition to a responsive
        design`,
    tech: ["react js", "css"],
    img_ph: "/images/cvBuilder_ph.jpg",
    img: "/images/cvBuilder.jpg",
  },
  {
    name: "Weather App",
    slug: "weather_app",
    url: "https://abdou-naab.github.io/weather-app/",
    description: `User-friendly weather forecast for 3 days. Users can retrieve
    real-time weather data. The website enhances the user experience
    by visually representing the weather conditions through
    appropriate icons and search suggestions.`,

    tech: ["html", "css", "js", "weather api"],
    img_ph: "/images/weather-app_ph.jpg",
    img: "/images/weather-app.jpg",
  },
  {
    name: "Battleship",
    slug: "battleship",
    url: "https://abdou-naab.github.io/battleship",
    description: `  An engaging "Battleship" game where you compete against an
    intelligent AI with a test driven development. The game is
    designed to provide a challenging and fun experience`,
    tech: ["html", "css", "js", "Webpack", "jest"],
    img_ph: "/images/battleship_ph.jpg",
    img: "/images/battleship.jpg",
  },
  {
    name: "Todo App",
    slug: "todo_app",
    url: "https://abdou-naab.github.io/todo",
    description: ` Todo application that allows users to create, edit, and manage
    tasks or sticky notes. It features priority levels, custom
    folders, and a responsive design. All data is saved to local
    storage for convenience and accessibility. 
    they had to get us throw this with vanilla js before react *I'm fine :)*`,
    tech: ["html", "css", "js"],
    img_ph: "/images/todo-app_ph.jpg",
    img: "/images/todo-app.jpg",
  },

  {
    name: "Restaurant Page",
    slug: "restaurant",
    url: "https://abdou-naab.github.io/restaurant-page",
    description: `A dynamic restaurant homepage entirely with JavaScript and
    webpack, without any HTML. It demonstrates the power of
    JavaScript for DOM manipulation and the efficiency of webpack
    for module bundling. The project also explores the use of lazy
    loading for CSS files to optimize performance.`,
    tech: ["html", "css", "js", "Webpack"],
    img_ph: "/images/restaurant_ph.jpg",
    img: "/images/restaurant.jpg",
  },
];

Track Your Plate’s Carbon Journey

EcoMiles is a sustainability-focused web application that helps users calculate the carbon footprint of food based on food miles — the distance food travels from its origin to your plate.

It empowers users to make smarter food choices by visualizing transport emissions, suggesting eco-friendly local alternatives, and gamifying sustainable eating habits.

🚀 Problem Statement

Most people do not realize that the food they consume daily may travel thousands of kilometers before reaching them.

For example:

Avocado from Mexico → Mumbai ✈️
Coffee from Brazil → India 🚢
Blueberries from USA → India ✈️

This transportation creates a significant carbon footprint, contributing to climate change.

EcoMiles solves this by helping users:

Understand food miles
Calculate transport emissions
Compare transport modes
Discover local sustainable alternatives


## ✨ Features

🥗 Food Carbon Calculator

Calculate CO₂ emissions for food items based on:
Food origin country
Destination city
Transport mode (Air / Sea / Rail / Road)
Distance traveled using Haversine Formula

🗺️ Interactive Route Map

Visual route visualization using:
Leaflet.js
Live route plotting
Origin → Destination tracking
📊 Smart Analytics Dashboard

Built using Chart.js:

Carbon comparison charts
Weekly footprint summary
Meal history tracking
Eco score visualization

🏆 Gamification System

Includes:
Carbon grades (A → E)
Eco badges
Sustainability score
Smart recommendations

📚 Educational Learning Section

Users learn:
What are food miles?
Why transport emissions matter
Difference between Air vs Sea shipping
Local alternatives for imported foods
---

## 🧠 How It Works

1. Select your city
2. Add ingredients to your meal
3. Choose transport type & weight
4. App calculates:

   * Distance (using Haversine formula): a = sin²(Δlat/2) + cos(lat₁)·cos(lat₂)·sin²(Δlng/2)
                                         d = 2R · atan2(√a, √(1−a))
   * CO₂ emissions: CO2​ = Distance × EmissionFactor
5. Results shown on:

   * Map
   * Summary cards
   * Impact meter

---

## 🛠️ Tech Stack

* **HTML5
* **CSS
* **JavaScript 
* **Leaflet.js 

---

## 🌐 Live Demo

👉 https://yaashp.github.io/ECOROUTES/

---

## ⚙️ Installation

Clone the repo:

```bash
git clone https://github.com/your-username/FOODMILESCALCULATOR.git
```

Open in browser:

```bash
cd FOODMILESCALCULATOR
open index.html
```

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, open an issue first.

---

## 👨‍💻 Author

**Yash Phegade**

* GitHub: https://github.com/yaashp

---

## ⭐ Show Your Support

If you like this project:

👉 Star this repo
👉 Share it


---

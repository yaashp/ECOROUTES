/* ═══════════════════════════════════════════════════
   ECO-MILES  ·  main.js
   Single merged application file.
   Sections:
     1. Food & City Data
     2. Calculator Logic (Haversine, CO₂, Map, Charts)
     3. Page Navigation
     4. Eco Features (Particles, Sound, Ripple, Timeline)
═══════════════════════════════════════════════════ */

/* ═════════════════════════════════════════════════════
   FOOD DATA — 50+ items with origins & alternatives
═════════════════════════════════════════════════════ */
const FOOD_DATA = [
  {ingredient:"Rice",origin_country:"India",production_lat:22.0,production_lng:82.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Locally grown rice"},
  {ingredient:"Wheat",origin_country:"India",production_lat:30.5,production_lng:74.5,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local wheat variety"},
  {ingredient:"Quinoa",origin_country:"Peru",production_lat:-13.5,production_lng:-72.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Amaranth (Rajgira)"},
  {ingredient:"Avocado",origin_country:"Mexico",production_lat:19.5,production_lng:-99.1,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Mango or Banana"},
  {ingredient:"Almonds",origin_country:"USA",production_lat:36.7,production_lng:-119.7,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Groundnuts"},
  {ingredient:"Olive Oil",origin_country:"Spain",production_lat:39.5,production_lng:-3.7,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Sesame or Groundnut oil"},
  {ingredient:"Coffee",origin_country:"Brazil",production_lat:-14.2,production_lng:-51.9,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Indian Filter Coffee (Coorg)"},
  {ingredient:"Chocolate",origin_country:"Ivory Coast",production_lat:7.5,production_lng:-5.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Carob or local cacao"},
  {ingredient:"Banana",origin_country:"India",production_lat:11.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Apple",origin_country:"India",production_lat:34.0,production_lng:74.8,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Guava or local fruit"},
  {ingredient:"Oats",origin_country:"Australia",production_lat:-25.3,production_lng:133.8,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Ragi or Jowar"},
  {ingredient:"Soy Milk",origin_country:"China",production_lat:35.9,production_lng:104.2,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Coconut milk"},
  {ingredient:"Blueberries",origin_country:"USA",production_lat:45.5,production_lng:-122.7,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Jamun (Indian gooseberry)"},
  {ingredient:"Pasta",origin_country:"Italy",production_lat:41.9,production_lng:12.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local wheat noodles"},
  {ingredient:"Salmon",origin_country:"Norway",production_lat:60.5,production_lng:8.5,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Rohu or Catla fish"},
  {ingredient:"Black Pepper",origin_country:"India",production_lat:11.0,production_lng:76.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Kerala)"},
  {ingredient:"Tomato",origin_country:"India",production_lat:14.0,production_lng:76.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Onion",origin_country:"India",production_lat:19.7,production_lng:74.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Mango",origin_country:"India",production_lat:17.0,production_lng:78.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Coconut",origin_country:"India",production_lat:10.0,production_lng:76.3,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Kiwi",origin_country:"New Zealand",production_lat:-40.9,production_lng:174.9,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Amla (Indian gooseberry)"},
  {ingredient:"Asparagus",origin_country:"Peru",production_lat:-9.2,production_lng:-75.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Green beans"},
  {ingredient:"Maple Syrup",origin_country:"Canada",production_lat:46.8,production_lng:-71.2,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Jaggery (Gur)"},
  {ingredient:"Vanilla",origin_country:"Madagascar",production_lat:-18.8,production_lng:47.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Indian vanilla (Kerala)"},
  {ingredient:"Dates",origin_country:"Saudi Arabia",production_lat:23.9,production_lng:45.1,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Khajoor (local dates)"},
  {ingredient:"Walnuts",origin_country:"USA",production_lat:37.3,production_lng:-120.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Akhrot (Kashmiri walnut)"},
  {ingredient:"Strawberry",origin_country:"India",production_lat:18.5,production_lng:73.9,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Mahabaleshwar)"},
  {ingredient:"Jackfruit",origin_country:"India",production_lat:10.5,production_lng:76.2,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Dragon Fruit",origin_country:"Vietnam",production_lat:10.8,production_lng:106.7,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Guava"},
  {ingredient:"Chia Seeds",origin_country:"Mexico",production_lat:23.6,production_lng:-102.6,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Sabja (Basil seeds)"},
  {ingredient:"Broccoli",origin_country:"India",production_lat:28.6,production_lng:77.2,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Cauliflower"},
  {ingredient:"Cranberries",origin_country:"USA",production_lat:43.8,production_lng:-69.8,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Karonda (local berry)"},
  {ingredient:"Lentils",origin_country:"India",production_lat:25.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dal"},
  {ingredient:"Chickpeas",origin_country:"India",production_lat:24.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Garlic",origin_country:"India",production_lat:23.0,production_lng:76.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Ginger",origin_country:"India",production_lat:10.5,production_lng:76.2,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Turmeric",origin_country:"India",production_lat:11.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Erode/Sangli)"},
  {ingredient:"Spinach",origin_country:"India",production_lat:28.7,production_lng:77.1,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local seasonal greens"},
  {ingredient:"Potato",origin_country:"India",production_lat:27.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Cauliflower",origin_country:"India",production_lat:30.0,production_lng:76.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local seasonal veg"},
  {ingredient:"Paneer",origin_country:"India",production_lat:26.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dairy"},
  {ingredient:"Eggs",origin_country:"India",production_lat:18.0,production_lng:79.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local farm eggs"},
  {ingredient:"Chicken",origin_country:"India",production_lat:17.0,production_lng:78.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local poultry"},
  {ingredient:"Honey",origin_country:"India",production_lat:30.7,production_lng:76.7,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local apiary honey"},
  {ingredient:"Sunflower Oil",origin_country:"Ukraine",production_lat:48.3,production_lng:31.1,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Groundnut or mustard oil"},
  {ingredient:"Green Tea",origin_country:"China",production_lat:30.0,production_lng:120.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Assam or Darjeeling tea"},
  {ingredient:"Pineapple",origin_country:"India",production_lat:25.5,production_lng:91.9,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Assam/Meghalaya)"},
  {ingredient:"Orange",origin_country:"India",production_lat:21.0,production_lng:79.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local Nagpur orange"},
  {ingredient:"Flaxseeds",origin_country:"Canada",production_lat:53.9,production_lng:-116.6,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Alsi (local flaxseed)"},
  {ingredient:"Beef",origin_country:"Australia",production_lat:-25.0,production_lng:135.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local livestock"},
  // ── Grains & Cereals ──
  {ingredient:"Basmati Rice",origin_country:"India",production_lat:29.5,production_lng:76.5,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local rice variety"},
  {ingredient:"Brown Rice",origin_country:"India",production_lat:26.0,production_lng:84.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local brown rice"},
  {ingredient:"Sorghum (Jowar)",origin_country:"India",production_lat:18.0,production_lng:76.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Pearl Millet (Bajra)",origin_country:"India",production_lat:26.0,production_lng:73.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Finger Millet (Ragi)",origin_country:"India",production_lat:13.5,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Karnataka)"},
  {ingredient:"Corn (Maize)",origin_country:"USA",production_lat:41.0,production_lng:-93.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local maize"},
  {ingredient:"Barley",origin_country:"Germany",production_lat:51.5,production_lng:10.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local barely (Jau)"},
  {ingredient:"Buckwheat",origin_country:"China",production_lat:36.0,production_lng:110.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Amaranth"},
  {ingredient:"Teff",origin_country:"Ethiopia",production_lat:9.0,production_lng:38.7,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Ragi (Finger Millet)"},
  {ingredient:"Spelt",origin_country:"Germany",production_lat:48.0,production_lng:11.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local whole wheat"},
  {ingredient:"Farro",origin_country:"Italy",production_lat:43.0,production_lng:12.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Whole wheat berries"},
  {ingredient:"Kamut",origin_country:"USA",production_lat:47.0,production_lng:-110.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local wheat"},
  {ingredient:"Amaranth",origin_country:"Mexico",production_lat:19.0,production_lng:-99.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Rajgira (local)"},
  // ── Pulses & Legumes ──
  {ingredient:"Moong Dal",origin_country:"India",production_lat:23.0,production_lng:78.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dal"},
  {ingredient:"Toor Dal",origin_country:"India",production_lat:17.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dal"},
  {ingredient:"Urad Dal",origin_country:"India",production_lat:15.0,production_lng:79.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dal"},
  {ingredient:"Masoor Dal",origin_country:"India",production_lat:27.0,production_lng:82.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local lentils"},
  {ingredient:"Kidney Beans",origin_country:"Mexico",production_lat:20.0,production_lng:-100.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Rajma (local)"},
  {ingredient:"Black Beans",origin_country:"Brazil",production_lat:-15.0,production_lng:-49.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Kala chana (local)"},
  {ingredient:"Soybeans",origin_country:"USA",production_lat:40.0,production_lng:-90.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Rajma or local beans"},
  {ingredient:"Edamame",origin_country:"Japan",production_lat:35.0,production_lng:136.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Green peas (local)"},
  {ingredient:"Green Peas",origin_country:"India",production_lat:28.0,production_lng:76.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (seasonal)"},
  {ingredient:"Peanuts",origin_country:"India",production_lat:22.0,production_lng:72.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Gujarat)"},
  {ingredient:"Fava Beans",origin_country:"Egypt",production_lat:27.0,production_lng:30.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Val (local beans)"},
  // ── Vegetables ──
  {ingredient:"Carrot",origin_country:"India",production_lat:28.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Capsicum (Bell Pepper)",origin_country:"India",production_lat:26.0,production_lng:78.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Eggplant (Brinjal)",origin_country:"India",production_lat:20.0,production_lng:79.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Baingan)"},
  {ingredient:"Okra (Bhindi)",origin_country:"India",production_lat:17.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Bittergourd (Karela)",origin_country:"India",production_lat:16.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Andhra)"},
  {ingredient:"Ridgegourd (Turai)",origin_country:"India",production_lat:18.0,production_lng:79.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Bottle Gourd (Lauki)",origin_country:"India",production_lat:25.0,production_lng:83.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Pumpkin",origin_country:"India",production_lat:24.0,production_lng:86.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Kaddu)"},
  {ingredient:"Sweet Potato",origin_country:"China",production_lat:26.0,production_lng:114.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Shakarkand (local)"},
  {ingredient:"Celery",origin_country:"USA",production_lat:36.0,production_lng:-119.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local greens"},
  {ingredient:"Leek",origin_country:"Netherlands",production_lat:52.0,production_lng:5.5,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Spring onion (local)"},
  {ingredient:"Brussels Sprouts",origin_country:"Belgium",production_lat:50.5,production_lng:4.5,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Cabbage (local)"},
  {ingredient:"Kale",origin_country:"USA",production_lat:42.0,production_lng:-88.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Methi or Palak (local)"},
  {ingredient:"Artichoke",origin_country:"Italy",production_lat:37.0,production_lng:14.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Lotus root (local)"},
  {ingredient:"Beetroot",origin_country:"India",production_lat:25.0,production_lng:82.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Chukander)"},
  {ingredient:"Radish (Mooli)",origin_country:"India",production_lat:30.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Yam",origin_country:"Nigeria",production_lat:9.0,production_lng:8.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Suran (local)"},
  {ingredient:"Taro Root (Arbi)",origin_country:"India",production_lat:23.0,production_lng:88.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Lotus Root",origin_country:"China",production_lat:30.0,production_lng:116.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local lotus"},
  {ingredient:"Fennel",origin_country:"India",production_lat:24.0,production_lng:73.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Saunf)"},
  {ingredient:"Mushrooms (Button)",origin_country:"India",production_lat:31.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Shiitake Mushrooms",origin_country:"China",production_lat:26.0,production_lng:117.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local field mushrooms"},
  {ingredient:"Truffle",origin_country:"France",production_lat:44.0,production_lng:5.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local mushroom"},
  {ingredient:"Zucchini",origin_country:"India",production_lat:28.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Tinda or Lauki"},
  // ── Fruits ──
  {ingredient:"Papaya",origin_country:"India",production_lat:20.0,production_lng:85.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Guava",origin_country:"India",production_lat:26.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Allahabad Safeda)"},
  {ingredient:"Lychee",origin_country:"India",production_lat:25.5,production_lng:85.5,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Bihar/Muzaffarpur)"},
  {ingredient:"Pomegranate",origin_country:"India",production_lat:18.5,production_lng:75.5,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Solapur)"},
  {ingredient:"Custard Apple (Sitaphal)",origin_country:"India",production_lat:17.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Tamarind",origin_country:"India",production_lat:16.0,production_lng:79.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Andhra)"},
  {ingredient:"Grapes",origin_country:"India",production_lat:18.0,production_lng:74.5,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Nashik)"},
  {ingredient:"Watermelon",origin_country:"India",production_lat:24.0,production_lng:79.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local seasonal"},
  {ingredient:"Melon (Kharbuja)",origin_country:"India",production_lat:27.0,production_lng:78.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local seasonal"},
  {ingredient:"Passion Fruit",origin_country:"Brazil",production_lat:-20.0,production_lng:-45.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local amla or tamarind"},
  {ingredient:"Lime",origin_country:"India",production_lat:17.0,production_lng:81.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Nimbu)"},
  {ingredient:"Lemon",origin_country:"India",production_lat:25.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Grapefruit",origin_country:"USA",production_lat:28.0,production_lng:-82.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Pomelo (local)"},
  {ingredient:"Peach",origin_country:"China",production_lat:36.0,production_lng:103.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local Himachal peach"},
  {ingredient:"Apricot",origin_country:"India",production_lat:35.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Ladakh/Himachal)"},
  {ingredient:"Cherry",origin_country:"USA",production_lat:47.0,production_lng:-120.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Jamun (local)"},
  {ingredient:"Plum (Aloo Bukhara)",origin_country:"India",production_lat:34.0,production_lng:75.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Himachal)"},
  {ingredient:"Fig",origin_country:"Turkey",production_lat:38.0,production_lng:28.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Anjeer (local India)"},
  {ingredient:"Coconut Milk",origin_country:"Sri Lanka",production_lat:7.5,production_lng:80.7,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local coconut milk"},
  {ingredient:"Pomelo",origin_country:"Thailand",production_lat:15.0,production_lng:100.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Grapefruit or local"},
  {ingredient:"Mangosteen",origin_country:"Thailand",production_lat:13.0,production_lng:100.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Kokum (local)"},
  {ingredient:"Durian",origin_country:"Malaysia",production_lat:3.0,production_lng:101.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Jackfruit (local)"},
  {ingredient:"Rambutan",origin_country:"Indonesia",production_lat:-2.0,production_lng:117.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Lychee (local)"},
  // ── Nuts & Seeds ──
  {ingredient:"Cashew Nuts",origin_country:"India",production_lat:14.0,production_lng:75.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Goa/Maharashtra)"},
  {ingredient:"Pistachios",origin_country:"Iran",production_lat:33.0,production_lng:53.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Groundnuts"},
  {ingredient:"Hazelnuts",origin_country:"Turkey",production_lat:41.0,production_lng:35.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Groundnuts"},
  {ingredient:"Macadamia Nuts",origin_country:"Australia",production_lat:-28.0,production_lng:153.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Coconut pieces"},
  {ingredient:"Brazil Nuts",origin_country:"Brazil",production_lat:-5.0,production_lng:-60.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Walnuts or peanuts"},
  {ingredient:"Pine Nuts",origin_country:"China",production_lat:42.0,production_lng:125.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Groundnuts"},
  {ingredient:"Pumpkin Seeds",origin_country:"Austria",production_lat:47.0,production_lng:14.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Watermelon seeds (local)"},
  {ingredient:"Sesame Seeds",origin_country:"India",production_lat:22.0,production_lng:70.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Gujarat)"},
  {ingredient:"Sunflower Seeds",origin_country:"Russia",production_lat:53.0,production_lng:50.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local til seeds"},
  {ingredient:"Hemp Seeds",origin_country:"Canada",production_lat:52.0,production_lng:-106.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Flaxseeds"},
  {ingredient:"Poppy Seeds",origin_country:"India",production_lat:24.0,production_lng:75.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Khus khus)"},
  // ── Spices & Herbs ──
  {ingredient:"Cardamom (Elaichi)",origin_country:"India",production_lat:9.5,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Kerala/Sikkim)"},
  {ingredient:"Cinnamon",origin_country:"Sri Lanka",production_lat:7.0,production_lng:80.7,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Cassia (local)"},
  {ingredient:"Cloves",origin_country:"Indonesia",production_lat:-0.5,production_lng:120.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local cloves"},
  {ingredient:"Nutmeg (Jaiphal)",origin_country:"Indonesia",production_lat:0.5,production_lng:127.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Mace (local)"},
  {ingredient:"Star Anise",origin_country:"China",production_lat:22.0,production_lng:108.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Fennel seeds (local)"},
  {ingredient:"Saffron (Kesar)",origin_country:"Iran",production_lat:36.0,production_lng:58.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Indian Kesar (Kashmir)"},
  {ingredient:"Cumin (Jeera)",origin_country:"India",production_lat:23.0,production_lng:72.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Gujarat/Rajasthan)"},
  {ingredient:"Coriander (Dhania)",origin_country:"India",production_lat:25.0,production_lng:74.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Mustard Seeds",origin_country:"India",production_lat:27.0,production_lng:75.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Rajasthan)"},
  {ingredient:"Fenugreek (Methi)",origin_country:"India",production_lat:25.0,production_lng:73.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Asafoetida (Hing)",origin_country:"Afghanistan",production_lat:34.0,production_lng:66.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Compounded hing"},
  {ingredient:"Bay Leaves",origin_country:"India",production_lat:27.0,production_lng:88.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Sikkim/Uttarakhand)"},
  {ingredient:"Curry Leaves",origin_country:"India",production_lat:13.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (South India)"},
  {ingredient:"Basil",origin_country:"Italy",production_lat:43.0,production_lng:11.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Tulsi (Holy Basil)"},
  {ingredient:"Rosemary",origin_country:"Spain",production_lat:40.0,production_lng:-3.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local herbs"},
  {ingredient:"Thyme",origin_country:"France",production_lat:44.0,production_lng:4.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Ajwain leaves (local)"},
  {ingredient:"Oregano",origin_country:"Greece",production_lat:39.0,production_lng:22.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Carom seeds (Ajwain)"},
  {ingredient:"Dill",origin_country:"Egypt",production_lat:26.0,production_lng:32.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Sowa (local)"},
  {ingredient:"Mint (Pudina)",origin_country:"India",production_lat:27.0,production_lng:81.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (UP)"},
  {ingredient:"Chilli (Lal Mirch)",origin_country:"India",production_lat:17.0,production_lng:81.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Andhra/Guntur)"},
  {ingredient:"Paprika",origin_country:"Hungary",production_lat:47.0,production_lng:19.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Kashmiri red chilli"},
  {ingredient:"Cayenne Pepper",origin_country:"USA",production_lat:35.0,production_lng:-97.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local red chilli"},
  {ingredient:"Dried Mango Powder (Amchur)",origin_country:"India",production_lat:25.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (UP)"},
  {ingredient:"Pomegranate Seeds (Anardana)",origin_country:"India",production_lat:32.0,production_lng:74.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Punjab/Himachal)"},
  // ── Dairy & Animal Products ──
  {ingredient:"Milk",origin_country:"India",production_lat:22.0,production_lng:72.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dairy"},
  {ingredient:"Yogurt (Curd)",origin_country:"India",production_lat:25.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local curd"},
  {ingredient:"Butter",origin_country:"India",production_lat:30.0,production_lng:75.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Desi ghee (local)"},
  {ingredient:"Ghee",origin_country:"India",production_lat:26.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Amul)"},
  {ingredient:"Cheese (Cheddar)",origin_country:"UK",production_lat:51.0,production_lng:-2.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Paneer or local cheese"},
  {ingredient:"Parmesan Cheese",origin_country:"Italy",production_lat:44.5,production_lng:10.7,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Hard paneer"},
  {ingredient:"Cream Cheese",origin_country:"USA",production_lat:43.0,production_lng:-76.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Hung curd (Chakka)"},
  {ingredient:"Whey Protein",origin_country:"USA",production_lat:37.0,production_lng:-100.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dal protein"},
  {ingredient:"Lamb",origin_country:"New Zealand",production_lat:-43.0,production_lng:172.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local goat (Bakra)"},
  {ingredient:"Pork",origin_country:"China",production_lat:30.0,production_lng:114.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local poultry"},
  {ingredient:"Turkey",origin_country:"USA",production_lat:38.0,production_lng:-97.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local chicken"},
  {ingredient:"Shrimp/Prawns",origin_country:"India",production_lat:15.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Andhra/Maharashtra)"},
  {ingredient:"Tuna",origin_country:"Japan",production_lat:36.0,production_lng:138.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local Surmai or Bangda"},
  {ingredient:"Sardines",origin_country:"Morocco",production_lat:32.0,production_lng:-6.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local Mackerel (Bangda)"},
  {ingredient:"Tilapia",origin_country:"India",production_lat:16.0,production_lng:82.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local freshwater fish"},
  {ingredient:"Crab",origin_country:"India",production_lat:13.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Goa/Kerala)"},
  {ingredient:"Lobster",origin_country:"USA",production_lat:44.0,production_lng:-68.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local freshwater prawns"},
  // ── Oils & Fats ──
  {ingredient:"Coconut Oil",origin_country:"India",production_lat:10.0,production_lng:76.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Kerala)"},
  {ingredient:"Mustard Oil",origin_country:"India",production_lat:27.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (UP/Rajasthan)"},
  {ingredient:"Sesame Oil",origin_country:"India",production_lat:22.0,production_lng:70.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Til oil)"},
  {ingredient:"Palm Oil",origin_country:"Indonesia",production_lat:-2.0,production_lng:114.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Coconut or groundnut oil"},
  {ingredient:"Canola Oil",origin_country:"Canada",production_lat:50.0,production_lng:-105.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Mustard oil (local)"},
  {ingredient:"Avocado Oil",origin_country:"Mexico",production_lat:19.5,production_lng:-99.1,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Sesame oil (local)"},
  // ── Sweeteners ──
  {ingredient:"Sugar (White)",origin_country:"India",production_lat:27.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Jaggery (Gur) - local"},
  {ingredient:"Jaggery (Gur)",origin_country:"India",production_lat:18.0,production_lng:75.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Maharashtra)"},
  {ingredient:"Coconut Sugar",origin_country:"Philippines",production_lat:12.0,production_lng:123.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Jaggery (local)"},
  {ingredient:"Agave Syrup",origin_country:"Mexico",production_lat:20.0,production_lng:-103.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Honey or jaggery"},
  {ingredient:"Stevia",origin_country:"Brazil",production_lat:-22.0,production_lng:-47.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local stevia"},
  // ── Beverages & Miscellaneous ──
  {ingredient:"Black Tea",origin_country:"India",production_lat:26.0,production_lng:88.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Darjeeling)"},
  {ingredient:"Masala Chai Blend",origin_country:"India",production_lat:23.0,production_lng:87.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local blend"},
  {ingredient:"Matcha",origin_country:"Japan",production_lat:35.0,production_lng:136.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Darjeeling green tea"},
  {ingredient:"White Tea",origin_country:"China",production_lat:27.0,production_lng:118.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Darjeeling white tea"},
  {ingredient:"Herbal Tea (Chamomile)",origin_country:"Germany",production_lat:52.0,production_lng:10.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local Tulsi tea"},
  {ingredient:"Cocoa Powder",origin_country:"Ghana",production_lat:7.0,production_lng:-1.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local cacao (carob)"},
  {ingredient:"Tapioca (Sabudana)",origin_country:"India",production_lat:11.0,production_lng:78.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Tamil Nadu)"},
  {ingredient:"Sago",origin_country:"Malaysia",production_lat:4.0,production_lng:114.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Sabudana (local)"},
  {ingredient:"Tofu",origin_country:"China",production_lat:30.0,production_lng:110.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Paneer (local)"},
  {ingredient:"Miso",origin_country:"Japan",production_lat:34.0,production_lng:134.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Fermented local legumes"},
  {ingredient:"Soy Sauce",origin_country:"Japan",production_lat:35.0,production_lng:135.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local tamari or coconut aminos"},
  {ingredient:"Fish Sauce",origin_country:"Vietnam",production_lat:16.0,production_lng:108.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local seafood paste"},
  {ingredient:"Oyster Sauce",origin_country:"China",production_lat:23.0,production_lng:113.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Mushroom sauce (local)"},
  {ingredient:"Rice Vinegar",origin_country:"Japan",production_lat:34.0,production_lng:131.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local coconut vinegar"},
  {ingredient:"Apple Cider Vinegar",origin_country:"USA",production_lat:43.0,production_lng:-76.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local sugarcane vinegar"},
  {ingredient:"Balsamic Vinegar",origin_country:"Italy",production_lat:44.6,production_lng:10.9,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local grape vinegar"},
  {ingredient:"Worcestershire Sauce",origin_country:"UK",production_lat:52.0,production_lng:-2.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local tamarind-based sauce"},
  // ── Bread, Fermented & Processed ──
  {ingredient:"Sourdough Bread",origin_country:"France",production_lat:48.0,production_lng:2.5,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local bread (Pav)"},
  {ingredient:"Rye Bread",origin_country:"Germany",production_lat:53.0,production_lng:10.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local multigrain bread"},
  {ingredient:"Chapati Flour (Atta)",origin_country:"India",production_lat:30.0,production_lng:76.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local whole wheat"},
  {ingredient:"Tempeh",origin_country:"Indonesia",production_lat:-7.0,production_lng:112.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Paneer or dhokla"},
  {ingredient:"Kimchi",origin_country:"South Korea",production_lat:37.0,production_lng:127.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local pickles (Achaar)"},
  {ingredient:"Sauerkraut",origin_country:"Germany",production_lat:51.0,production_lng:10.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local fermented veg"},
  // ── Superfoods & Health Foods ──
  {ingredient:"Spirulina",origin_country:"USA",production_lat:32.0,production_lng:-117.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local moringa powder"},
  {ingredient:"Moringa (Drumstick)",origin_country:"India",production_lat:11.0,production_lng:78.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Tamil Nadu)"},
  {ingredient:"Wheatgrass",origin_country:"USA",production_lat:37.0,production_lng:-95.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local barley grass"},
  {ingredient:"Maca Root",origin_country:"Peru",production_lat:-11.0,production_lng:-76.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Ashwagandha (local)"},
  {ingredient:"Goji Berries",origin_country:"China",production_lat:38.0,production_lng:106.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Amla (local gooseberry)"},
  {ingredient:"Acai Berries",origin_country:"Brazil",production_lat:-1.0,production_lng:-52.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Jamun (local berry)"},
  {ingredient:"Cacao Nibs",origin_country:"Peru",production_lat:-12.0,production_lng:-77.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Cocoa powder"},
  {ingredient:"Kelp (Seaweed)",origin_country:"Japan",production_lat:43.0,production_lng:141.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local seaweed (Nori)"},
  {ingredient:"Nutritional Yeast",origin_country:"Netherlands",production_lat:52.0,production_lng:5.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local fermented product"},
  {ingredient:"Ashwagandha",origin_country:"India",production_lat:25.0,production_lng:78.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (MP/Rajasthan)"},
  {ingredient:"Brahmi",origin_country:"India",production_lat:24.0,production_lng:78.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local Ayurvedic herb"},
  {ingredient:"Amla (Indian Gooseberry)",origin_country:"India",production_lat:24.0,production_lng:81.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (UP/Pratapgarh)"},
  // ── Imports from around the world ──
  {ingredient:"Truffle Oil",origin_country:"Italy",production_lat:43.5,production_lng:12.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Sesame oil (local)"},
  {ingredient:"Caviar",origin_country:"Russia",production_lat:43.0,production_lng:51.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local fish roe"},
  {ingredient:"Foie Gras",origin_country:"France",production_lat:43.5,production_lng:1.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local chicken liver"},
  {ingredient:"Prosciutto",origin_country:"Italy",production_lat:44.0,production_lng:11.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local cured meat"},
  {ingredient:"Chorizo",origin_country:"Spain",production_lat:40.0,production_lng:-4.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local spiced sausage"},
  {ingredient:"Nori (Seaweed Sheets)",origin_country:"South Korea",production_lat:37.0,production_lng:128.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local seaweed"},
  {ingredient:"Wasabi",origin_country:"Japan",production_lat:35.5,production_lng:138.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Horseradish (local)"},
  {ingredient:"Tahini",origin_country:"Lebanon",production_lat:33.8,production_lng:35.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Sesame paste (local)"},
  {ingredient:"Hummus (Chickpea)",origin_country:"Israel",production_lat:31.0,production_lng:35.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Chana chaat (local)"},
  {ingredient:"Ghee (Imported)",origin_country:"New Zealand",production_lat:-42.0,production_lng:172.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local Indian ghee"},
  {ingredient:"Manuka Honey",origin_country:"New Zealand",production_lat:-37.0,production_lng:175.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local Indian honey"},
  {ingredient:"Argan Oil",origin_country:"Morocco",production_lat:30.0,production_lng:-9.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Sesame oil"},
  {ingredient:"Yuzu Juice",origin_country:"Japan",production_lat:33.0,production_lng:132.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Kaffir lime (local)"},
  {ingredient:"Kaffir Lime Leaves",origin_country:"Thailand",production_lat:15.0,production_lng:102.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Curry leaves (local)"},
  {ingredient:"Lemongrass",origin_country:"Thailand",production_lat:14.0,production_lng:101.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local lemon rind"},
  {ingredient:"Galangal",origin_country:"Indonesia",production_lat:-5.0,production_lng:120.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Ginger (local)"},
  {ingredient:"Tamarind Paste",origin_country:"India",production_lat:16.5,production_lng:79.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Andhra/Tamil Nadu)"},
  {ingredient:"Kokum",origin_country:"India",production_lat:15.5,production_lng:73.8,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Goa/Konkan)"},
  {ingredient:"Lotus Seeds (Makhana)",origin_country:"India",production_lat:26.0,production_lng:86.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Bihar)"},
  {ingredient:"Jackfruit Seeds",origin_country:"India",production_lat:10.0,production_lng:76.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Bamboo Shoots",origin_country:"China",production_lat:28.0,production_lng:120.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Northeast India)"},
  {ingredient:"Water Chestnut (Singhara)",origin_country:"India",production_lat:26.0,production_lng:83.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (UP)"},
  {ingredient:"Raw Banana (Kela)",origin_country:"India",production_lat:11.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Kerala/Tamil Nadu)"},
  {ingredient:"Plantain",origin_country:"India",production_lat:10.0,production_lng:77.5,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Sago Palm",origin_country:"Papua New Guinea",production_lat:-6.0,production_lng:147.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Sabudana (local)"},
  // ── Dairy & Alternatives ──
  {ingredient:"Parmesan Cheese",origin_country:"Italy",production_lat:44.7,production_lng:10.3,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local hard cheese"},
  {ingredient:"Mozzarella",origin_country:"Italy",production_lat:41.0,production_lng:14.5,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local paneer"},
  {ingredient:"Cheddar Cheese",origin_country:"UK",production_lat:51.1,production_lng:-2.8,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dairy cheese"},
  {ingredient:"Greek Yogurt",origin_country:"Greece",production_lat:38.0,production_lng:23.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dahi (curd)"},
  {ingredient:"Oat Milk",origin_country:"Sweden",production_lat:59.0,production_lng:17.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Coconut or rice milk"},
  {ingredient:"Almond Milk",origin_country:"USA",production_lat:36.7,production_lng:-119.7,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Coconut milk (local)"},
  {ingredient:"Butter (Imported)",origin_country:"Netherlands",production_lat:52.0,production_lng:5.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local white butter (makhan)"},
  {ingredient:"Cream Cheese",origin_country:"USA",production_lat:40.0,production_lng:-75.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Hung curd (chakka)"},
  {ingredient:"Condensed Milk",origin_country:"Netherlands",production_lat:53.0,production_lng:6.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local sweetened milk"},
  {ingredient:"Whey Protein",origin_country:"USA",production_lat:43.0,production_lng:-89.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local paneer whey"},
  // ── Seafood & Fish ──
  {ingredient:"Tuna",origin_country:"Indonesia",production_lat:-5.0,production_lng:120.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local Indian mackerel (Bangda)"},
  {ingredient:"Shrimp (Prawns)",origin_country:"India",production_lat:14.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety (Jhinga)"},
  {ingredient:"Squid",origin_country:"China",production_lat:30.0,production_lng:122.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local squid (Calamari)"},
  {ingredient:"Crab",origin_country:"India",production_lat:13.0,production_lng:80.3,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local mud crab"},
  {ingredient:"Lobster",origin_country:"Australia",production_lat:-31.0,production_lng:115.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local spiny lobster"},
  {ingredient:"Oysters",origin_country:"France",production_lat:47.0,production_lng:-2.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local shellfish"},
  {ingredient:"Sardines",origin_country:"Morocco",production_lat:33.0,production_lng:-8.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local Malabar sardines"},
  {ingredient:"Cod",origin_country:"Norway",production_lat:65.0,production_lng:13.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local pomfret or tilapia"},
  {ingredient:"Tilapia",origin_country:"India",production_lat:11.0,production_lng:77.5,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local freshwater fish"},
  {ingredient:"Mackerel",origin_country:"India",production_lat:12.0,production_lng:74.9,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Bangda, Kerala)"},
  {ingredient:"Anchovies",origin_country:"Peru",production_lat:-9.0,production_lng:-78.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dried fish"},
  {ingredient:"Mussels",origin_country:"Netherlands",production_lat:51.5,production_lng:3.6,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local shellfish (Teesryo)"},
  // ── Meat & Poultry ──
  {ingredient:"Lamb",origin_country:"New Zealand",production_lat:-41.0,production_lng:174.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local mutton"},
  {ingredient:"Pork",origin_country:"Denmark",production_lat:56.0,production_lng:10.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local poultry"},
  {ingredient:"Turkey",origin_country:"USA",production_lat:38.0,production_lng:-97.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local chicken"},
  {ingredient:"Duck",origin_country:"France",production_lat:44.0,production_lng:1.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local poultry"},
  {ingredient:"Venison",origin_country:"New Zealand",production_lat:-44.0,production_lng:170.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local game"},
  // ── Processed & Pantry ──
  {ingredient:"Soy Sauce",origin_country:"China",production_lat:31.0,production_lng:121.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Coconut aminos"},
  {ingredient:"Fish Sauce",origin_country:"Thailand",production_lat:14.0,production_lng:101.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local fermented sauce"},
  {ingredient:"Oyster Sauce",origin_country:"China",production_lat:22.0,production_lng:114.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Mushroom sauce (local)"},
  {ingredient:"Miso Paste",origin_country:"Japan",production_lat:35.0,production_lng:137.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Fermented urad dal"},
  {ingredient:"Tofu",origin_country:"China",production_lat:30.0,production_lng:114.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Paneer (local)"},
  {ingredient:"Tempeh",origin_country:"Indonesia",production_lat:-7.0,production_lng:110.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Fermented chickpeas"},
  {ingredient:"Natto",origin_country:"Japan",production_lat:36.0,production_lng:140.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local fermented soy"},
  {ingredient:"Kimchi",origin_country:"South Korea",production_lat:37.5,production_lng:127.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local lacto-fermented veg"},
  {ingredient:"Sriracha",origin_country:"USA",production_lat:33.0,production_lng:-118.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local hot chilli sauce"},
  {ingredient:"Harissa Paste",origin_country:"Tunisia",production_lat:34.0,production_lng:9.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local chilli paste"},
  {ingredient:"Tomato Paste",origin_country:"Italy",production_lat:40.0,production_lng:17.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local tomato puree"},
  {ingredient:"Pesto",origin_country:"Italy",production_lat:44.4,production_lng:8.9,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local mint-coriander chutney"},
  {ingredient:"Balsamic Vinegar",origin_country:"Italy",production_lat:44.6,production_lng:10.9,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local apple cider vinegar"},
  {ingredient:"Apple Cider Vinegar",origin_country:"USA",production_lat:42.0,production_lng:-76.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local fruit vinegar"},
  {ingredient:"Worcestershire Sauce",origin_country:"UK",production_lat:52.2,production_lng:-2.2,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local tamarind sauce"},
  {ingredient:"Dijon Mustard",origin_country:"France",production_lat:47.3,production_lng:5.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local mustard paste"},
  {ingredient:"Capers",origin_country:"Italy",production_lat:37.0,production_lng:14.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Green mango pickled"},
  {ingredient:"Sun-dried Tomatoes",origin_country:"Italy",production_lat:38.0,production_lng:15.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dried tomatoes"},
  {ingredient:"Coconut Aminos",origin_country:"Philippines",production_lat:13.0,production_lng:122.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local soy sauce"},
  // ── Beverages & Drinks ──
  {ingredient:"Black Tea (Assam)",origin_country:"India",production_lat:26.0,production_lng:94.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Assam)"},
  {ingredient:"Darjeeling Tea",origin_country:"India",production_lat:27.0,production_lng:88.3,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (West Bengal)"},
  {ingredient:"Matcha",origin_country:"Japan",production_lat:34.7,production_lng:136.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Tulsi green tea (local)"},
  {ingredient:"Oolong Tea",origin_country:"China",production_lat:24.0,production_lng:117.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Nilgiri green tea"},
  {ingredient:"Chamomile Tea",origin_country:"Egypt",production_lat:30.0,production_lng:31.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Brahmi or tulsi tea"},
  {ingredient:"Hibiscus Tea",origin_country:"Egypt",production_lat:28.0,production_lng:30.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Rosella (local)"},
  {ingredient:"Coconut Water",origin_country:"India",production_lat:10.0,production_lng:76.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Kerala/Tamil Nadu)"},
  {ingredient:"Kombucha",origin_country:"Germany",production_lat:52.0,production_lng:13.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local fermented drinks"},
  {ingredient:"Coconut Sugar",origin_country:"Indonesia",production_lat:-7.0,production_lng:109.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Jaggery (local gur)"},
  {ingredient:"Stevia",origin_country:"Paraguay",production_lat:-23.0,production_lng:-58.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local natural sweetener"},
  {ingredient:"Agave Syrup",origin_country:"Mexico",production_lat:21.0,production_lng:-101.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Jaggery or honey"},
  // ── Oils & Fats ──
  {ingredient:"Coconut Oil",origin_country:"Philippines",production_lat:12.0,production_lng:122.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Kerala coconut oil)"},
  {ingredient:"Avocado Oil",origin_country:"Mexico",production_lat:20.0,production_lng:-100.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Sesame oil (local)"},
  {ingredient:"Palm Oil",origin_country:"Malaysia",production_lat:4.0,production_lng:109.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local groundnut oil"},
  {ingredient:"Canola Oil",origin_country:"Canada",production_lat:51.0,production_lng:-110.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local mustard oil"},
  {ingredient:"Grapeseed Oil",origin_country:"France",production_lat:44.0,production_lng:3.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local sesame oil"},
  {ingredient:"Lard",origin_country:"Spain",production_lat:40.0,production_lng:-4.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local ghee"},
  {ingredient:"Ghee (Local)",origin_country:"India",production_lat:27.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dairy ghee"},
  // ── Bakery & Baking ──
  {ingredient:"Bread (Sourdough)",origin_country:"France",production_lat:48.0,production_lng:2.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local whole wheat bread"},
  {ingredient:"Croissant",origin_country:"France",production_lat:48.8,production_lng:2.3,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local bakery item"},
  {ingredient:"Dark Chocolate (70%)",origin_country:"Belgium",production_lat:50.8,production_lng:4.3,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local cocoa-based sweet"},
  {ingredient:"Cocoa Powder",origin_country:"Ghana",production_lat:8.0,production_lng:-1.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Carob powder"},
  {ingredient:"Baking Soda",origin_country:"USA",production_lat:41.0,production_lng:-112.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local bakery supply"},
  {ingredient:"Yeast (Dry)",origin_country:"France",production_lat:47.0,production_lng:2.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local ferment starter"},
  // ── Specialty Imports ──
  {ingredient:"Acai Powder",origin_country:"Brazil",production_lat:-3.0,production_lng:-60.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Jamun powder (local)"},
  {ingredient:"Spirulina",origin_country:"USA",production_lat:25.0,production_lng:-80.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Moringa powder"},
  {ingredient:"Collagen Peptides",origin_country:"Germany",production_lat:51.0,production_lng:10.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local bone broth"},
  {ingredient:"MCT Oil",origin_country:"USA",production_lat:34.0,production_lng:-118.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local coconut oil"},
  {ingredient:"Protein Isolate (Pea)",origin_country:"Canada",production_lat:50.0,production_lng:-104.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dal protein"},
  {ingredient:"Tahini (Sesame Paste)",origin_country:"Turkey",production_lat:39.0,production_lng:35.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local til chutney"},
  {ingredient:"Kimchi Paste",origin_country:"South Korea",production_lat:36.0,production_lng:128.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local fermented chilli"},
  {ingredient:"Gochujang",origin_country:"South Korea",production_lat:36.5,production_lng:127.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local red chilli paste"},
  {ingredient:"Masa Harina",origin_country:"Mexico",production_lat:20.0,production_lng:-99.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local corn flour"},
  {ingredient:"Polenta",origin_country:"Italy",production_lat:45.0,production_lng:11.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local makai flour"},
  {ingredient:"Couscous",origin_country:"Morocco",production_lat:32.0,production_lng:-5.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local broken wheat (dalia)"},
  {ingredient:"Bulgur Wheat",origin_country:"Turkey",production_lat:39.0,production_lng:33.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dalia (broken wheat)"},
  {ingredient:"Rice Noodles",origin_country:"Vietnam",production_lat:16.0,production_lng:108.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local rice vermicelli"},
  {ingredient:"Glass Noodles",origin_country:"China",production_lat:32.0,production_lng:117.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local rice glass noodles"},
  {ingredient:"Udon Noodles",origin_country:"Japan",production_lat:34.0,production_lng:134.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local wheat noodles"},
  {ingredient:"Ramen Noodles",origin_country:"Japan",production_lat:35.7,production_lng:139.7,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local instant noodles"},
  {ingredient:"Tortilla (Corn)",origin_country:"Mexico",production_lat:19.4,production_lng:-99.1,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local roti"},
  {ingredient:"Panko Breadcrumbs",origin_country:"Japan",production_lat:35.0,production_lng:136.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local breadcrumbs"},
  // ── Sugar & Sweeteners ──
  {ingredient:"Brown Sugar",origin_country:"Brazil",production_lat:-21.0,production_lng:-47.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local jaggery (gur)"},
  {ingredient:"Raw Cane Sugar",origin_country:"Mauritius",production_lat:-20.3,production_lng:57.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local khandsari sugar"},
  {ingredient:"Molasses",origin_country:"Brazil",production_lat:-18.0,production_lng:-45.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local kala gur"},
  {ingredient:"Xylitol",origin_country:"Finland",production_lat:61.0,production_lng:25.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Stevia or local honey"},
  // ── Frozen & Preserved ──
  {ingredient:"Frozen Peas",origin_country:"India",production_lat:28.5,production_lng:77.3,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Fresh seasonal peas"},
  {ingredient:"Frozen Corn",origin_country:"USA",production_lat:42.0,production_lng:-93.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local fresh corn"},
  {ingredient:"Canned Chickpeas",origin_country:"Canada",production_lat:51.0,production_lng:-106.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dried chickpeas"},
  {ingredient:"Canned Tomatoes",origin_country:"Italy",production_lat:40.0,production_lng:17.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local fresh tomato puree"},
  {ingredient:"Canned Tuna",origin_country:"Thailand",production_lat:13.0,production_lng:100.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local canned mackerel"},
  {ingredient:"Canned Coconut Milk",origin_country:"Thailand",production_lat:14.0,production_lng:101.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Fresh coconut milk (local)"}
];

/* ═════════════════════════════════════════════════════
   CITIES DATABASE
═════════════════════════════════════════════════════ */
const CITIES = [
  {name:"Mumbai",country:"India",flag:"🇮🇳",lat:19.076,lng:72.877},
  {name:"New Delhi",country:"India",flag:"🇮🇳",lat:28.644,lng:77.216},
  {name:"Bengaluru",country:"India",flag:"🇮🇳",lat:12.972,lng:77.595},
  {name:"Chennai",country:"India",flag:"🇮🇳",lat:13.083,lng:80.270},
  {name:"Kolkata",country:"India",flag:"🇮🇳",lat:22.572,lng:88.363},
  {name:"Hyderabad",country:"India",flag:"🇮🇳",lat:17.385,lng:78.487},
  {name:"Ahmedabad",country:"India",flag:"🇮🇳",lat:23.022,lng:72.571},
  {name:"Pune",country:"India",flag:"🇮🇳",lat:18.520,lng:73.856},
  {name:"Jaipur",country:"India",flag:"🇮🇳",lat:26.912,lng:75.787},
  {name:"London",country:"UK",flag:"🇬🇧",lat:51.507,lng:-0.127},
  {name:"New York",country:"USA",flag:"🇺🇸",lat:40.712,lng:-74.006},
  {name:"Los Angeles",country:"USA",flag:"🇺🇸",lat:34.052,lng:-118.243},
  {name:"Chicago",country:"USA",flag:"🇺🇸",lat:41.878,lng:-87.630},
  {name:"San Francisco",country:"USA",flag:"🇺🇸",lat:37.774,lng:-122.419},
  {name:"Toronto",country:"Canada",flag:"🇨🇦",lat:43.651,lng:-79.347},
  {name:"Tokyo",country:"Japan",flag:"🇯🇵",lat:35.676,lng:139.650},
  {name:"Beijing",country:"China",flag:"🇨🇳",lat:39.905,lng:116.391},
  {name:"Shanghai",country:"China",flag:"🇨🇳",lat:31.230,lng:121.473},
  {name:"Sydney",country:"Australia",flag:"🇦🇺",lat:-33.868,lng:151.209},
  {name:"Melbourne",country:"Australia",flag:"🇦🇺",lat:-37.813,lng:144.963},
  {name:"Paris",country:"France",flag:"🇫🇷",lat:48.856,lng:2.352},
  {name:"Berlin",country:"Germany",flag:"🇩🇪",lat:52.520,lng:13.405},
  {name:"Amsterdam",country:"Netherlands",flag:"🇳🇱",lat:52.370,lng:4.895},
  {name:"Madrid",country:"Spain",flag:"🇪🇸",lat:40.416,lng:-3.703},
  {name:"Rome",country:"Italy",flag:"🇮🇹",lat:41.902,lng:12.496},
  {name:"Dubai",country:"UAE",flag:"🇦🇪",lat:25.204,lng:55.270},
  {name:"Singapore",country:"Singapore",flag:"🇸🇬",lat:1.352,lng:103.819},
  {name:"Bangkok",country:"Thailand",flag:"🇹🇭",lat:13.756,lng:100.502},
  {name:"Kuala Lumpur",country:"Malaysia",flag:"🇲🇾",lat:3.140,lng:101.686},
  {name:"Seoul",country:"South Korea",flag:"🇰🇷",lat:37.566,lng:126.978},
  {name:"São Paulo",country:"Brazil",flag:"🇧🇷",lat:-23.550,lng:-46.633},
  {name:"Mexico City",country:"Mexico",flag:"🇲🇽",lat:19.432,lng:-99.133},
  {name:"Cairo",country:"Egypt",flag:"🇪🇬",lat:30.044,lng:31.235},
  {name:"Lagos",country:"Nigeria",flag:"🇳🇬",lat:6.524,lng:3.379},
  {name:"Cape Town",country:"South Africa",flag:"🇿🇦",lat:-33.924,lng:18.424},
  {name:"Moscow",country:"Russia",flag:"🇷🇺",lat:55.751,lng:37.617},
  {name:"Istanbul",country:"Turkey",flag:"🇹🇷",lat:41.015,lng:28.979},
  {name:"Karachi",country:"Pakistan",flag:"🇵🇰",lat:24.860,lng:67.010},
  {name:"Dhaka",country:"Bangladesh",flag:"🇧🇩",lat:23.810,lng:90.412},
  {name:"Colombo",country:"Sri Lanka",flag:"🇱🇰",lat:6.927,lng:79.862},
  {name:"Vienna",country:"Austria",flag:"🇦🇹",lat:48.208,lng:16.373},
  {name:"Zurich",country:"Switzerland",flag:"🇨🇭",lat:47.378,lng:8.540}
];

/* ═════════════════════════════════════════════════════
   CONSTANTS
═════════════════════════════════════════════════════ */
// Transport colours for visual coding
const TC = {Air:"#ff00aa", Sea:"#00f5ff", Road:"#00ff88", Rail:"#bf00ff"};
const TP_CLASS = {Air:"tp-air", Sea:"tp-sea", Road:"tp-road", Rail:"tp-rail"};
const TRANSPORT_EMOJI = {Air:"✈️", Sea:"🚢", Road:"🚛", Rail:"🚆"};
// DEFRA emission factors kg CO₂ per tonne·km
const EMISSION_FACTORS = {Air:0.602, Road:0.096, Rail:0.028, Sea:0.008};

/* ═════════════════════════════════════════════════════
   STATE
═════════════════════════════════════════════════════ */
let destination = {name:"Mumbai, India", lat:19.076, lng:72.877, country:"India"};
let ingredients = [];
let idCounter = 0;
let map, routeLayers = [];
let ingChartInstance = null; // Track Chart.js instance for cleanup

/* ═════════════════════════════════════════════════════
   HAVERSINE FORMULA
   Calculates the great-circle distance between two points
   on the surface of a sphere (Earth) given their
   latitude and longitude in decimal degrees.

   Parameters:
     lat1, lng1 — Origin coordinates (degrees)
     lat2, lng2 — Destination coordinates (degrees)

   Returns:
     Distance in kilometres (km)

   Formula derivation:
     a = sin²(Δlat/2) + cos(lat1) · cos(lat2) · sin²(Δlng/2)
     c = 2 · atan2(√a, √(1−a))
     d = R · c     where R = 6,371 km (Earth's mean radius)
═════════════════════════════════════════════════════ */
function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth's mean radius in km

  // Convert latitude difference to radians
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  // Convert longitude difference to radians
  const dLng = (lng2 - lng1) * (Math.PI / 180);

  // Convert origin and destination latitudes to radians
  const φ1 = lat1 * (Math.PI / 180);
  const φ2 = lat2 * (Math.PI / 180);

  // Haversine formula core: intermediate value 'a'
  // sin²(Δlat/2) accounts for north-south separation
  // cos(φ1)·cos(φ2)·sin²(Δlng/2) accounts for east-west separation
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(dLng / 2) ** 2;

  // Angular distance in radians using atan2 for numerical stability
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Convert angular distance to km
  return R * c;
}

/* ═════════════════════════════════════════════════════
   CO₂ EMISSIONS CALCULATOR
   Formula: CO₂ (kg) = distance (km) × weight (kg) ÷ 1000 × emission_factor
   The ÷1000 converts weight from kg to tonnes (industry standard unit)
═════════════════════════════════════════════════════ */
function calcEmissions(distanceKm, weightKg, transportMode, factors) {
  const factor = factors[transportMode] || EMISSION_FACTORS[transportMode] || 0.096;
  return distanceKm * (weightKg / 1000) * factor;
}

/* ═════════════════════════════════════════════════════
   GREAT-CIRCLE ARC INTERPOLATION
   Generates n+1 intermediate points along the great-circle
   arc between two lat/lng positions, used to draw curved
   route lines on the Leaflet map.
═════════════════════════════════════════════════════ */
function greatCirclePoints(lat1, lng1, lat2, lng2, n) {
  const toRad = d => d * Math.PI / 180;
  const toDeg = r => r * 180 / Math.PI;
  const φ1 = toRad(lat1), λ1 = toRad(lng1);
  const φ2 = toRad(lat2), λ2 = toRad(lng2);

  // Angular distance between the two points
  const d = 2 * Math.asin(Math.sqrt(
    Math.sin((φ2 - φ1) / 2) ** 2 +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin((λ2 - λ1) / 2) ** 2
  ));

  // Points are essentially the same — return just the two endpoints
  if (d < 0.001) return [[lat1, lng1], [lat2, lng2]];

  const pts = [];
  for (let i = 0; i <= n; i++) {
    const f = i / n; // Fraction along the arc (0 to 1)
    // Interpolation weights using spherical linear interpolation (slerp)
    const A = Math.sin((1 - f) * d) / Math.sin(d);
    const B = Math.sin(f * d) / Math.sin(d);
    // Convert back to Cartesian, then to lat/lng
    const x = A * Math.cos(φ1) * Math.cos(λ1) + B * Math.cos(φ2) * Math.cos(λ2);
    const y = A * Math.cos(φ1) * Math.sin(λ1) + B * Math.cos(φ2) * Math.sin(λ2);
    const z = A * Math.sin(φ1) + B * Math.sin(φ2);
    pts.push([toDeg(Math.atan2(z, Math.sqrt(x * x + y * y))), toDeg(Math.atan2(y, x))]);
  }
  return pts;
}

/* ═════════════════════════════════════════════════════
   LAND CONNECTIVITY — TRANSPORT AVAILABILITY
   Road & Rail only work where continuous land routes exist.
   Countries are grouped into connected landmasses.
═════════════════════════════════════════════════════ */
const LAND_GROUPS = {
  'India':'eurasia','China':'eurasia','Sri Lanka':'island','Indonesia':'island',
  'Singapore':'island','UK':'island','Ireland':'island','New Zealand':'island',
  'Australia':'island','Madagascar':'island','Japan':'island','Philippines':'island',
  'Taiwan':'island','Maldives':'island','South Korea':'island',
  'Ivory Coast':'eurasia','Kenya':'eurasia','Nigeria':'eurasia','South Africa':'eurasia',
  'Egypt':'eurasia','Saudi Arabia':'eurasia','UAE':'eurasia','Spain':'eurasia',
  'Italy':'eurasia','France':'eurasia','Germany':'eurasia','Netherlands':'eurasia',
  'Austria':'eurasia','Switzerland':'eurasia','Russia':'eurasia','Turkey':'eurasia',
  'Ukraine':'eurasia','Pakistan':'eurasia','Bangladesh':'eurasia','Nepal':'eurasia',
  'Vietnam':'eurasia','Thailand':'eurasia','Malaysia':'eurasia','Myanmar':'eurasia',
  'Cambodia':'eurasia','Laos':'eurasia',
  'USA':'americas','Canada':'americas','Mexico':'americas','Brazil':'americas',
  'Peru':'americas','Colombia':'americas','Argentina':'americas','Chile':'americas',
};

function getAvailableTransports(originCountry, destCountry) {
  const originGroup = LAND_GROUPS[originCountry] || 'unknown';
  const destGroup   = LAND_GROUPS[destCountry]   || 'unknown';
  if (originCountry === destCountry) return ['Road', 'Rail', 'Sea', 'Air'];
  const landPossible = (
    originGroup !== 'island' && destGroup !== 'island' &&
    originGroup === destGroup && originGroup !== 'unknown'
  );
  return landPossible ? ['Road', 'Rail', 'Sea', 'Air'] : ['Sea', 'Air'];
}

/* ═════════════════════════════════════════════════════
   INPUT VALIDATION
═════════════════════════════════════════════════════ */
function validateIngredients() {
  let valid = true;
  let errorMsg = '';

  ingredients.forEach(ing => {
    if (!ing.weightKg || ing.weightKg <= 0 || isNaN(ing.weightKg)) {
      valid = false;
      errorMsg = `Weight for "${FOOD_DATA[ing.foodIdx].ingredient}" must be a positive number.`;
    }
  });

  const msgEl = document.getElementById('errorMsg');
  const textEl = document.getElementById('errorText');
  if (!valid) {
    msgEl.style.display = 'flex';
    textEl.textContent = errorMsg;
  } else {
    msgEl.style.display = 'none';
  }

  // Highlight invalid inputs
  document.querySelectorAll('.field-input').forEach(input => {
    const val = parseFloat(input.value);
    if (!val || val <= 0) {
      input.classList.add('error');
      setTimeout(() => input.classList.remove('error'), 1200);
    }
  });

  return valid;
}

/* ═════════════════════════════════════════════════════
   CITY SEARCH
═════════════════════════════════════════════════════ */
function initCitySearch() {
  const cityInput = document.getElementById('cityInput');
  const cityDropdown = document.getElementById('cityDropdown');
  if (!cityInput || !cityDropdown) return;

  cityInput.addEventListener('input', function() {
    const q = this.value.trim().toLowerCase();
    if (q.length < 1) { cityDropdown.classList.remove('open'); return; }
    const results = CITIES.filter(c =>
      c.name.toLowerCase().includes(q) || c.country.toLowerCase().includes(q)
    ).slice(0, 8);
    if (!results.length) { cityDropdown.classList.remove('open'); return; }
    cityDropdown.innerHTML = results.map(c => `
      <div class="search-result" onclick="selectCity(${c.lat},${c.lng},'${c.name}, ${c.country}','${c.country}')">
        <span class="search-result-flag">${c.flag}</span>
        <div>
          <div>${c.name}</div>
          <div class="search-result-detail">${c.country} · ${c.lat.toFixed(2)}°, ${c.lng.toFixed(2)}°</div>
        </div>
      </div>
    `).join('');
    cityDropdown.classList.add('open');
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) cityDropdown.classList.remove('open');
  });
}

function selectCityInputValue(val) {
  const cityInput = document.getElementById('cityInput');
  if (cityInput) cityInput.value = val;
  const cityDropdown = document.getElementById('cityDropdown');
  if (cityDropdown) cityDropdown.classList.remove('open');
}

function selectCity(lat, lng, name, country) {
  destination = {name, lat, lng, country: country || 'Unknown'};
  document.getElementById('destName').textContent = name;
  document.getElementById('destCoords').textContent =
    `${Math.abs(lat).toFixed(3)}°${lat >= 0 ? 'N' : 'S'}, ${Math.abs(lng).toFixed(3)}°${lng >= 0 ? 'E' : 'W'}`;
  const cityInput = document.getElementById('cityInput');
  const cityDropdown = document.getElementById('cityDropdown');
  if (cityInput) cityInput.value = '';
  if (cityDropdown) cityDropdown.classList.remove('open');

  // Re-validate transport modes when destination changes
  ingredients.forEach(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const available = getAvailableTransports(food.origin_country, destination.country);
    if (!available.includes(ing.transport)) {
      ing.transport = available.includes(food.default_transport) ? food.default_transport : available[0];
    }
  });

  renderIngredients();
  recalcAll();
}

/* ═════════════════════════════════════════════════════
   INGREDIENT MANAGEMENT
═════════════════════════════════════════════════════ */
function addIngredient() {
  const foodIdx = 0;
  const food = FOOD_DATA[foodIdx];
  const available = getAvailableTransports(food.origin_country, destination.country || 'India');
  const transport = available.includes(food.default_transport) ? food.default_transport : available[0];
  ingredients.push({ id: idCounter++, foodIdx, weightKg: 1, transport });
  renderIngredients();
}

function removeIngredient(id) {
  ingredients = ingredients.filter(i => i.id !== id);
  renderIngredients();
  recalcAll();
}

function updateFood(id, idx) {
  const ing = ingredients.find(i => i.id === id);
  if (ing) {
    ing.foodIdx = parseInt(idx);
    const food = FOOD_DATA[ing.foodIdx];
    const available = getAvailableTransports(food.origin_country, destination.country || 'India');
    ing.transport = available.includes(food.default_transport) ? food.default_transport : available[0];
  }
  renderIngredients();
}

function updateWeight(id, val) {
  const ing = ingredients.find(i => i.id === id);
  const parsed = parseFloat(val);
  if (ing) {
    if (isNaN(parsed) || parsed <= 0) {
      ing.weightKg = null; // Mark as invalid
    } else {
      ing.weightKg = Math.max(0.01, parsed);
    }
  }
}

function updateTransport(id, val) {
  const ing = ingredients.find(i => i.id === id);
  if (ing) ing.transport = val;
  renderIngredients();
}

function renderIngredients() {
  const list = document.getElementById('ingList');
  document.getElementById('ingCount').textContent = `${ingredients.length} item${ingredients.length !== 1 ? 's' : ''}`;

  if (ingredients.length === 0) {
    list.innerHTML = `<div class="empty-state">
      <span class="empty-icon">🥦</span>
      <div class="empty-title">No ingredients yet</div>
      <div class="empty-text">Click "Add ingredient" to start tracking your meal's carbon footprint.</div>
    </div>`;
    return;
  }

  list.innerHTML = ingredients.map(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const dist = Math.round(haversine(food.production_lat, food.production_lng, destination.lat, destination.lng));
    const wt = ing.weightKg || 1;
    const co2 = calcEmissions(dist, wt, ing.transport, food.carbon_factor);
    const foodOptions = FOOD_DATA.map((f, i) =>
      `<option value="${i}"${i === ing.foodIdx ? ' selected' : ''}>${f.ingredient}</option>`
    ).join('');
    const available = getAvailableTransports(food.origin_country, destination.country || 'India');
    const transportOptions = available.map(t =>
      `<option value="${t}"${t === ing.transport ? ' selected' : ''}>${TRANSPORT_EMOJI[t]} ${t}</option>`
    ).join('');

    return `<div class="ing-item" id="ing-${ing.id}">
      <div class="ing-top">
        <select class="ing-select" onchange="updateFood(${ing.id},this.value)">${foodOptions}</select>
        <button class="ing-del" onclick="removeIngredient(${ing.id})">×</button>
      </div>
      <div class="ing-fields">
        <div>
          <div class="field-label">Weight (kg)</div>
          <input class="field-input" type="number" min="0.01" step="0.1" value="${ing.weightKg || ''}"
            onchange="updateWeight(${ing.id},this.value)" placeholder="e.g. 0.5">
        </div>
        <div>
          <div class="field-label">Transport</div>
          <select class="field-select" onchange="updateTransport(${ing.id},this.value)">${transportOptions}</select>
        </div>
      </div>
      <div class="ing-result-row">
        <div class="ing-origin">
          <span>${food.origin_country}</span>
          <span class="transport-pill ${TP_CLASS[ing.transport]}">${ing.transport}</span>
        </div>
        <div class="ing-metrics">
          <div class="ing-metric">
            <div class="ing-metric-val">${dist.toLocaleString()} km</div>
            <div class="ing-metric-lbl">distance</div>
          </div>
          <div class="ing-metric">
            <div class="ing-metric-val" style="color:${co2 > 1 ? 'var(--neon-pink)' : 'var(--neon-green)'}">${co2.toFixed(3)}</div>
            <div class="ing-metric-lbl">kg CO₂</div>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ═════════════════════════════════════════════════════
   MAIN RECALCULATION — triggered by Calculate button
═════════════════════════════════════════════════════ */
function recalcAll() {
  let totDist = 0, totCO2 = 0;
  const byTransport = {};  // CO₂ aggregated by mode
  const airIngredients = [];
  const ingResults = []; // For per-ingredient chart

  ingredients.forEach(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const wt = ing.weightKg || 1;
    const dist = haversine(food.production_lat, food.production_lng, destination.lat, destination.lng);
    const co2 = calcEmissions(dist, wt, ing.transport, food.carbon_factor);

    totDist += dist;
    totCO2  += co2;
    byTransport[ing.transport] = (byTransport[ing.transport] || 0) + co2;

    if (ing.transport === 'Air' && food.alternative) {
      airIngredients.push({ name: food.ingredient, alt: food.alternative, co2, dist: Math.round(dist) });
    }

    ingResults.push({
      label: food.ingredient,
      co2: +co2.toFixed(4),
      color: TC[ing.transport] || '#888',
      transport: ing.transport,
      dist: Math.round(dist),
      weightKg: wt
    });
  });

  // ── Update summary cards with animation ──
  animateValue('totDist', Math.round(totDist));
  document.getElementById('totCO2').textContent = totCO2.toFixed(2);
  document.getElementById('totIng').textContent = ingredients.length;

  // ── Update impact meter ──
  const pct = Math.min((totCO2 / 20) * 100, 100);
  const fill = document.getElementById('impactFill');
  fill.style.width = pct + '%';
  fill.style.background = pct > 70 ? 'var(--neon-pink)' : pct > 35 ? 'var(--neon-yellow)' : 'var(--neon-green)';
  document.getElementById('impactLabel').textContent = totCO2.toFixed(2) + ' kg CO₂';

  // ── CO₂ breakdown by transport mode ──
  const bb = document.getElementById('breakdownBars');
  if (!Object.keys(byTransport).length) {
    bb.innerHTML = '<div style="font-size:13px;color:var(--text-muted);text-align:center;padding:12px">Add ingredients to see breakdown</div>';
  } else {
    const maxVal = Math.max(...Object.values(byTransport));
    bb.innerHTML = Object.entries(byTransport).map(([t, val]) => `
      <div class="breakdown-row">
        <div class="br-label">${TRANSPORT_EMOJI[t]} ${t}</div>
        <div class="br-track">
          <div class="br-fill" style="width:${maxVal > 0 ? (val / maxVal * 100).toFixed(1) : 0}%;background:${TC[t]};box-shadow:0 0 8px ${TC[t]}88"></div>
        </div>
        <div class="br-val">${val.toFixed(2)} kg</div>
      </div>
    `).join('');
  }

  // ── Per-ingredient chart ──
  updateIngChart(ingResults);

  // ── Transport comparison panel ──
  if (ingredients.length > 0) {
    updateTransportCompare(ingResults, totDist);
  }

  // ── Alternatives card ──
  const altCard = document.getElementById('altCard');
  const altMapPanel = document.getElementById('altMapPanel');
  const allAlts = [];
  ingredients.forEach(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    if (food.alternative) {
      const dist = Math.round(haversine(food.production_lat, food.production_lng, destination.lat, destination.lng));
      const co2 = calcEmissions(dist, ing.weightKg || 1, ing.transport, food.carbon_factor);
      allAlts.push({ name: food.ingredient, alt: food.alternative, co2, dist, transport: ing.transport, origin: food.origin_country });
    }
  });

  if (allAlts.length > 0) {
    // Below map alternatives panel
    altMapPanel.classList.add('show');
    document.getElementById('altMapGrid').innerHTML = allAlts.map(a => `
      <div class="alt-map-item">
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span class="alt-map-from">${a.name}</span>
            <span class="alt-map-arrow">→</span>
            <span class="alt-map-to">${a.alt}</span>
          </div>
          <div class="alt-map-origin">${a.origin} · ${a.transport} · ${a.co2.toFixed(3)} kg CO₂</div>
        </div>
        <span style="font-size:16px">🌿</span>
      </div>
    `).join('');
  } else {
    altMapPanel.classList.remove('show');
  }

  if (airIngredients.length > 0) {
    altCard.style.display = 'block';
    document.getElementById('altList').innerHTML = airIngredients.map(a => `
      <div class="alt-item">
        <span class="alt-from">${a.name}</span>
        <span class="alt-arrow">→</span>
        <span class="alt-to">${a.alt}</span>
        <span class="alt-save">Air freight</span>
      </div>
    `).join('');
  } else {
    altCard.style.display = 'none';
  }

  // ── Environmental equivalents ──
  updateEquivalents(totCO2);

  // ── Update explain panel ──
  updateExplainExample(ingResults, totCO2);

  // ── Refresh map ──
  updateMap();
}

// Animate a numeric counter for summary values
function animateValue(id, target) {
  const el = document.getElementById(id);
  const start = parseInt(el.textContent.replace(/,/g, '')) || 0;
  const duration = 600;
  const startTime = performance.now();
  const animate = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.round(start + (target - start) * ease);
    el.textContent = current.toLocaleString();
    if (progress < 1) requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
}

/* ═════════════════════════════════════════════════════
   CALCULATE WITH ENHANCED LOADING ANIMATION
   Full-screen overlay with step-by-step progress
═════════════════════════════════════════════════════ */
function calculateWithLoading() {
  if (ingredients.length === 0) {
    document.getElementById('errorMsg').style.display = 'flex';
    document.getElementById('errorText').textContent = 'Add at least one ingredient first.';
    return;
  }
  if (!validateIngredients()) return;

  // Hide any old error
  document.getElementById('errorMsg').style.display = 'none';

  const overlay = document.getElementById('calcLoadingOverlay');
  const btn     = document.getElementById('calcBtn');
  const steps   = ['cstep1','cstep2','cstep3','cstep4'];

  // Reset steps
  steps.forEach(s => {
    const el = document.getElementById(s);
    el.classList.remove('active','done');
  });

  overlay.classList.add('show');
  btn.classList.add('loading');
  btn.textContent = '⏳ Computing...';

  // Animate each step sequentially
  const stepDelay = 280;
  steps.forEach((s, i) => {
    setTimeout(() => {
      if (i > 0) document.getElementById(steps[i-1]).classList.replace('active','done');
      document.getElementById(s).classList.add('active');
    }, i * stepDelay);
  });

  // After all steps, run real calculation
  setTimeout(() => {
    try {
      recalcAll();
      generateInsights();     // Smart Insights System
      updateDashboard();      // Interactive Dashboard
      revealResults();        // Smooth transition
    } catch (e) {
      console.error('Calculation error:', e);
    } finally {
      // Mark last step done
      document.getElementById(steps[steps.length-1]).classList.replace('active','done');
      setTimeout(() => {
        overlay.classList.remove('show');
        btn.classList.remove('loading');
        btn.textContent = '⚡ Calculate Footprint';
      }, 200);
    }
  }, steps.length * stepDelay + 100);
}

/* ═════════════════════════════════════════════════════
   ENVIRONMENTAL EQUIVALENTS
   Convert CO₂ kg into relatable real-world units
═════════════════════════════════════════════════════ */
function updateEquivalents(totCO2) {
  if (totCO2 <= 0) {
    ['eqCar','eqTrees','eqBulb','eqPhone'].forEach(id => {
      document.getElementById(id).textContent = '—';
    });
    return;
  }
  // 1 km petrol car ≈ 0.192 kg CO₂
  document.getElementById('eqCar').textContent    = (totCO2 / 0.192).toFixed(1) + ' km';
  // 1 tree absorbs ≈ 21 kg CO₂/year
  document.getElementById('eqTrees').textContent  = (totCO2 / 21).toFixed(2);
  // 60W bulb for 1 hr ≈ 0.0233 kg CO₂
  document.getElementById('eqBulb').textContent   = Math.round(totCO2 / 0.0233).toLocaleString() + ' hrs';
  // Smartphone charge ≈ 0.008 kg CO₂
  document.getElementById('eqPhone').textContent  = Math.round(totCO2 / 0.008).toLocaleString();
}

/* ═════════════════════════════════════════════════════
   EXPLAIN CALCULATION PANEL
   Shows a dynamic worked example using the first ingredient
═════════════════════════════════════════════════════ */
function toggleExplain() {
  document.getElementById('explainPanel').classList.toggle('open');
}

function updateExplainExample(ingResults, totCO2) {
  if (!ingResults.length) return;
  const first = ingResults[0];
  const ing = ingredients[0];
  const food = FOOD_DATA[ing.foodIdx];
  const factor = food.carbon_factor[ing.transport];

  document.getElementById('explainExample').innerHTML =
    `<strong style="color:var(--neon-green)">${food.ingredient} from ${food.origin_country}</strong><br>
     Weight: ${ing.weightKg} kg · Mode: ${ing.transport} · Factor: ${factor}<br>
     Distance: ${first.dist.toLocaleString()} km<br>
     <br>
     CO₂ = ${first.dist.toLocaleString()} × (${ing.weightKg} ÷ 1,000) × ${factor}<br>
     CO₂ = <strong>${first.co2} kg CO₂</strong><br>
     ${ingredients.length > 1 ? `<br>Total across ${ingredients.length} ingredients: <strong>${totCO2.toFixed(3)} kg CO₂</strong>` : ''}`;
}

/* ═════════════════════════════════════════════════════
   PER-INGREDIENT BAR CHART (Chart.js)
   Displays CO₂ breakdown per ingredient
═════════════════════════════════════════════════════ */
function updateIngChart(ingResults) {
  const card = document.getElementById('ingChartCard');
  if (!ingResults.length) { card.style.display = 'none'; return; }
  card.style.display = 'block';

  // Destroy previous chart instance to prevent canvas re-use error
  if (ingChartInstance) { ingChartInstance.destroy(); ingChartInstance = null; }

  const ctx = document.getElementById('ingChart').getContext('2d');
  ingChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ingResults.map(r => r.label),
      datasets: [{
        label: 'kg CO₂',
        data: ingResults.map(r => r.co2),
        backgroundColor: ingResults.map(r => r.color + '55'),
        borderColor: ingResults.map(r => r.color),
        borderWidth: 1.5,
        borderRadius: 3,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(10,10,26,0.95)',
          borderColor: 'rgba(0,245,255,0.3)',
          borderWidth: 1,
          titleColor: '#00f5ff',
          bodyColor: '#e0e8ff',
          padding: 10,
          callbacks: {
            label: ctx => `${ctx.parsed.y.toFixed(4)} kg CO₂ (${ingResults[ctx.dataIndex].transport})`
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(0,245,255,0.05)' },
          ticks: { color: '#6a7a9a', font: { family: "'Share Tech Mono', monospace", size: 10 }, maxRotation: 30 }
        },
        y: {
          grid: { color: 'rgba(0,245,255,0.06)' },
          ticks: {
            color: '#6a7a9a',
            font: { family: "'Share Tech Mono', monospace", size: 10 },
            callback: v => v.toFixed(3) + ' kg'
          }
        }
      }
    }
  });
}

/* ═════════════════════════════════════════════════════
   TRANSPORT MODE COMPARISON PANEL
   Shows how emissions would change if all ingredients
   used a different single transport mode
═════════════════════════════════════════════════════ */
function updateTransportCompare(ingResults, totDist) {
  const card = document.getElementById('transportCompareCard');
  if (!ingResults.length) { card.style.display = 'none'; return; }
  card.style.display = 'block';

  const grid = document.getElementById('tmGrid');
  const modes = ['Air', 'Sea', 'Road', 'Rail'];
  grid.innerHTML = modes.map(mode => `
    <button class="tm-btn ${mode.toLowerCase()}" onclick="showTransportCompare('${mode}', this)">
      <span class="tm-icon">${TRANSPORT_EMOJI[mode]}</span>
      ${mode}
    </button>
  `).join('');
}

function showTransportCompare(mode, btn) {
  // Remove active class from all buttons
  document.querySelectorAll('.tm-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Compute hypothetical total CO₂ if all used this mode
  let hypothetical = 0;
  ingredients.forEach(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const dist = haversine(food.production_lat, food.production_lng, destination.lat, destination.lng);
    hypothetical += calcEmissions(dist, ing.weightKg || 1, mode, food.carbon_factor);
  });

  // Current total
  let current = 0;
  ingredients.forEach(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const dist = haversine(food.production_lat, food.production_lng, destination.lat, destination.lng);
    current += calcEmissions(dist, ing.weightKg || 1, ing.transport, food.carbon_factor);
  });

  const diff = hypothetical - current;
  const pct = current > 0 ? ((diff / current) * 100).toFixed(1) : 0;
  const color = TC[mode];
  const sign = diff > 0 ? '+' : '';

  document.getElementById('tmDisplay').innerHTML =
    `<span style="color:${color}"><strong>${TRANSPORT_EMOJI[mode]} All ${mode}</strong>: ${hypothetical.toFixed(3)} kg CO₂</span>
     &nbsp;
     <span style="color:${diff > 0 ? 'var(--neon-pink)' : 'var(--neon-green)'}">
       (${sign}${diff.toFixed(3)} kg, ${sign}${pct}%)
     </span>`;
}

/* ═════════════════════════════════════════════════════
   COMPARISON CHART (static reference chart)
   Shows local vs. imported food CO₂ per kg
═════════════════════════════════════════════════════ */
function buildComparisonChart() {
  const ctx = document.getElementById('comparisonChart').getContext('2d');
  const comparisons = [
    {label:'Rice\n(India, Road)',     co2: haversine(22,-82,19.076,72.877)   * (1/1000) * 0.096, color:'#00ff88'},
    {label:'Avocado\n(Mexico, Air)', co2: haversine(19.5,-99.1,19.076,72.877)*(1/1000) * 0.602, color:'#ff00aa'},
    {label:'Banana\n(India, Road)',   co2: haversine(11,77,19.076,72.877)    * (1/1000) * 0.096, color:'#00ff88'},
    {label:'Blueberries\n(USA, Air)',co2: haversine(45.5,-122.7,19.076,72.877)*(1/1000)* 0.602, color:'#ff00aa'},
    {label:'Coffee\n(Brazil, Sea)',   co2: haversine(-14.2,-51.9,19.076,72.877)*(1/1000)*0.008, color:'#00f5ff'},
    {label:'Salmon\n(Norway, Air)',   co2: haversine(60.5,8.5,19.076,72.877)  *(1/1000)*0.602,  color:'#ff00aa'},
    {label:'Tomato\n(India, Road)',   co2: haversine(14,76,19.076,72.877)    * (1/1000) * 0.096, color:'#00ff88'},
    {label:'Asparagus\n(Peru, Air)', co2: haversine(-9.2,-75,19.076,72.877)  *(1/1000)*0.602,  color:'#ff00aa'},
  ];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: comparisons.map(c => c.label),
      datasets: [{
        label: 'CO₂ emissions (kg per 1 kg food)',
        data: comparisons.map(c => +c.co2.toFixed(4)),
        backgroundColor: comparisons.map(c => c.color + '55'),
        borderColor: comparisons.map(c => c.color),
        borderWidth: 1.5,
        borderRadius: 3,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(10,10,26,0.95)',
          borderColor: 'rgba(0,245,255,0.3)',
          borderWidth: 1,
          titleColor: '#00f5ff',
          bodyColor: '#e0e8ff',
          padding: 12,
          callbacks: {
            label: ctx => `${ctx.parsed.y.toFixed(4)} kg CO₂ per kg of food`
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(0,245,255,0.05)' },
          ticks: { color: '#6a7a9a', font: { family: "'Share Tech Mono', monospace", size: 11 }, maxRotation: 0 }
        },
        y: {
          grid: { color: 'rgba(0,245,255,0.06)' },
          ticks: { color: '#6a7a9a', font: { family: "'Share Tech Mono', monospace", size: 11 }, callback: v => v.toFixed(3) + ' kg' },
          title: { display: true, text: 'kg CO₂ per kg of food', color: '#6a7a9a', font: { family: "'Share Tech Mono', monospace", size: 11 } }
        }
      }
    }
  });
}

/* ═════════════════════════════════════════════════════
   MAP — Leaflet.js
   World map showing origin markers and curved arc routes
═════════════════════════════════════════════════════ */
function initMap() {
  map = L.map('map', {
    center: [20, 20], zoom: 2,
    minZoom: 1, maxZoom: 10,
    scrollWheelZoom: true
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd', maxZoom: 19
  }).addTo(map);
}

function updateMap() {
  // Remove all previous route layers from the map
  routeLayers.forEach(l => map.removeLayer(l));
  routeLayers = [];

  const destLL = [destination.lat, destination.lng];

  // ── Destination marker (pink dot) ──
  const destIcon = L.divIcon({
    className: '',
    html: `<div style="width:16px;height:16px;background:#ff00aa;border:2px solid #fff;border-radius:50%;box-shadow:0 0 12px rgba(255,0,170,0.8),0 0 24px rgba(255,0,170,0.4)"></div>`,
    iconSize: [16, 16], iconAnchor: [8, 8]
  });
  const dm = L.marker(destLL, { icon: destIcon }).addTo(map);
  dm.bindPopup(`<div class="popup-title">&#x1F4CD; ${destination.name}</div><div class="popup-detail">Your destination</div>`);
  routeLayers.push(dm);

  // ── Origin markers and arc lines for each ingredient ──
  ingredients.forEach(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const srcLL = [food.production_lat, food.production_lng];

    // Distance and emissions for popup
    const dist = Math.round(haversine(food.production_lat, food.production_lng, destination.lat, destination.lng));
    const co2  = calcEmissions(dist, ing.weightKg || 1, ing.transport, food.carbon_factor);
    const color = TC[ing.transport] || '#888';

    // Origin marker
    const srcIcon = L.divIcon({
      className: '',
      html: `<div style="width:10px;height:10px;background:${color};border:1px solid rgba(255,255,255,0.6);border-radius:50%;box-shadow:0 0 8px ${color},0 0 16px ${color}55"></div>`,
      iconSize: [10, 10], iconAnchor: [5, 5]
    });
    const sm = L.marker(srcLL, { icon: srcIcon }).addTo(map);
    sm.bindPopup(`
      <div class="popup-title">${TRANSPORT_EMOJI[ing.transport]} ${food.ingredient}</div>
      <div class="popup-detail">Origin: ${food.origin_country}</div>
      <div class="popup-detail">Transport: ${ing.transport} · ${dist.toLocaleString()} km</div>
      <div class="popup-co2">${co2.toFixed(3)} kg CO₂</div>
    `);
    routeLayers.push(sm);

    // Great-circle arc line (80 interpolated points for smooth curve)
    const arcPts = greatCirclePoints(
      food.production_lat, food.production_lng,
      destination.lat, destination.lng, 80
    );

    // Style varies by transport mode
    const pl = L.polyline(arcPts, {
      color,
      weight: ing.transport === 'Air' ? 1.5 : 2,
      opacity: 0.7,
      dashArray: ing.transport === 'Air' ? '6,5' : ing.transport === 'Rail' ? '3,3' : null
    }).addTo(map);
    routeLayers.push(pl);
  });

  // Auto-fit map bounds to show all origin points + destination
  if (ingredients.length > 0) {
    const pts = ingredients.map(i => [FOOD_DATA[i.foodIdx].production_lat, FOOD_DATA[i.foodIdx].production_lng]);
    pts.push([destination.lat, destination.lng]);
    map.fitBounds(L.latLngBounds(pts), { padding: [40, 40], maxZoom: 5 });
  } else {
    map.setView([20, 20], 2);
  }

  // Always update SVG arcs too (active or not)
  updateSVGArcs();
}

/* ═════════════════════════════════════════════════════
   MAP VIEW TOGGLE
═════════════════════════════════════════════════════ */
let currentMapView = 'svg'; // default to SVG view

function switchMapView(view) {
  currentMapView = view;
  const leafletWrap = document.getElementById('leafletMapWrap');
  const svgWrap     = document.getElementById('svgMapWrap');
  const tabLeaflet  = document.getElementById('tabLeaflet');
  const tabSvg      = document.getElementById('tabSvg');

  if (view === 'leaflet') {
    leafletWrap.classList.remove('hidden');
    svgWrap.classList.remove('active');
    tabLeaflet.classList.add('active');
    tabSvg.classList.remove('active');
    // Invalidate Leaflet size since it was hidden
    setTimeout(() => { if (map) map.invalidateSize(); }, 50);
  } else {
    leafletWrap.classList.add('hidden');
    svgWrap.classList.add('active');
    tabLeaflet.classList.remove('active');
    tabSvg.classList.add('active');
    // Redraw SVG arcs
    updateSVGArcs();
  }
}

/* ═════════════════════════════════════════════════════
   SVG ARC VISUALIZATION SYSTEM
   Custom equirectangular projection + Bezier arc drawing
═════════════════════════════════════════════════════ */

// ── SVG viewport constants ──
const SVG_W = 800;
const SVG_H = 440;

/**
 * projectToSVG(lat, lng)
 * Equirectangular projection: maps lat/lng to SVG (x, y).
 * Formula:
 *   x = (lng + 180) * (SVG_W / 360)
 *   y = (90 - lat)  * (SVG_H / 180)
 */
function projectToSVG(lat, lng) {
  const x = (lng + 180) * (SVG_W / 360);
  const y = (90 - lat)  * (SVG_H / 180);
  return { x, y };
}

/**
 * drawArc(svgG, x1, y1, x2, y2, color, transport, animDelay)
 * Draws an animated cubic Bezier arc with two control points for smooth S-curve routing.
 * Control points are offset to create elegant arcs that curve above the Earth's surface.
 */
function drawArc(svgG, x1, y1, x2, y2, color, transport, animDelay) {
  const ns = 'http://www.w3.org/2000/svg';
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Lift proportional to distance — longer routes curve more dramatically
  const lift = Math.max(50, dist * 0.5);
  // Perpendicular direction (rotate 90°)
  const perpX = -dy / (dist || 1);
  const perpY =  dx / (dist || 1);

  // Two control points for cubic bezier — creates smooth S-curve aesthetic
  const cp1x = x1 + dx * 0.25 + perpX * lift;
  const cp1y = y1 + dy * 0.25 - perpY * lift;
  const cp2x = x1 + dx * 0.75 + perpX * lift;
  const cp2y = y1 + dy * 0.75 - perpY * lift;

  const d = `M ${x1.toFixed(2)} ${y1.toFixed(2)} C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${x2.toFixed(2)} ${y2.toFixed(2)}`;

  // Path length estimate for dash animation
  const pathLen = Math.round(dist * 1.4 + lift * 1.2);

  // Wide atmospheric glow (outermost)
  const glowAtmo = document.createElementNS(ns, 'path');
  glowAtmo.setAttribute('d', d);
  glowAtmo.setAttribute('fill', 'none');
  glowAtmo.style.stroke = color;
  glowAtmo.style.strokeWidth = '14';
  glowAtmo.style.opacity = '0.04';
  glowAtmo.style.filter = 'blur(10px)';
  glowAtmo.style.strokeLinecap = 'round';
  glowAtmo.style.strokeDasharray = pathLen;
  glowAtmo.style.strokeDashoffset = pathLen;
  glowAtmo.style.setProperty('--path-len', pathLen);
  glowAtmo.style.animationDelay = animDelay + 'ms';
  glowAtmo.classList.add('arc-animate');
  svgG.appendChild(glowAtmo);

  // Outer glow layer (wide, blurred)
  const glowOuter = document.createElementNS(ns, 'path');
  glowOuter.setAttribute('d', d);
  glowOuter.setAttribute('fill', 'none');
  glowOuter.style.stroke = color;
  glowOuter.style.strokeWidth = '6';
  glowOuter.style.opacity = '0.12';
  glowOuter.style.filter = 'blur(4px)';
  glowOuter.style.strokeLinecap = 'round';
  glowOuter.style.strokeDasharray = pathLen;
  glowOuter.style.strokeDashoffset = pathLen;
  glowOuter.style.setProperty('--path-len', pathLen);
  glowOuter.style.animationDelay = animDelay + 'ms';
  glowOuter.classList.add('arc-animate');
  svgG.appendChild(glowOuter);

  // Inner glow layer (medium)
  const glowInner = document.createElementNS(ns, 'path');
  glowInner.setAttribute('d', d);
  glowInner.setAttribute('fill', 'none');
  glowInner.style.stroke = color;
  glowInner.style.strokeWidth = '3';
  glowInner.style.opacity = '0.25';
  glowInner.style.filter = 'blur(2px)';
  glowInner.style.strokeLinecap = 'round';
  glowInner.style.strokeDasharray = pathLen;
  glowInner.style.strokeDashoffset = pathLen;
  glowInner.style.setProperty('--path-len', pathLen);
  glowInner.style.animationDelay = animDelay + 'ms';
  glowInner.classList.add('arc-animate');
  svgG.appendChild(glowInner);

  // Main visible arc
  const path = document.createElementNS(ns, 'path');
  path.setAttribute('d', d);
  path.setAttribute('class', `route-arc arc-${transport.toLowerCase()}`);
  path.setAttribute('fill', 'none');
  path.style.stroke = color;
  path.style.strokeWidth = transport === 'Air' ? '1.8' : '2.2';
  path.style.opacity = '0.9';
  path.style.strokeLinecap = 'round';
  // Dash patterns per transport type
  if (transport === 'Air')  path.style.strokeDasharray = '6 5';
  if (transport === 'Rail') path.style.strokeDasharray = '2 4';
  if (transport === 'Sea')  path.style.strokeDasharray = '8 6';
  // Draw-on animation using path length
  const baseDA = transport === 'Air' ? '6 5, ' : transport === 'Rail' ? '2 4, ' : transport === 'Sea' ? '8 6, ' : '';
  path.style.strokeDasharray = baseDA + pathLen;
  path.style.strokeDashoffset = pathLen;
  path.style.setProperty('--path-len', pathLen);
  path.style.animationDelay = animDelay + 'ms';
  path.classList.add('arc-animate');

  svgG.appendChild(path);

  return path;
}

/** Draw lat/lng grid lines on the SVG background */
function drawSVGGrid() {
  const g = document.getElementById('svgGrid');
  g.innerHTML = '';
  const ns = 'http://www.w3.org/2000/svg';

  // Background rect
  const rect = document.createElementNS(ns, 'rect');
  rect.setAttribute('x', 0); rect.setAttribute('y', 0);
  rect.setAttribute('width', SVG_W); rect.setAttribute('height', SVG_H);
  rect.setAttribute('fill', '#020210');
  g.appendChild(rect);

  // Latitude lines every 30 degrees
  for (let lat = -60; lat <= 90; lat += 30) {
    const { y } = projectToSVG(lat, 0);
    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', 0); line.setAttribute('y1', y.toFixed(1));
    line.setAttribute('x2', SVG_W); line.setAttribute('y2', y.toFixed(1));
    line.setAttribute('class', 'svg-grid-line');
    g.appendChild(line);
  }

  // Longitude lines every 30 degrees
  for (let lng = -180; lng <= 180; lng += 30) {
    const { x } = projectToSVG(0, lng);
    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', x.toFixed(1)); line.setAttribute('y1', 0);
    line.setAttribute('x2', x.toFixed(1)); line.setAttribute('y2', SVG_H);
    line.setAttribute('class', 'svg-grid-line');
    g.appendChild(line);
  }

  // Equator — slightly brighter
  const { y: eqY } = projectToSVG(0, 0);
  const eq = document.createElementNS(ns, 'line');
  eq.setAttribute('x1', 0); eq.setAttribute('y1', eqY.toFixed(1));
  eq.setAttribute('x2', SVG_W); eq.setAttribute('y2', eqY.toFixed(1));
  eq.setAttribute('class', 'svg-equator');
  eq.setAttribute('fill', 'none');
  g.appendChild(eq);

  // Tropic of Cancer (23.5°N) and Capricorn (23.5°S)
  [23.5, -23.5].forEach(lat => {
    const { y: ty } = projectToSVG(lat, 0);
    const tr = document.createElementNS(ns, 'line');
    tr.setAttribute('x1', 0); tr.setAttribute('y1', ty.toFixed(1));
    tr.setAttribute('x2', SVG_W); tr.setAttribute('y2', ty.toFixed(1));
    tr.setAttribute('class', 'svg-tropic');
    tr.setAttribute('fill', 'none');
    g.appendChild(tr);
  });

  // Draw stars
  drawStarField();
}

/**
 * Draw a subtle star field behind the world map for depth effect
 */
function drawStarField() {
  const g = document.getElementById('svgStars');
  g.innerHTML = '';
  const ns = 'http://www.w3.org/2000/svg';
  // Seeded pseudo-random for consistent layout
  let seed = 42;
  function rng() { seed = (seed * 16807 + 0) % 2147483647; return (seed - 1) / 2147483646; }
  const count = 90;
  for (let i = 0; i < count; i++) {
    const x = rng() * SVG_W;
    const y = rng() * SVG_H;
    const r = rng() * 0.8 + 0.2;
    const opacity = rng() * 0.4 + 0.1;
    const star = document.createElementNS(ns, 'circle');
    star.setAttribute('cx', x.toFixed(1));
    star.setAttribute('cy', y.toFixed(1));
    star.setAttribute('r', r.toFixed(2));
    star.setAttribute('fill', '#ffffff');
    star.setAttribute('opacity', opacity.toFixed(2));
    g.appendChild(star);
  }
}

/**
 * Draw beautiful continent outlines using geo polygon point arrays.
 * Each continent is an array of [lat, lng] waypoints forming a polygon.
 * Points are projected to SVG space and drawn as smooth paths.
 */
function drawSVGLandmasses() {
  const g = document.getElementById('svgLand');
  g.innerHTML = '';
  const ns = 'http://www.w3.org/2000/svg';

  // Continent polygons — simplified but recognizable outlines [lat, lng]
  const CONTINENTS = {
    // North America — detailed outline
    northAmerica: [
      [71,-156],[71,-141],[68,-137],[60,-137],[60,-130],[55,-130],[50,-125],
      [48,-122],[46,-120],[43,-124],[38,-122],[34,-120],[30,-117],[23,-110],
      [23,-97],[26,-97],[28,-97],[29,-95],[30,-88],[29,-81],[25,-80],
      [25,-80],[25,-77],[26,-77],[30,-81],[35,-75],[37,-76],[39,-75],
      [41,-70],[42,-70],[44,-66],[47,-53],[52,-55],[58,-62],[60,-64],
      [62,-64],[66,-64],[68,-67],[70,-68],[72,-78],[72,-90],[73,-100],
      [71,-110],[72,-120],[71,-130],[70,-140],[71,-156]
    ],
    // Central America + Caribbean outline (small islands grouped)
    centralAmerica: [
      [23,-90],[20,-87],[15,-85],[10,-83],[8,-77],[9,-79],[11,-85],
      [14,-87],[16,-88],[20,-87],[23,-90]
    ],
    // South America
    southAmerica: [
      [12,-72],[11,-63],[10,-62],[8,-60],[5,-52],[4,-51],[1,-50],
      [-2,-50],[-5,-35],[-8,-35],[-12,-37],[-15,-39],[-20,-40],
      [-23,-43],[-28,-48],[-32,-52],[-34,-58],[-38,-58],[-42,-63],
      [-50,-68],[-53,-68],[-55,-65],[-53,-60],[-50,-55],[-46,-52],
      [-40,-62],[-36,-57],[-34,-53],[-30,-50],[-22,-43],[-15,-39],
      [-8,-37],[-5,-35],[0,-50],[3,-53],[5,-60],[7,-60],[10,-62],
      [12,-72]
    ],
    // Europe
    europe: [
      [71,28],[70,20],[68,14],[62,5],[58,5],[55,8],[54,9],[54,18],
      [52,21],[50,30],[46,30],[44,28],[42,28],[40,26],[38,26],[38,20],
      [40,18],[42,14],[44,12],[44,8],[46,6],[44,4],[42,3],[40,0],
      [38,-5],[36,-6],[36,-9],[38,-9],[40,-8],[42,-8],[43,-4],[44,-1],
      [46,-2],[48,-4],[48,-5],[50,-5],[52,-5],[54,-3],[56,-4],[58,-4],
      [60,5],[62,5],[65,14],[68,14],[70,20],[71,28]
    ],
    // Scandinavia
    scandinavia: [
      [71,28],[71,25],[70,20],[66,16],[64,14],[62,5],[63,5],[65,14],
      [68,18],[70,20],[71,28]
    ],
    // Africa
    africa: [
      [37,10],[35,11],[33,11],[31,32],[28,32],[22,37],[15,42],[12,43],
      [11,44],[10,42],[8,40],[5,39],[2,42],[-1,42],[-4,40],[-10,38],
      [-17,36],[-22,35],[-26,33],[-28,32],[-32,28],[-35,20],[-34,18],
      [-32,18],[-28,16],[-22,14],[-18,12],[-15,12],[-10,14],[-5,12],
      [0,9],[3,10],[5,2],[4,-2],[5,-5],[4,-8],[5,-5],[3,-8],[1,-5],
      [4,-1],[5,2],[5,-2],[3,-10],[1,-15],[3,-17],[5,-16],[8,-15],
      [12,-17],[15,-18],[16,-16],[20,-17],[22,-17],[25,-15],[27,-13],
      [30,-10],[32,-5],[35,2],[37,10]
    ],
    // Asia (main landmass)
    asia: [
      [72,80],[72,130],[66,140],[60,140],[55,135],[50,130],[45,130],
      [40,125],[35,120],[30,120],[25,122],[22,113],[20,110],[18,107],
      [10,104],[5,103],[1,104],[1,110],[4,117],[6,116],[4,103],
      [1,100],[-2,104],[-5,105],[-8,115],[-8,127],[-5,128],[-2,130],
      [0,128],[3,120],[5,116],[8,112],[10,108],[13,100],[18,100],
      [20,93],[22,88],[22,80],[20,73],[16,73],[13,75],[10,76],[8,77],
      [10,80],[8,78],[10,80],[13,80],[16,80],[20,73],[22,70],[26,66],
      [26,62],[28,57],[24,57],[22,59],[20,58],[18,55],[14,52],[12,44],
      [15,42],[22,37],[28,34],[33,34],[36,36],[40,36],[44,42],[44,46],
      [47,54],[50,60],[55,60],[58,56],[58,60],[60,66],[64,80],[68,80],
      [72,80]
    ],
    // Indian Subcontinent (overlay for detail)
    india: [
      [28,72],[30,74],[32,76],[34,74],[34,78],[32,80],[28,84],[26,88],
      [22,88],[18,84],[14,80],[10,78],[8,77],[8,80],[10,80],[14,80],
      [16,80],[20,73],[22,70],[28,72]
    ],
    // Australia
    australia: [
      [-14,130],[-12,136],[-12,140],[-14,144],[-18,148],[-22,150],
      [-26,152],[-28,154],[-32,152],[-34,150],[-38,148],[-38,146],
      [-40,144],[-38,140],[-36,136],[-32,134],[-30,115],[-26,114],
      [-22,114],[-16,122],[-14,130]
    ],
    // Greenland
    greenland: [
      [83,-30],[83,-25],[80,-20],[76,-20],[72,-24],[68,-28],[64,-40],
      [62,-44],[64,-50],[68,-54],[72,-56],[76,-58],[80,-62],[83,-60],[83,-30]
    ],
    // Japan
    japan: [
      [45,141],[43,143],[41,141],[37,136],[35,136],[33,131],[32,131],
      [34,133],[36,136],[38,141],[40,141],[43,145],[45,141]
    ],
    // New Zealand (simplified)
    newZealand: [
      [-34,172],[-36,174],[-38,175],[-40,175],[-44,170],[-46,168],[-44,167],
      [-42,172],[-40,172],[-36,174],[-34,172]
    ],
    // UK & Ireland (simplified)
    uk: [
      [58,-5],[56,-6],[54,-8],[52,-10],[51,-5],[50,-5],[51,0],[53,0],
      [55,-2],[58,-4],[58,-5]
    ],
    // Philippines (simplified)
    philippines: [
      [18,122],[16,121],[14,124],[10,126],[8,124],[10,122],[12,121],
      [16,119],[18,122]
    ],
    // Indonesia (simplified Sumatra+Java+Borneo)
    indonesia: [
      [5,95],[3,105],[1,104],[-5,106],[-8,115],[-8,120],[-5,130],
      [0,128],[3,115],[5,95]
    ],
    // Sri Lanka
    sriLanka: [
      [9,80],[8,81],[6,81],[6,80],[8,79],[9,80]
    ],
    // Madagascar
    madagascar: [
      [-13,49],[-16,50],[-20,48],[-23,44],[-26,44],[-24,47],[-20,48],[-16,49],[-13,49]
    ],
    // Iceland
    iceland: [
      [66,-24],[64,-24],[63,-20],[64,-14],[66,-14],[66,-20],[66,-24]
    ],
  };

  // Project polygon to SVG path string
  function polyToPath(pts) {
    return pts.map((p, i) => {
      const { x, y } = projectToSVG(p[0], p[1]);
      return (i === 0 ? 'M' : 'L') + x.toFixed(1) + ' ' + y.toFixed(1);
    }).join(' ') + ' Z';
  }

  Object.entries(CONTINENTS).forEach(([name, pts]) => {
    const path = document.createElementNS(ns, 'path');
    path.setAttribute('d', polyToPath(pts));
    path.setAttribute('class', 'svg-land');
    g.appendChild(path);
  });

  // Ocean label hints (very faint)
  const oceanLabels = [
    {text:'PACIFIC', lat:5, lng:-155},
    {text:'ATLANTIC', lat:10, lng:-30},
    {text:'INDIAN', lat:-20, lng:75},
    {text:'ARCTIC', lat:82, lng:0},
  ];
  oceanLabels.forEach(ol => {
    const pt = projectToSVG(ol.lat, ol.lng);
    const t = document.createElementNS(ns, 'text');
    t.setAttribute('x', pt.x.toFixed(1));
    t.setAttribute('y', pt.y.toFixed(1));
    t.setAttribute('font-family', 'Share Tech Mono, monospace');
    t.setAttribute('font-size', '7');
    t.setAttribute('fill', 'rgba(0,245,255,0.08)');
    t.setAttribute('text-anchor', 'middle');
    t.setAttribute('letter-spacing', '3');
    t.textContent = ol.text + ' OCEAN';
    g.appendChild(t);
  });
}

/** Transport color lookup */
const SVG_TC = { Air: '#ff00aa', Sea: '#00f5ff', Road: '#00ff88', Rail: '#bf00ff' };

/** Main SVG update function — called after calculate or view switch */
function updateSVGArcs() {
  const ns = 'http://www.w3.org/2000/svg';
  const routesG  = document.getElementById('svgRoutes');
  const markersG = document.getElementById('svgMarkers');
  const emptyDiv = document.getElementById('svgEmptyState');

  routesG.innerHTML  = '';
  markersG.innerHTML = '';

  // Draw world background every time
  drawSVGGrid();
  drawSVGLandmasses();
  if (!ingredients.length) {
    if (emptyDiv) emptyDiv.style.display = 'flex';
    return;
  }
  if (emptyDiv) emptyDiv.style.display = 'none';

  const destPt = projectToSVG(destination.lat, destination.lng);

  // Draw each ingredient arc
  ingredients.forEach((ing, idx) => {
    const food  = FOOD_DATA[ing.foodIdx];
    const dist  = Math.round(haversine(food.production_lat, food.production_lng, destination.lat, destination.lng));
    const co2   = calcEmissions(dist, ing.weightKg || 1, ing.transport, food.carbon_factor);
    const color = SVG_TC[ing.transport] || '#888';
    const srcPt = projectToSVG(food.production_lat, food.production_lng);

    // Draw arc
    const arcPath = drawArc(routesG, srcPt.x, srcPt.y, destPt.x, destPt.y, color, ing.transport, idx * 180);

    // Tooltip data stored on path
    arcPath.dataset.name    = food.ingredient;
    arcPath.dataset.detail  = `${food.origin_country} → ${destination.name}  ·  ${dist.toLocaleString()} km  ·  ${ing.transport}`;
    arcPath.dataset.co2     = co2.toFixed(3) + ' kg CO₂';
    arcPath.dataset.color   = color;

    // Origin marker with pulse ring
    const pulseRing = document.createElementNS(ns, 'circle');
    pulseRing.setAttribute('cx', srcPt.x.toFixed(2));
    pulseRing.setAttribute('cy', srcPt.y.toFixed(2));
    pulseRing.setAttribute('r', '4');
    pulseRing.setAttribute('stroke', color);
    pulseRing.setAttribute('class', 'marker-pulse-ring');
    pulseRing.style.animationDelay = (idx * 0.3) + 's';
    markersG.appendChild(pulseRing);

    const dot = document.createElementNS(ns, 'circle');
    dot.setAttribute('cx', srcPt.x.toFixed(2));
    dot.setAttribute('cy', srcPt.y.toFixed(2));
    dot.setAttribute('r', '4');
    dot.setAttribute('fill', color);
    dot.setAttribute('class', 'origin-marker');
    dot.setAttribute('filter', 'url(#markerGlow)');
    dot.style.stroke = 'rgba(255,255,255,0.5)';
    dot.style.strokeWidth = '1';
    // Tooltip on origin dot
    dot.dataset.name   = food.ingredient;
    dot.dataset.detail = `${food.origin_country}  ·  ${dist.toLocaleString()} km  ·  ${ing.transport}`;
    dot.dataset.co2    = co2.toFixed(3) + ' kg CO₂';
    dot.dataset.color  = color;
    markersG.appendChild(dot);
  });

  // Destination marker (enhanced star burst)
  // Outer halo ring
  const destHalo = document.createElementNS(ns, 'circle');
  destHalo.setAttribute('cx', destPt.x.toFixed(2));
  destHalo.setAttribute('cy', destPt.y.toFixed(2));
  destHalo.setAttribute('r', '18');
  destHalo.setAttribute('fill', 'none');
  destHalo.setAttribute('stroke', '#ff00aa');
  destHalo.setAttribute('stroke-width', '0.6');
  destHalo.setAttribute('opacity', '0.15');
  markersG.appendChild(destHalo);

  const destRing = document.createElementNS(ns, 'circle');
  destRing.setAttribute('cx', destPt.x.toFixed(2));
  destRing.setAttribute('cy', destPt.y.toFixed(2));
  destRing.setAttribute('r', '11');
  destRing.setAttribute('fill', 'none');
  destRing.setAttribute('stroke', '#ff00aa');
  destRing.setAttribute('stroke-width', '1.2');
  destRing.setAttribute('opacity', '0.4');
  markersG.appendChild(destRing);

  const destDot = document.createElementNS(ns, 'circle');
  destDot.setAttribute('cx', destPt.x.toFixed(2));
  destDot.setAttribute('cy', destPt.y.toFixed(2));
  destDot.setAttribute('r', '7');
  destDot.setAttribute('fill', '#ff00aa');
  destDot.setAttribute('class', 'dest-marker');
  destDot.setAttribute('filter', 'url(#destGlow)');
  destDot.dataset.name   = destination.name;
  destDot.dataset.detail = 'Your destination';
  destDot.dataset.co2    = '';
  destDot.dataset.color  = '#ff00aa';
  markersG.appendChild(destDot);

  // Destination label
  const lbl = document.createElementNS(ns, 'text');
  lbl.setAttribute('x', (destPt.x + 11).toFixed(2));
  lbl.setAttribute('y', (destPt.y - 10).toFixed(2));
  lbl.setAttribute('font-family', 'Share Tech Mono, monospace');
  lbl.setAttribute('font-size', '10');
  lbl.setAttribute('fill', '#ff00aa');
  lbl.setAttribute('opacity', '0.9');
  lbl.setAttribute('filter', 'url(#arcGlow)');
  lbl.setAttribute('letter-spacing', '1');
  lbl.textContent = destination.name.split(',')[0].toUpperCase();
  markersG.appendChild(lbl);

  // Attach tooltip handlers
  setupSVGTooltips();
}

/** Setup hover tooltips on SVG elements */
function setupSVGTooltips() {
  const tooltip  = document.getElementById('svgTooltip');
  const svgWrap  = document.getElementById('svgMapWrap');
  const ttName   = document.getElementById('ttName');
  const ttDetail = document.getElementById('ttDetail');
  const ttCo2    = document.getElementById('ttCo2');

  const targets = document.querySelectorAll('.route-arc, .origin-marker, .dest-marker');

  targets.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      if (!el.dataset.name) return;
      ttName.textContent   = el.dataset.name;
      ttDetail.textContent = el.dataset.detail;
      ttCo2.textContent    = el.dataset.co2;
      ttCo2.style.color    = el.dataset.color || 'var(--neon-cyan)';
      tooltip.classList.add('show');
    });

    el.addEventListener('mousemove', (e) => {
      const rect   = svgWrap.getBoundingClientRect();
      const tipW   = 200;
      let   left   = e.clientX - rect.left + 12;
      const top    = e.clientY - rect.top  - 60;
      if (left + tipW > rect.width) left = e.clientX - rect.left - tipW - 12;
      tooltip.style.left = left + 'px';
      tooltip.style.top  = Math.max(0, top) + 'px';
    });

    el.addEventListener('mouseleave', () => {
      tooltip.classList.remove('show');
    });
  });
}

/* ═════════════════════════════════════════════════════
   SMOOTH RESULT REVEAL
   Staggered fade-in of result cards after calculation
═════════════════════════════════════════════════════ */
function revealResults() {
  // Add reveal class to key result elements
  const targets = [
    document.querySelector('.summary-grid'),
    document.getElementById('insightsSection'),
    document.getElementById('dashboardGrid'),
    document.getElementById('ingChartCard'),
    document.getElementById('transportCompareCard'),
    document.getElementById('altCard'),
  ];

  targets.forEach((el, i) => {
    if (!el) return;
    el.classList.add('result-reveal');
    setTimeout(() => el.classList.add('visible'), i * 80);
  });

  // Briefly highlight summary cards
  document.querySelectorAll('.summary-card').forEach(card => {
    card.classList.add('highlight');
    setTimeout(() => card.classList.remove('highlight'), 1200);
  });
}

/* ═════════════════════════════════════════════════════
   SMART INSIGHTS SYSTEM
   Generates A–E rating + contextual tips after calc
═════════════════════════════════════════════════════ */

/** CO₂ thresholds for A–E rating */
const RATING_THRESHOLDS = [
  { grade: 'A', max: 0.5,  label: 'Very Low',  color: '#00ff88' },
  { grade: 'B', max: 2.0,  label: 'Low',        color: '#00f5ff' },
  { grade: 'C', max: 5.0,  label: 'Moderate',   color: '#ffee00' },
  { grade: 'D', max: 12.0, label: 'High',        color: '#ff8000' },
  { grade: 'E', max: Infinity, label: 'Very High', color: '#ff00aa' },
];

/** Rotating "Did You Know?" eco facts */
const ECO_FACTS = [
  'Air freight emits up to 75× more CO₂ per tonne·km than sea shipping.',
  'The average UK household\'s food generates ~8 tonnes of CO₂ annually.',
  'Buying seasonal and local produce can cut food transport emissions by up to 90%.',
  'Sea freight carries ~80% of global trade but emits only ~2.5% of transport CO₂.',
  'Food waste worldwide generates ~3.3 billion tonnes of CO₂ per year.',
  'Eating plant-based food just one day a week saves ~0.5 kg CO₂ per meal.',
  'Imported berries flown by air can emit 100× more CO₂ than locally grown varieties.',
  'Replacing one weekly air-freighted item with a local equivalent saves ~50 kg CO₂/year.',
];

function getRating(co2) {
  return RATING_THRESHOLDS.find(r => co2 <= r.max) || RATING_THRESHOLDS[RATING_THRESHOLDS.length - 1];
}

function generateInsights() {
  if (ingredients.length === 0) return;

  // ── Compute totals for insight logic ──
  let totCO2 = 0, totDist = 0;
  let airCO2 = 0, airIngCount = 0;
  let seaCO2WouldBe = 0;        // hypothetical if all air switched to sea
  let highestCO2 = 0, highestName = '';
  const longDistItems = [];     // items > 1000 km

  ingredients.forEach(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const wt   = ing.weightKg || 1;
    const dist = haversine(food.production_lat, food.production_lng, destination.lat, destination.lng);
    const co2  = calcEmissions(dist, wt, ing.transport, food.carbon_factor);

    totCO2  += co2;
    totDist += dist;

    if (co2 > highestCO2) { highestCO2 = co2; highestName = food.ingredient; }
    if (dist > 1000) longDistItems.push(food.ingredient);

    if (ing.transport === 'Air') {
      airCO2 += co2;
      airIngCount++;
      // What it would be via sea
      seaCO2WouldBe += calcEmissions(dist, wt, 'Sea', food.carbon_factor);
    }
  });

  const rating = getRating(totCO2);
  const insights = [];

  // 1. Transport suggestion — if any air freight used
  if (airIngCount > 0) {
    const potentialSave = airCO2 - seaCO2WouldBe;
    const pctSave = ((potentialSave / totCO2) * 100).toFixed(0);
    insights.push({
      type: 'warn',
      icon: '✈️',
      html: `<strong>${airIngCount} ingredient${airIngCount > 1 ? 's' : ''}</strong> use <span class="highlight-pink">air freight</span> — the most carbon-intensive mode.
             Switching to sea could reduce total emissions by <span class="highlight-green">~${pctSave}%</span>
             (saving <span class="highlight-green">${potentialSave.toFixed(3)} kg CO₂</span>).`
    });
  }

  // 2. Local sourcing suggestion — if items travel > 1000 km
  if (longDistItems.length > 0) {
    insights.push({
      type: 'info',
      icon: '🏪',
      html: `<strong>${longDistItems.slice(0, 3).join(', ')}${longDistItems.length > 3 ? ' & more' : ''}</strong>
             travel over <span class="highlight-yellow">1,000 km</span> to reach you. Consider local or regional alternatives to cut both distance and emissions.`
    });
  }

  // 3. Highest emitter highlight
  if (highestName) {
    insights.push({
      type: 'compare',
      icon: '🔝',
      html: `Highest emitter: <strong class="highlight-pink">${highestName}</strong> contributes
             <span class="highlight-pink">${highestCO2.toFixed(3)} kg CO₂</span>
             (${totCO2 > 0 ? ((highestCO2 / totCO2) * 100).toFixed(0) : 0}% of your total footprint).`
    });
  }

  // 4. Air → Sea comparison insight (if meaningful)
  if (airIngCount > 0 && airCO2 > 0.05) {
    insights.push({
      type: 'good',
      icon: '🚢',
      html: `Switching all <span class="highlight-pink">air</span> transport to <span class="highlight-green">sea</span> could reduce emissions by
             <strong class="highlight-green">~${(((airCO2 - seaCO2WouldBe) / totCO2) * 100).toFixed(0)}%</strong>.
             Sea freight emits just 0.008 kg CO₂/t·km vs air's 0.602 — a <strong>75× difference</strong>.`
    });
  }

  // 5. If all sea/rail/road — positive feedback
  if (airIngCount === 0) {
    insights.push({
      type: 'good',
      icon: '🌿',
      html: `None of your ingredients use <span class="highlight-pink">air freight</span>. 
             That\'s a great choice — you\'re already using lower-emission transport modes for your meal.`
    });
  }

  // 6. Did You Know fact — rotated by ingredient count
  const factIdx = (ingredients.length + Math.floor(totCO2 * 10)) % ECO_FACTS.length;
  insights.push({
    type: 'fact',
    icon: '💡',
    html: `<strong>Did You Know?</strong> ${ECO_FACTS[factIdx]}`
  });

  // ── Render rating badge ──
  const badge = document.getElementById('ratingBadge');
  badge.textContent = rating.grade;
  badge.className = `rating-badge rating-${rating.grade}`;
  badge.title = `Rating ${rating.grade}: ${rating.label} emissions (${totCO2.toFixed(2)} kg CO₂)`;

  // ── Render insight cards ──
  const body = document.getElementById('insightsBody');
  body.innerHTML = insights.map(ins => `
    <div class="insight-item ${ins.type}">
      <span class="insight-icon">${ins.icon}</span>
      <div class="insight-text">${ins.html}</div>
    </div>
  `).join('');

  // Show section
  document.getElementById('insightsSection').style.display = 'block';
}

/* ═════════════════════════════════════════════════════
   INTERACTIVE DASHBOARD
   Pie Chart (CO₂ by transport) + Scatter (Dist vs CO₂)
   Updates dynamically after every calculation
═════════════════════════════════════════════════════ */
let pieChartInstance   = null;
let scatterChartInstance = null;

function updateDashboard() {
  if (ingredients.length === 0) {
    document.getElementById('dashboardGrid').style.display = 'none';
    return;
  }
  document.getElementById('dashboardGrid').style.display = 'grid';

  // ── Aggregate CO₂ per transport mode for pie ──
  const modeMap = {};
  const scatterPoints = [];

  ingredients.forEach(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const wt   = ing.weightKg || 1;
    const dist = haversine(food.production_lat, food.production_lng, destination.lat, destination.lng);
    const co2  = calcEmissions(dist, wt, ing.transport, food.carbon_factor);

    modeMap[ing.transport] = (modeMap[ing.transport] || 0) + co2;
    scatterPoints.push({
      x: Math.round(dist),
      y: parseFloat(co2.toFixed(4)),
      label: food.ingredient,
      transport: ing.transport
    });
  });

  renderPieChart(modeMap);
  renderScatterChart(scatterPoints);
}

function renderPieChart(modeMap) {
  const labels  = Object.keys(modeMap);
  const values  = labels.map(k => parseFloat(modeMap[k].toFixed(4)));
  const colors  = labels.map(k => TC[k] || '#888888');
  const colorsAlpha = colors.map(c => c + '99');

  // Destroy previous instance
  if (pieChartInstance) { pieChartInstance.destroy(); pieChartInstance = null; }

  const ctx = document.getElementById('transportPieChart').getContext('2d');
  pieChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: colorsAlpha,
        borderColor: colors,
        borderWidth: 2,
        hoverOffset: 8,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '58%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#6a7a9a',
            font: { family: "'Share Tech Mono', monospace", size: 10 },
            boxWidth: 12, padding: 10,
            generateLabels: chart => chart.data.labels.map((lbl, i) => ({
              text: `${TRANSPORT_EMOJI[lbl]} ${lbl}: ${values[i].toFixed(3)} kg`,
              fillStyle: colorsAlpha[i],
              strokeStyle: colors[i],
              lineWidth: 1,
              index: i
            }))
          }
        },
        tooltip: {
          backgroundColor: 'rgba(10,10,26,0.95)',
          borderColor: 'rgba(0,245,255,0.3)',
          borderWidth: 1,
          titleColor: '#00f5ff',
          bodyColor: '#e0e8ff',
          callbacks: {
            label: ctx => `${ctx.parsed.toFixed(4)} kg CO₂ (${((ctx.parsed / values.reduce((a,b)=>a+b,0))*100).toFixed(1)}%)`
          }
        }
      }
    }
  });
}

function renderScatterChart(points) {
  // Destroy previous
  if (scatterChartInstance) { scatterChartInstance.destroy(); scatterChartInstance = null; }

  const ctx = document.getElementById('distEmissionsChart').getContext('2d');

  // Build per-transport datasets for colour-coded points
  const modes = [...new Set(points.map(p => p.transport))];
  const datasets = modes.map(mode => ({
    label: `${TRANSPORT_EMOJI[mode]} ${mode}`,
    data: points.filter(p => p.transport === mode).map(p => ({ x: p.x, y: p.y, label: p.label })),
    backgroundColor: (TC[mode] || '#888') + 'aa',
    borderColor: TC[mode] || '#888',
    pointRadius: 7,
    pointHoverRadius: 10,
    showLine: false,
  }));

  scatterChartInstance = new Chart(ctx, {
    type: 'scatter',
    data: { datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#6a7a9a',
            font: { family: "'Share Tech Mono', monospace", size: 10 },
            boxWidth: 10, padding: 8,
          }
        },
        tooltip: {
          backgroundColor: 'rgba(10,10,26,0.95)',
          borderColor: 'rgba(0,245,255,0.3)',
          borderWidth: 1,
          titleColor: '#00f5ff',
          bodyColor: '#e0e8ff',
          callbacks: {
            title: items => items[0]?.raw?.label || '',
            label: ctx => `${ctx.parsed.x.toLocaleString()} km → ${ctx.parsed.y.toFixed(4)} kg CO₂`
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(0,245,255,0.05)' },
          ticks: { color: '#6a7a9a', font: { family: "'Share Tech Mono', monospace", size: 9 }, callback: v => v.toLocaleString() + ' km' },
          title: { display: true, text: 'Distance (km)', color: '#3a4a6a', font: { family: "'Share Tech Mono', monospace", size: 9 } }
        },
        y: {
          grid: { color: 'rgba(0,245,255,0.06)' },
          ticks: { color: '#6a7a9a', font: { family: "'Share Tech Mono', monospace", size: 9 }, callback: v => v.toFixed(3) + ' kg' },
          title: { display: true, text: 'CO₂ (kg)', color: '#3a4a6a', font: { family: "'Share Tech Mono', monospace", size: 9 } }
        }
      }
    }
  });
}

/* ═════════════════════════════════════════════════════
   COMPARISON MODE
   Scenario B ingredient list + side-by-side CO₂ diff
═════════════════════════════════════════════════════ */
let compareModeActive  = false;
let compareIngredients = [];  // Scenario B ingredients
let cmpIdCounter       = 1000;

/** Toggle Compare Mode panel open/closed */
function toggleCompareMode() {
  compareModeActive = !compareModeActive;
  const bar   = document.getElementById('compareToggleBar');
  const panel = document.getElementById('comparePanel');
  const result = document.getElementById('compareResult');

  bar.classList.toggle('active', compareModeActive);
  panel.classList.toggle('open', compareModeActive);

  // Seed Scenario B with one ingredient when first opened
  if (compareModeActive && compareIngredients.length === 0) {
    addCompareIngredient();
  }
  if (!compareModeActive) {
    result.classList.remove('show');
  }
}

/** Add a Scenario B ingredient row */
function addCompareIngredient() {
  compareIngredients.push({ id: cmpIdCounter++, foodIdx: 0, weightKg: 1, transport: 'Sea' });
  renderCompareIngredients();
}

/** Remove a Scenario B ingredient row */
function removeCompareIngredient(id) {
  compareIngredients = compareIngredients.filter(i => i.id !== id);
  renderCompareIngredients();
}

/** Update food selection for a Scenario B row */
function updateCmpFood(id, idx) {
  const ing = compareIngredients.find(i => i.id === id);
  if (ing) {
    ing.foodIdx = parseInt(idx);
    const food = FOOD_DATA[ing.foodIdx];
    const available = getAvailableTransports(food.origin_country, destination.country || 'India');
    ing.transport = available.includes(food.default_transport) ? food.default_transport : available[0];
  }
  renderCompareIngredients();
}

function updateCmpWeight(id, val) {
  const ing = compareIngredients.find(i => i.id === id);
  const parsed = parseFloat(val);
  if (ing) ing.weightKg = (!isNaN(parsed) && parsed > 0) ? parsed : 1;
}

function updateCmpTransport(id, val) {
  const ing = compareIngredients.find(i => i.id === id);
  if (ing) ing.transport = val;
}

/** Render Scenario B ingredient rows */
function renderCompareIngredients() {
  const list = document.getElementById('compareIngList');
  list.innerHTML = compareIngredients.map(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const foodOptions = FOOD_DATA.map((f, i) =>
      `<option value="${i}"${i === ing.foodIdx ? ' selected' : ''}>${f.ingredient}</option>`
    ).join('');
    const available = getAvailableTransports(food.origin_country, destination.country || 'India');
    const transOptions = available.map(t =>
      `<option value="${t}"${t === ing.transport ? ' selected' : ''}>${TRANSPORT_EMOJI[t]} ${t}</option>`
    ).join('');

    return `<div class="compare-ing-item">
      <select style="flex:1" onchange="updateCmpFood(${ing.id},this.value)">${foodOptions}</select>
      <input type="number" min="0.01" step="0.1" value="${ing.weightKg}"
        onchange="updateCmpWeight(${ing.id},this.value)" placeholder="kg" title="Weight (kg)">
      <select onchange="updateCmpTransport(${ing.id},this.value)">${transOptions}</select>
      <button class="compare-ing-del" onclick="removeCompareIngredient(${ing.id})" title="Remove">×</button>
    </div>`;
  }).join('');
}

/** Run the comparison: Scenario A vs Scenario B */
function runComparison() {
  if (ingredients.length === 0) {
    alert('Add ingredients to Scenario A (main calculator) first.');
    return;
  }
  if (compareIngredients.length === 0) {
    alert('Add at least one ingredient to Scenario B.');
    return;
  }

  // ── Compute Scenario A totals ──
  let aCO2 = 0, aDist = 0;
  ingredients.forEach(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const dist = haversine(food.production_lat, food.production_lng, destination.lat, destination.lng);
    aCO2  += calcEmissions(dist, ing.weightKg || 1, ing.transport, food.carbon_factor);
    aDist += dist;
  });

  // ── Compute Scenario B totals ──
  let bCO2 = 0, bDist = 0;
  compareIngredients.forEach(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const dist = haversine(food.production_lat, food.production_lng, destination.lat, destination.lng);
    bCO2  += calcEmissions(dist, ing.weightKg || 1, ing.transport, food.carbon_factor);
    bDist += dist;
  });

  // ── Render result ──
  const result  = document.getElementById('compareResult');
  const verdict = document.getElementById('compareVerdict');
  const diff    = bCO2 - aCO2;
  const pct     = aCO2 > 0 ? Math.abs((diff / aCO2) * 100).toFixed(1) : 0;
  const isBetter = diff < 0;

  document.getElementById('cmpACo2').textContent = aCO2.toFixed(3) + ' kg CO₂';
  document.getElementById('cmpADist').textContent = Math.round(aDist).toLocaleString() + ' km total';
  document.getElementById('cmpBCo2').textContent = bCO2.toFixed(3) + ' kg CO₂';
  document.getElementById('cmpBDist').textContent = Math.round(bDist).toLocaleString() + ' km total';

  document.getElementById('verdictPct').textContent = (isBetter ? '↓' : '↑') + pct + '%';
  document.getElementById('verdictText').textContent = isBetter
    ? `Scenario B reduces emissions by ${pct}% (saves ${Math.abs(diff).toFixed(3)} kg CO₂ vs Scenario A)`
    : diff === 0
      ? 'Scenarios A and B have identical emissions.'
      : `Scenario B increases emissions by ${pct}% (+${diff.toFixed(3)} kg CO₂ vs Scenario A)`;

  verdict.classList.toggle('worse', !isBetter && diff !== 0);
  result.classList.add('show');
}

/* ═════════════════════════════════════════════════════
   FAQ INTERACTIONS
═════════════════════════════════════════════════════ */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  document.querySelectorAll('.faq-chip').forEach(c => c.classList.remove('active'));
  if (!isOpen) {
    item.classList.add('open');
    const idx = item.dataset.index;
    const chip = document.querySelector(`.faq-chip[onclick*="openFaq(${idx},"]`);
    if (chip) chip.classList.add('active');
  }
}

function openFaq(index, chipEl) {
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  document.querySelectorAll('.faq-chip').forEach(c => c.classList.remove('active'));
  const item = document.querySelector(`.faq-item[data-index="${index}"]`);
  if (item) { item.classList.add('open'); item.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
  if (chipEl) chipEl.classList.add('active');
}

/* ═════════════════════════════════════════════════════
   CHATBOT (rule-based)
═════════════════════════════════════════════════════ */
const BOT_ANSWERS = {
  "What are food miles?": "🌍 <strong>Food miles</strong> are the total distance food travels from farm to your plate. Coined by Professor Tim Lang in the 1990s, the concept highlights the hidden carbon cost in our food system. A Mexican avocado travels ~13,500 km to Mumbai — each kilometre burning fuel and releasing CO₂.",
  "How does this calculator work?": "⚙️ The calculator works in 3 steps:<br>1. Select your <strong>destination city</strong><br>2. Add <strong>ingredients</strong> with weights and transport mode<br>3. It computes distance using the <strong>Haversine formula</strong>, then multiplies by DEFRA carbon factors to get CO₂ emissions. Results show on an interactive map!",
  "Why is CO₂ harmful?": "💨 CO₂ is a <strong>greenhouse gas</strong> that traps heat in Earth's atmosphere. Higher CO₂ levels cause global temperatures to rise, leading to melting ice caps, rising sea levels, extreme weather events, and ecosystem collapse. Food transport contributes ~6% of global greenhouse gas emissions.",
  "Which transport is most eco-friendly?": "🚢 <strong>Sea freight</strong> is by far the greenest transport mode — emitting just 0.008 kg CO₂ per tonne·km. That's 75× less than air freight (0.602 kg). Rail (0.028) and road (0.096) fall in between. Always choose sea-shipped imports over air-freighted ones!",
  "How can I reduce my food miles?": "🌱 Top eco-tips:<br>• <strong>Buy local</strong> — choose produce from your region<br>• <strong>Eat seasonally</strong> — seasonal foods don't need air freight<br>• <strong>Swap exotic imports</strong> — avocados → mangoes, blueberries → Jamun<br>• <strong>Choose sea-shipped</strong> over air-freighted imports<br>• <strong>Reduce waste</strong> — wasted food wastes its carbon cost too!"
};

function toggleChat() {
  document.getElementById('chatWindow').classList.toggle('open');
}

function askBot(question) {
  const msgs = document.getElementById('chatMessages');
  const uMsg = document.createElement('div');
  uMsg.className = 'chat-msg user';
  uMsg.textContent = question;
  msgs.appendChild(uMsg);

  setTimeout(() => {
    const bMsg = document.createElement('div');
    bMsg.className = 'chat-msg bot';
    bMsg.innerHTML = BOT_ANSWERS[question] || "🤔 I'm not sure about that. Try the FAQ section for more answers!";
    msgs.appendChild(bMsg);
    msgs.scrollTop = msgs.scrollHeight;
  }, 400);

  msgs.scrollTop = msgs.scrollHeight;
}

/* ═════════════════════════════════════════════════════
   MOBILE NAV
═════════════════════════════════════════════════════ */
function toggleMobileNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

/* ═════════════════════════════════════════════════════
   FOOD SELECTOR SYSTEM
   Browse foods by category, search, select, add to calc
═════════════════════════════════════════════════════ */

// Food emoji map
const FOOD_EMOJI = {
  'Rice':'🍚','Wheat':'🌾','Quinoa':'🌱','Avocado':'🥑','Almonds':'🥜',
  'Olive Oil':'🫒','Coffee':'☕','Chocolate':'🍫','Banana':'🍌','Apple':'🍎',
  'Oats':'🌾','Soy Milk':'🥛','Blueberries':'🫐','Pasta':'🍝','Salmon':'🐟',
  'Black Pepper':'🌶️','Tomato':'🍅','Onion':'🧅','Mango':'🥭','Coconut':'🥥',
  'Kiwi':'🥝','Asparagus':'🌿','Maple Syrup':'🍁','Vanilla':'🌸','Dates':'🫐',
  'Walnuts':'🥜','Strawberry':'🍓','Jackfruit':'🍈','Dragon Fruit':'🐉',
  'Chia Seeds':'🌱','Broccoli':'🥦','Cranberries':'🍒','Lentils':'🫘',
  'Chickpeas':'🫘','Garlic':'🧄','Ginger':'🫚','Turmeric':'🟡','Spinach':'🌿',
  'Potato':'🥔','Cauliflower':'🥦','Paneer':'🧀','Eggs':'🥚','Chicken':'🍗',
  'Honey':'🍯','Sunflower Oil':'🌻','Green Tea':'🍵','Pineapple':'🍍',
  'Orange':'🍊','Flaxseeds':'🌱','Beef':'🥩',
  'Basmati Rice':'🍚','Brown Rice':'🍚','Sorghum (Jowar)':'🌾',
  'Pearl Millet (Bajra)':'🌾','Finger Millet (Ragi)':'🌾','Corn (Maize)':'🌽',
  'Barley':'🌾','Buckwheat':'🌿','Teff':'🌱','Spelt':'🌾','Farro':'🌾',
  'Kamut':'🌾','Amaranth':'🌸',
  'Parmesan Cheese':'🧀','Mozzarella':'🧀','Cheddar Cheese':'🧀','Greek Yogurt':'🥛',
  'Oat Milk':'🥛','Almond Milk':'🥛','Butter (Imported)':'🧈','Cream Cheese':'🧀',
  'Condensed Milk':'🥛','Whey Protein':'💪',
  'Tuna':'🐟','Shrimp (Prawns)':'🦐','Squid':'🦑','Crab':'🦀','Lobster':'🦞',
  'Oysters':'🦪','Sardines':'🐟','Cod':'🐟','Tilapia':'🐟','Mackerel':'🐟',
  'Anchovies':'🐟','Mussels':'🦪',
  'Lamb':'🍖','Pork':'🥩','Turkey':'🦃','Duck':'🦆','Venison':'🦌',
  'Soy Sauce':'🍶','Fish Sauce':'🫙','Oyster Sauce':'🫙','Miso Paste':'🫙',
  'Tofu':'🫘','Tempeh':'🫘','Natto':'🫘','Kimchi':'🥬','Sriracha':'🌶️',
  'Harissa Paste':'🌶️','Tomato Paste':'🍅','Pesto':'🌿','Balsamic Vinegar':'🫙',
  'Apple Cider Vinegar':'🫙','Worcestershire Sauce':'🫙','Dijon Mustard':'🫙',
  'Capers':'🫙','Sun-dried Tomatoes':'🍅','Coconut Aminos':'🫙',
  'Black Tea (Assam)':'🍵','Darjeeling Tea':'🍵','Matcha':'🍵','Oolong Tea':'🍵',
  'Chamomile Tea':'🌼','Hibiscus Tea':'🌺','Coconut Water':'🥥','Kombucha':'🫙',
  'Coconut Sugar':'🥥','Stevia':'🌿','Agave Syrup':'🌵',
  'Coconut Oil':'🥥','Avocado Oil':'🥑','Palm Oil':'🌴','Canola Oil':'🌱',
  'Grapeseed Oil':'🍇','Lard':'🫙','Ghee (Local)':'🧈',
  'Bread (Sourdough)':'🍞','Croissant':'🥐','Dark Chocolate (70%)':'🍫',
  'Cocoa Powder':'☕','Baking Soda':'🫙','Yeast (Dry)':'🫙',
  'Acai Powder':'🫐','Spirulina':'🌿','Collagen Peptides':'💊','MCT Oil':'🫙',
  'Protein Isolate (Pea)':'💪','Tahini (Sesame Paste)':'🫙','Kimchi Paste':'🌶️',
  'Gochujang':'🌶️','Masa Harina':'🌽','Polenta':'🌽','Couscous':'🍚',
  'Bulgur Wheat':'🌾','Rice Noodles':'🍜','Glass Noodles':'🍜','Udon Noodles':'🍜',
  'Ramen Noodles':'🍜','Tortilla (Corn)':'🫓','Panko Breadcrumbs':'🍞',
  'Brown Sugar':'🍬','Raw Cane Sugar':'🍬','Molasses':'🍯','Xylitol':'🍬',
  'Frozen Peas':'🫛','Frozen Corn':'🌽','Canned Chickpeas':'🫘',
  'Canned Tomatoes':'🍅','Canned Tuna':'🐟','Canned Coconut Milk':'🥥',
};

// Food category map
const FOOD_CATEGORIES = {
  grains: ['Rice','Wheat','Quinoa','Oats','Pasta','Basmati Rice','Brown Rice','Sorghum (Jowar)','Pearl Millet (Bajra)','Finger Millet (Ragi)','Corn (Maize)','Barley','Buckwheat','Teff','Spelt','Farro','Kamut','Amaranth','Couscous','Bulgur Wheat','Polenta','Masa Harina','Rice Noodles','Glass Noodles','Udon Noodles','Ramen Noodles','Tortilla (Corn)','Panko Breadcrumbs'],
  fruits: ['Avocado','Banana','Apple','Blueberries','Kiwi','Strawberry','Jackfruit','Dragon Fruit','Cranberries','Mango','Coconut','Pineapple','Orange','Dates','Coconut Water'],
  vegetables: ['Tomato','Onion','Broccoli','Spinach','Potato','Cauliflower','Asparagus','Frozen Peas','Frozen Corn','Canned Tomatoes','Sun-dried Tomatoes'],
  proteins: ['Salmon','Eggs','Chicken','Beef','Lentils','Chickpeas','Almonds','Walnuts','Chia Seeds','Flaxseeds','Soy Milk','Tuna','Shrimp (Prawns)','Squid','Crab','Lobster','Oysters','Sardines','Cod','Tilapia','Mackerel','Anchovies','Mussels','Lamb','Pork','Turkey','Duck','Venison','Tofu','Tempeh','Natto','Whey Protein','Protein Isolate (Pea)','Canned Tuna','Canned Chickpeas'],
  dairy: ['Paneer','Soy Milk','Honey','Parmesan Cheese','Mozzarella','Cheddar Cheese','Greek Yogurt','Oat Milk','Almond Milk','Butter (Imported)','Cream Cheese','Condensed Milk','Ghee (Local)'],
  spices: ['Black Pepper','Garlic','Ginger','Turmeric','Vanilla','Maple Syrup','Soy Sauce','Fish Sauce','Oyster Sauce','Miso Paste','Kimchi','Sriracha','Harissa Paste','Tomato Paste','Pesto','Balsamic Vinegar','Apple Cider Vinegar','Worcestershire Sauce','Dijon Mustard','Capers','Coconut Aminos','Kimchi Paste','Gochujang','Tahini (Sesame Paste)'],
  oils: ['Olive Oil','Sunflower Oil','Coconut Oil','Avocado Oil','Palm Oil','Canola Oil','Grapeseed Oil','Lard','Ghee (Local)','MCT Oil'],
  beverages: ['Coffee','Green Tea','Black Tea (Assam)','Darjeeling Tea','Matcha','Oolong Tea','Chamomile Tea','Hibiscus Tea','Coconut Water','Kombucha'],
  exotic: ['Avocado','Blueberries','Salmon','Asparagus','Cranberries','Teff','Kamut','Lobster','Oysters','Foie Gras','Truffle','Caviar','Wasabi','Yuzu Juice','Maca Root','Acai Berries','Acai Powder','Spirulina','Gochujang'],
  local: ['Rice','Wheat','Banana','Apple','Tomato','Onion','Mango','Coconut','Strawberry','Jackfruit','Broccoli','Lentils','Chickpeas','Garlic','Ginger','Turmeric','Spinach','Potato','Cauliflower','Paneer','Eggs','Chicken','Honey','Pineapple','Orange','Basmati Rice','Brown Rice','Sorghum (Jowar)','Pearl Millet (Bajra)','Finger Millet (Ragi)','Ghee (Local)','Black Tea (Assam)','Darjeeling Tea','Coconut Water','Tilapia','Mackerel','Shrimp (Prawns)','Frozen Peas'],
};

const TRANSPORT_BADGE_CLASS = { Air:'tp-air', Sea:'tp-sea', Road:'tp-road', Rail:'tp-rail' };
const TRANSPORT_CARD_CLASS  = { Air:'air-card', Sea:'sea-card', Road:'road-card', Rail:'rail-card' };

let selectedFoods = new Set(); // indices into FOOD_DATA
let foodCatFilter = 'all';
let foodSearchQuery = '';

function buildFoodSelectorGrid() {
  const grid = document.getElementById('foodSelectorGrid');
  grid.innerHTML = '';

  const items = FOOD_DATA.map((food, idx) => ({ food, idx })).filter(({ food, idx }) => {
    // Category filter
    if (foodCatFilter !== 'all') {
      const cat = FOOD_CATEGORIES[foodCatFilter] || [];
      if (!cat.includes(food.ingredient)) return false;
    }
    // Search filter
    if (foodSearchQuery) {
      const q = foodSearchQuery.toLowerCase();
      if (!food.ingredient.toLowerCase().includes(q) && !food.origin_country.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  if (!items.length) {
    grid.innerHTML = '<div class="food-no-results"><span class="food-no-results-icon">🔍</span>No foods match your search.</div>';
    return;
  }

  items.forEach(({ food, idx }, cardIdx) => {
    const emoji = FOOD_EMOJI[food.ingredient] || '🌿';
    const isSelected = selectedFoods.has(idx);
    const tClass = TRANSPORT_CARD_CLASS[food.default_transport] || '';
    const tBadge = TRANSPORT_BADGE_CLASS[food.default_transport] || '';
    const tc = { Air:'#ff00aa', Sea:'#00f5ff', Road:'#00ff88', Rail:'#bf00ff' };
    const tcColor = tc[food.default_transport] || '#888';

    const card = document.createElement('div');
    card.className = `food-item-card ${tClass}${isSelected ? ' selected' : ''}`;
    card.style.animationDelay = Math.min(cardIdx * 20, 400) + 'ms';
    card.dataset.idx = idx;
    card.innerHTML = `
      <div class="food-item-emoji">${emoji}</div>
      <div class="food-item-name">${food.ingredient}</div>
      <div class="food-item-origin">🌍 ${food.origin_country}</div>
      <span class="food-item-transport transport-pill ${tBadge}" style="border-color:${tcColor}22">
        ${TRANSPORT_EMOJI[food.default_transport]} ${food.default_transport}
      </span>
      <button class="food-item-add" onclick="event.stopPropagation();quickAddFood(${idx})">
        ${isSelected ? '✓ Added' : '+ Add to Meal'}
      </button>
    `;
    card.addEventListener('click', () => toggleFoodSelection(idx));
    grid.appendChild(card);
  });

  updateFoodSelectionDisplay();
}

function toggleFoodSelection(idx) {
  if (selectedFoods.has(idx)) {
    selectedFoods.delete(idx);
  } else {
    selectedFoods.add(idx);
  }
  buildFoodSelectorGrid();
}

function quickAddFood(idx) {
  if (!selectedFoods.has(idx)) selectedFoods.add(idx);
  updateFoodSelectionDisplay();
  buildFoodSelectorGrid();
}

function updateFoodSelectionDisplay() {
  const count = selectedFoods.size;
  document.getElementById('foodSelCount').textContent = count;
  const btn = document.getElementById('foodAddToCalcBtn');
  btn.disabled = count === 0;
  // Show estimated CO2 preview
  const preview = document.getElementById('foodSelCo2Preview');
  if (count > 0) {
    preview.innerHTML = `<span style="color:var(--neon-green);font-size:11px">→ ${count} ingredient${count>1?'s':''} ready to add</span>`;
  } else {
    preview.innerHTML = '';
  }
}

function filterFoodCategory(cat, btn) {
  foodCatFilter = cat;
  document.querySelectorAll('.food-cat-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  buildFoodSelectorGrid();
}

function filterFoodSearch(query) {
  foodSearchQuery = query;
  buildFoodSelectorGrid();
}

function clearFoodSelection() {
  selectedFoods.clear();
  buildFoodSelectorGrid();
}

function addSelectedFoodsToCalculator() {
  if (!selectedFoods.size) return;
  selectedFoods.forEach(idx => {
    const food = FOOD_DATA[idx];
    ingredients.push({
      id: Date.now() + Math.random(),
      foodIdx: idx,
      weightKg: 0.5,
      transport: food.default_transport
    });
  });
  renderIngredients();
  selectedFoods.clear();
  buildFoodSelectorGrid();
  // Switch to calculator page
  if (typeof switchPage === 'function') switchPage('calculator');
  // Flash notification on the calculate button
  setTimeout(function() {
    const btn = document.getElementById('calcBtn');
    if (btn) {
      btn.style.boxShadow = '0 0 30px rgba(0,245,255,0.6)';
      setTimeout(() => { btn.style.boxShadow = ''; }, 1200);
    }
  }, 200);
}

/* ═════════════════════════════════════════════════════
   INITIALISATION
═════════════════════════════════════════════════════ */
function initApp() {
  // Set Chart.js eco-friendly defaults
  if (window.Chart) {
    Chart.defaults.font.family    = "'Nunito', sans-serif";
    Chart.defaults.color          = '#5D6B5A';
    Chart.defaults.borderColor    = 'rgba(46,125,50,0.08)';
    Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(255,248,238,0.97)';
    Chart.defaults.plugins.tooltip.borderColor     = 'rgba(46,125,50,0.2)';
    Chart.defaults.plugins.tooltip.borderWidth     = 1;
    Chart.defaults.plugins.tooltip.titleColor      = '#1B5E20';
    Chart.defaults.plugins.tooltip.bodyColor       = '#1B1B1B';
    Chart.defaults.plugins.tooltip.padding         = 12;
  }

  initCitySearch();
  initMap();
  renderIngredients();
  updateEquivalents(0);
  buildComparisonChart();
  buildFoodSelectorGrid();

  // Draw SVG world background immediately on load
  drawSVGGrid();
  drawSVGLandmasses();

  // Reset display to clean state
  const totDist = document.getElementById('totDist');
  const totCO2  = document.getElementById('totCO2');
  const totIng  = document.getElementById('totIng');
  const impactFill  = document.getElementById('impactFill');
  const impactLabel = document.getElementById('impactLabel');
  const breakdownBars = document.getElementById('breakdownBars');
  const altCard = document.getElementById('altCard');

  if (totDist)  totDist.textContent = '0';
  if (totCO2)   totCO2.textContent  = '0.00';
  if (totIng)   totIng.textContent  = '0';
  if (impactFill)  impactFill.style.width = '0%';
  if (impactLabel) impactLabel.textContent = '0.00 kg CO₂';
  if (breakdownBars) breakdownBars.innerHTML =
    '<div style="font-size:13px;color:var(--text-muted);text-align:center;padding:12px">Add ingredients to see breakdown</div>';
  if (altCard) altCard.style.display = 'none';
  updateMap();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}




/* ═══════════════════════════════════════════════════
   PAGE NAVIGATION  (merged from inline script)
   Handles multi-page switching, map invalidation,
   scroll-reveal re-trigger, and Sound feedback.
═══════════════════════════════════════════════════ */
function switchPage(name) {
  // Sound feedback (Sound engine defined below in eco section)
  if (typeof Sound !== 'undefined') Sound.pageSwitch();

  // Hide all pages, show target
  document.querySelectorAll('.page-section').forEach(function(p) {
    p.classList.remove('active-page', 'page-entered');
  });
  document.querySelectorAll('.nav-link').forEach(function(l) {
    l.classList.remove('active');
  });

  var page = document.getElementById('page-' + name);
  if (page) {
    page.classList.add('active-page');
    // Trigger entrance animation
    void page.offsetWidth;
    page.classList.add('page-entered');
  }

  var navLink = document.querySelector('.nav-link[data-page="' + name + '"]');
  if (navLink) navLink.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  var navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.remove('open');

  // Re-init map when calculator page becomes visible
  if (name === 'calculator') {
    setTimeout(function() {
      if (window.map) window.map.invalidateSize();
      if (typeof updateSVGArcs === 'function') updateSVGArcs();
    }, 120);
  }

  // Refresh history page when switched to
  if (name === 'history') {
    setTimeout(function() {
      if (window.History) {
        History.renderHistoryPage();
        History.updateWeeklySummary();
      }
    }, 80);
  }

  // Update chart colours for current theme
  if (window.Theme) setTimeout(Theme.updateChartThemes, 100);

  // Re-trigger scroll-reveal for newly visible elements
  setTimeout(function() {
    document.querySelectorAll('.sr-init:not(.sr-visible)').forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add('sr-visible');
      }
    });
  }, 160);
}
window.switchPage = switchPage;


/* ═══════════════════════════════════════════════════════════
   ECO-MILES  ·  CINEMATIC FEATURE ENHANCEMENTS
   ─────────────────────────────────────────────────────────
   1. Floating eco particles / leaf system
   2. Scroll-reveal (IntersectionObserver)
   3. Web-Audio sound engine + mute toggle
   4. Ripple effects on buttons
   5. Journey timeline step animations
   6. Hero parallax + animated word reveal
   7. Magnetic CTA buttons
   8. Animated stat counters on home page
   9. Carbon pulse on impact meter
  10. Page-switch sound & transition hook
═══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   1. FLOATING ECO PARTICLES
   Generates floating leaf/nature emoji particles
   scattered across the viewport background.
───────────────────────────────────────────── */
function initParticles() {
  const container = document.getElementById('ecoParticlesBg');
  if (!container) return;

  const symbols = ['🍃', '🌿', '🍀', '🌱', '🌾', '🍂', '🌻', '🌼'];
  const COUNT   = 28;

  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement('div');
    p.className = 'eco-particle';
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    const size    = 12 + Math.random() * 18;
    const left    = Math.random() * 100;
    const dur     = 14 + Math.random() * 20;
    const delay   = -Math.random() * 30;
    const opacity = 0.10 + Math.random() * 0.18;
    const drift   = (Math.random() - 0.5) * 160;

    p.style.cssText = `
      left:${left}%;
      font-size:${size}px;
      animation-duration:${dur}s;
      animation-delay:${delay}s;
      opacity:${opacity};
      --drift:${drift}px;
    `;
    container.appendChild(p);
  }
}

/* ─────────────────────────────────────────────
   2. SCROLL REVEAL  (IntersectionObserver)
   Elements with class .scroll-reveal fade-in
   when they enter the viewport.
───────────────────────────────────────────── */
function initScrollReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el    = entry.target;
          const delay = el.dataset.revealDelay || 0;
          setTimeout(() => el.classList.add('sr-visible'), Number(delay));
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    el.classList.add('sr-init');
    io.observe(el);
  });
}

/* ─────────────────────────────────────────────
   3. WEB-AUDIO SOUND ENGINE
   Tiny synthesised tones — no external files.
   All sounds are kept very subtle (gain ≤ 0.06).
───────────────────────────────────────────── */
const Sound = (() => {
  let ctx = null;
  let enabled = false;

  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    return ctx;
  }

  function tone(freq, dur, type = 'sine', vol = 0.04) {
    if (!enabled) return;
    try {
      const ac   = getCtx();
      const osc  = ac.createOscillator();
      const gain = ac.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ac.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ac.currentTime + dur * 0.6);
      gain.gain.setValueAtTime(vol, ac.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
      osc.connect(gain);
      gain.connect(ac.destination);
      osc.start(ac.currentTime);
      osc.stop(ac.currentTime + dur);
    } catch (_) { /* AudioContext blocked */ }
  }

  return {
    hover    : () => tone(520, 0.09, 'sine',     0.03),
    click    : () => tone(660, 0.15, 'triangle', 0.05),
    success  : () => { tone(523, 0.12, 'sine', 0.04); setTimeout(() => tone(659, 0.12, 'sine', 0.04), 120); setTimeout(() => tone(784, 0.18, 'sine', 0.05), 240); },
    pageSwitch: () => tone(440, 0.10, 'sine',   0.03),
    addItem  : () => tone(587, 0.12, 'triangle', 0.04),
    isEnabled: () => enabled,
    setEnabled: (v) => { enabled = v; },
  };
})();

/* ─────────────────────────────────────────────
   4. SOUND TOGGLE BUTTON
───────────────────────────────────────────── */
function initSoundToggle() {
  const btn = document.getElementById('soundToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const newVal = !Sound.isEnabled();
    Sound.setEnabled(newVal);
    btn.textContent = newVal ? '🔊' : '🔇';
    btn.title       = newVal ? 'Sound On — click to mute' : 'Sound Off — click to enable';
    btn.classList.toggle('sound-active', newVal);
    if (newVal) Sound.success();
  });
}

/* ─────────────────────────────────────────────
   5. RIPPLE EFFECT ON BUTTONS
───────────────────────────────────────────── */
function initRipples() {
  const SELECTORS = [
    '.calc-btn', '.hero-cta-btn', '.food-add-to-calc-btn',
    '.add-ing-btn', '.compare-calc-btn', '.map-tab-btn',
    '.food-cat-tab', '.nav-link',
  ];

  document.querySelectorAll(SELECTORS.join(',')).forEach(btn => {
    btn.addEventListener('click', (e) => {
      Sound.click();
      const ripple = document.createElement('span');
      ripple.className = 'ripple-wave';
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      ripple.style.cssText = `
        width:${size}px; height:${size}px;
        left:${e.clientX - rect.left - size/2}px;
        top:${e.clientY - rect.top  - size/2}px;
      `;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });

    btn.addEventListener('mouseenter', () => Sound.hover());
  });
}

/* ─────────────────────────────────────────────
   6. JOURNEY TIMELINE ANIMATION
   Steps animate in one-by-one when timeline
   section scrolls into view.
───────────────────────────────────────────── */
function initTimeline() {
  const timeline = document.getElementById('journeyTimeline');
  if (!timeline) return;

  const steps = timeline.querySelectorAll('.jt-step');
  const connectors = timeline.querySelectorAll('.jt-conn');

  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      steps.forEach((step, i) => {
        setTimeout(() => step.classList.add('jt-active'), i * 220);
      });
      connectors.forEach((conn, i) => {
        setTimeout(() => conn.classList.add('jt-conn-active'), i * 220 + 110);
      });
      io.disconnect();
    }
  }, { threshold: 0.25 });

  io.observe(timeline);
}

/* ─────────────────────────────────────────────
   7. HERO PARALLAX + ANIMATED WORD REVEAL
───────────────────────────────────────────── */
function initHeroParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Animated word reveal for hero title
  const title = hero.querySelector('.hero-title');
  if (title) {
    const html  = title.innerHTML;
    const words = html.split(/(\s+|<br>|<em>|<\/em>)/g);
    title.innerHTML = words.map(w => {
      if (!w.trim() || w.startsWith('<')) return w;
      return `<span class="hero-word">${w}</span>`;
    }).join('');
    setTimeout(() => {
      hero.querySelectorAll('.hero-word').forEach((word, i) => {
        setTimeout(() => word.classList.add('hero-word-visible'), i * 60);
      });
    }, 200);
  }

  // Subtle parallax on scroll
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const particles = document.querySelector('.hero .eco-particles-hero');
    if (particles) {
      particles.style.transform = `translateY(${scrolled * 0.18}px)`;
    }
  }, { passive: true });
}

/* ─────────────────────────────────────────────
   8. MAGNETIC CTA BUTTONS
   Subtle magnetic pull toward cursor.
───────────────────────────────────────────── */
function initMagneticButtons() {
  document.querySelectorAll('.hero-cta-btn.primary').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect  = btn.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = (e.clientX - cx) * 0.28;
      const dy    = (e.clientY - cy) * 0.28;
      btn.style.transform = `translate(${dx}px, ${dy}px) scale(1.04)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ─────────────────────────────────────────────
   9. ANIMATED STAT COUNTERS (Home page)
   Counts up the hero stat numbers on page load.
───────────────────────────────────────────── */
function initHeroCounters() {
  const targets = [
    { el: document.querySelector('.hero-stat-val:nth-child(1)'), end: 342, suffix: '+' },
    { el: document.querySelector('.hero-stat-val:nth-child(2)'), end: 4,   suffix: '' },
    { el: document.querySelector('.hero-stat-val:nth-child(3)'), end: 500, suffix: '+' },
  ];

  targets.forEach(({ el, end, suffix }) => {
    if (!el) return;
    let current = 0;
    const inc  = end / 50;
    const step = () => {
      current = Math.min(current + inc, end);
      el.textContent = Math.round(current) + suffix;
      if (current < end) requestAnimationFrame(step);
    };
    setTimeout(step, 400);
  });
}

/* ─────────────────────────────────────────────
  10. CARBON PULSE — impact meter glow animation
      Pulses the impact fill bar when it updates.
───────────────────────────────────────────── */
function initCarbonPulse() {
  const fill = document.getElementById('impactFill');
  if (!fill) return;

  const observer = new MutationObserver(() => {
    fill.classList.remove('carbon-pulse');
    void fill.offsetWidth; // reflow
    fill.classList.add('carbon-pulse');
    setTimeout(() => fill.classList.remove('carbon-pulse'), 600);
  });

  observer.observe(fill, { attributes: true, attributeFilter: ['style'] });
}

/* ─────────────────────────────────────────────
  12. CARD TILT on hover (Food Passport feel)
───────────────────────────────────────────── */
function initCardTilt() {
  document.querySelectorAll('.food-item-card, .intro-card, .pnav-card, .suggest-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect  = card.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const rotX  = ((e.clientY - cy) / (rect.height / 2)) * -5;
      const rotY  = ((e.clientX - cx) / (rect.width  / 2)) *  5;
      card.style.transform     = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-3px)`;
      card.style.transition    = 'transform 0.1s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform  = '';
      card.style.transition = 'transform 0.4s ease';
    });
  });
}

/* ─────────────────────────────────────────────
  13. PASSPORT STAMP effect on food-item-add click
───────────────────────────────────────────── */
function initPassportStamp() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.food-item-add');
    if (!btn) return;
    const card = btn.closest('.food-item-card');
    if (!card) return;

    Sound.addItem();

    const stamp = document.createElement('div');
    stamp.className = 'passport-stamp';
    stamp.textContent = '✓ ADDED';
    card.appendChild(stamp);

    requestAnimationFrame(() => stamp.classList.add('passport-stamp-in'));
    setTimeout(() => {
      stamp.classList.add('passport-stamp-out');
      setTimeout(() => stamp.remove(), 400);
    }, 900);
  });
}


/* ─────────────────────────────────────────────
   BOOTSTRAP — wait for DOM + app.js
───────────────────────────────────────────── */
function bootEcoFeatures() {
  initParticles();
  initScrollReveal();
  initSoundToggle();
  initRipples();
  initTimeline();
  initHeroParallax();
  initMagneticButtons();
  initHeroCounters();
  initCarbonPulse();
  initCardTilt();
  initPassportStamp();
  // Add scroll-reveal to key sections on the active page
  document.querySelectorAll(
    '.intro-card, .pnav-card, .env-card, .suggest-card, ' +
    '.how-card, .faq-item, .hero-card, .chart-wrap'
  ).forEach((el, i) => {
    el.classList.add('scroll-reveal');
    el.dataset.revealDelay = String(i % 5 * 80);
  });
  initScrollReveal(); // re-run with new elements
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootEcoFeatures);
} else {
  bootEcoFeatures();
}

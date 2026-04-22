// ── FOOD DATA ──
const FOOD_DATA = [
  {ingredient:"Rice (Basmati)",emoji:"🍚",category:"Grains",origin_country:"India",origin_city:"Punjab",production_lat:31.1,production_lng:75.3,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local rice varieties"},
  {ingredient:"Rice (Jasmine)",emoji:"🍚",category:"Grains",origin_country:"Thailand",origin_city:"Chiang Rai",production_lat:19.9,production_lng:99.8,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local rice"},
  {ingredient:"Wheat",emoji:"🌾",category:"Grains",origin_country:"India",origin_city:"Haryana",production_lat:29.0,production_lng:76.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local wheat"},
  {ingredient:"Quinoa",emoji:"🌾",category:"Grains",origin_country:"Peru",origin_city:"Puno",production_lat:-15.8,production_lng:-70.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Amaranth (Rajgira)"},
  {ingredient:"Oats",emoji:"🌾",category:"Grains",origin_country:"Australia",origin_city:"Victoria",production_lat:-36.5,production_lng:144.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Ragi or Jowar"},
  {ingredient:"Corn / Maize",emoji:"🌽",category:"Grains",origin_country:"USA",origin_city:"Iowa",production_lat:42.0,production_lng:-93.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local maize"},
  {ingredient:"Barley",emoji:"🌾",category:"Grains",origin_country:"India",origin_city:"Rajasthan",production_lat:25.0,production_lng:74.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local barley"},
  {ingredient:"Ragi / Finger Millet",emoji:"🌾",category:"Grains",origin_country:"India",origin_city:"Karnataka",production_lat:12.5,production_lng:76.5,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Pasta",emoji:"🍝",category:"Grains",origin_country:"Italy",origin_city:"Bologna",production_lat:44.5,production_lng:11.3,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local wheat noodles"},
  {ingredient:"Buckwheat",emoji:"🌾",category:"Grains",origin_country:"China",origin_city:"Inner Mongolia",production_lat:41.0,production_lng:111.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Kuttu (local buckwheat)"},
  {ingredient:"Tomato",emoji:"🍅",category:"Vegetables",origin_country:"India",origin_city:"Nashik",production_lat:19.99,production_lng:73.79,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Onion",emoji:"🧅",category:"Vegetables",origin_country:"India",origin_city:"Nashik",production_lat:19.7,production_lng:74.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Garlic",emoji:"🧄",category:"Vegetables",origin_country:"China",origin_city:"Shandong",production_lat:36.5,production_lng:117.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local Indian garlic"},
  {ingredient:"Potato",emoji:"🥔",category:"Vegetables",origin_country:"India",origin_city:"Uttar Pradesh",production_lat:26.5,production_lng:80.5,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Broccoli",emoji:"🥦",category:"Vegetables",origin_country:"India",origin_city:"Himachal Pradesh",production_lat:31.5,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Cauliflower"},
  {ingredient:"Spinach",emoji:"🥬",category:"Vegetables",origin_country:"India",origin_city:"Maharashtra",production_lat:19.5,production_lng:73.5,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local leafy greens"},
  {ingredient:"Asparagus",emoji:"🌿",category:"Vegetables",origin_country:"Peru",origin_city:"La Libertad",production_lat:-8.1,production_lng:-79.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Green beans"},
  {ingredient:"Bell Pepper",emoji:"🫑",category:"Vegetables",origin_country:"Netherlands",origin_city:"Westland",production_lat:52.0,production_lng:4.2,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local capsicum"},
  {ingredient:"Carrot",emoji:"🥕",category:"Vegetables",origin_country:"India",origin_city:"Punjab",production_lat:30.8,production_lng:75.8,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Eggplant / Brinjal",emoji:"🍆",category:"Vegetables",origin_country:"India",origin_city:"Maharashtra",production_lat:20.0,production_lng:74.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Cucumber",emoji:"🥒",category:"Vegetables",origin_country:"India",origin_city:"Andhra Pradesh",production_lat:15.5,production_lng:79.5,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Mushrooms",emoji:"🍄",category:"Vegetables",origin_country:"China",origin_city:"Fujian",production_lat:26.1,production_lng:118.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local oyster mushrooms"},
  {ingredient:"Sweet Potato",emoji:"🍠",category:"Vegetables",origin_country:"India",origin_city:"Odisha",production_lat:20.0,production_lng:84.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Okra / Ladyfinger",emoji:"🌿",category:"Vegetables",origin_country:"India",origin_city:"Gujarat",production_lat:22.5,production_lng:72.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Truffle",emoji:"🍄",category:"Vegetables",origin_country:"France",origin_city:"Périgord",production_lat:45.2,production_lng:1.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local mushrooms"},
  {ingredient:"Avocado",emoji:"🥑",category:"Fruits",origin_country:"Mexico",origin_city:"Michoacán",production_lat:19.5,production_lng:-102.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Mango or Banana"},
  {ingredient:"Banana",emoji:"🍌",category:"Fruits",origin_country:"India",origin_city:"Tamil Nadu",production_lat:10.8,production_lng:78.7,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Apple (Kashmiri)",emoji:"🍎",category:"Fruits",origin_country:"India",origin_city:"Kashmir",production_lat:34.0,production_lng:74.8,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Apple (Fuji)",emoji:"🍎",category:"Fruits",origin_country:"China",origin_city:"Shaanxi",production_lat:34.5,production_lng:108.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Kashmiri apple"},
  {ingredient:"Mango (Alphonso)",emoji:"🥭",category:"Fruits",origin_country:"India",origin_city:"Ratnagiri",production_lat:16.99,production_lng:73.3,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Pineapple",emoji:"🍍",category:"Fruits",origin_country:"Costa Rica",origin_city:"Puntarenas",production_lat:9.9,production_lng:-84.8,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local pineapple (Kerala)"},
  {ingredient:"Strawberry",emoji:"🍓",category:"Fruits",origin_country:"India",origin_city:"Mahabaleshwar",production_lat:17.9,production_lng:73.6,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Mahabaleshwar)"},
  {ingredient:"Blueberry",emoji:"🫐",category:"Fruits",origin_country:"USA",origin_city:"Oregon",production_lat:44.0,production_lng:-123.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Jamun (Indian berry)"},
  {ingredient:"Grape",emoji:"🍇",category:"Fruits",origin_country:"India",origin_city:"Nashik",production_lat:20.0,production_lng:73.8,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Watermelon",emoji:"🍉",category:"Fruits",origin_country:"India",origin_city:"Andhra Pradesh",production_lat:16.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Kiwi",emoji:"🥝",category:"Fruits",origin_country:"New Zealand",origin_city:"Bay of Plenty",production_lat:-37.7,production_lng:176.1,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Amla (Indian gooseberry)"},
  {ingredient:"Orange",emoji:"🍊",category:"Fruits",origin_country:"India",origin_city:"Nagpur",production_lat:21.1,production_lng:79.1,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local citrus"},
  {ingredient:"Pomegranate",emoji:"🍎",category:"Fruits",origin_country:"India",origin_city:"Maharashtra",production_lat:18.5,production_lng:75.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Dragon Fruit",emoji:"🐉",category:"Fruits",origin_country:"Vietnam",origin_city:"Bình Thuận",production_lat:11.1,production_lng:108.1,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Guava"},
  {ingredient:"Coconut",emoji:"🥥",category:"Fruits",origin_country:"India",origin_city:"Kerala",production_lat:10.0,production_lng:76.3,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Lychee",emoji:"🍒",category:"Fruits",origin_country:"China",origin_city:"Guangdong",production_lat:23.1,production_lng:113.2,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local guava"},
  {ingredient:"Dates (Medjool)",emoji:"🌴",category:"Fruits",origin_country:"Morocco",origin_city:"Draa Valley",production_lat:30.2,production_lng:-6.9,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Khajoor (Indian dates)"},
  {ingredient:"Cherries",emoji:"🍒",category:"Fruits",origin_country:"USA",origin_city:"Washington State",production_lat:47.3,production_lng:-120.5,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Ber (Indian jujube)"},
  {ingredient:"Chicken",emoji:"🍗",category:"Protein",origin_country:"India",origin_city:"Andhra Pradesh",production_lat:15.9,production_lng:79.7,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local poultry"},
  {ingredient:"Beef",emoji:"🥩",category:"Protein",origin_country:"Australia",origin_city:"Queensland",production_lat:-23.4,production_lng:144.7,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local buffalo meat"},
  {ingredient:"Lamb",emoji:"🍖",category:"Protein",origin_country:"New Zealand",origin_city:"Canterbury",production_lat:-43.5,production_lng:171.9,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local goat meat"},
  {ingredient:"Salmon",emoji:"🐟",category:"Protein",origin_country:"Norway",origin_city:"Bergen",production_lat:60.4,production_lng:5.3,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Rohu or Catla fish"},
  {ingredient:"Tuna",emoji:"🐟",category:"Protein",origin_country:"Japan",origin_city:"Tokyo",production_lat:35.7,production_lng:139.7,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local ocean fish"},
  {ingredient:"Shrimp / Prawn",emoji:"🦐",category:"Protein",origin_country:"India",origin_city:"Gujarat",production_lat:21.7,production_lng:72.1,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Eggs",emoji:"🥚",category:"Protein",origin_country:"India",origin_city:"Maharashtra",production_lat:19.5,production_lng:73.5,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local farm eggs"},
  {ingredient:"Tofu",emoji:"🫘",category:"Protein",origin_country:"China",origin_city:"Shanghai",production_lat:31.2,production_lng:121.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Paneer"},
  {ingredient:"Paneer",emoji:"🧀",category:"Protein",origin_country:"India",origin_city:"Punjab",production_lat:30.9,production_lng:75.9,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Lentils (Dal)",emoji:"🫘",category:"Protein",origin_country:"India",origin_city:"Madhya Pradesh",production_lat:23.5,production_lng:77.5,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Chickpeas",emoji:"🫘",category:"Protein",origin_country:"India",origin_city:"Rajasthan",production_lat:26.0,production_lng:74.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Milk",emoji:"🥛",category:"Dairy",origin_country:"India",origin_city:"Gujarat",production_lat:22.3,production_lng:72.6,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dairy"},
  {ingredient:"Butter",emoji:"🧈",category:"Dairy",origin_country:"Ireland",origin_city:"Cork",production_lat:51.9,production_lng:-8.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Desi ghee"},
  {ingredient:"Cheese (Cheddar)",emoji:"🧀",category:"Dairy",origin_country:"UK",origin_city:"Somerset",production_lat:51.2,production_lng:-2.8,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Paneer"},
  {ingredient:"Cheese (Parmesan)",emoji:"🧀",category:"Dairy",origin_country:"Italy",origin_city:"Parma",production_lat:44.8,production_lng:10.3,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local aged paneer"},
  {ingredient:"Ghee",emoji:"🧈",category:"Dairy",origin_country:"India",origin_city:"Rajasthan",production_lat:26.9,production_lng:75.8,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Coconut Milk",emoji:"🥛",category:"Dairy",origin_country:"India",origin_city:"Kerala",production_lat:10.0,production_lng:76.3,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Oat Milk",emoji:"🥛",category:"Dairy",origin_country:"Sweden",origin_city:"Malmö",production_lat:55.6,production_lng:13.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Coconut milk"},
  {ingredient:"Olive Oil",emoji:"🫒",category:"Oils",origin_country:"Spain",origin_city:"Andalusia",production_lat:37.4,production_lng:-4.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Sesame or Groundnut oil"},
  {ingredient:"Coconut Oil",emoji:"🥥",category:"Oils",origin_country:"Philippines",origin_city:"Quezon",production_lat:14.0,production_lng:121.9,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local coconut oil"},
  {ingredient:"Sesame Oil",emoji:"🌾",category:"Oils",origin_country:"India",origin_city:"Rajasthan",production_lat:26.0,production_lng:73.5,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Sunflower Oil",emoji:"🌻",category:"Oils",origin_country:"Ukraine",origin_city:"Dnipro",production_lat:48.5,production_lng:35.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Groundnut oil"},
  {ingredient:"Almonds",emoji:"🫘",category:"Nuts & Seeds",origin_country:"USA",origin_city:"California",production_lat:36.7,production_lng:-119.7,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Groundnuts (peanuts)"},
  {ingredient:"Cashews",emoji:"🫘",category:"Nuts & Seeds",origin_country:"India",origin_city:"Goa",production_lat:15.5,production_lng:73.9,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Walnuts",emoji:"🫘",category:"Nuts & Seeds",origin_country:"India",origin_city:"Kashmir",production_lat:34.1,production_lng:74.8,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Pistachios",emoji:"🫘",category:"Nuts & Seeds",origin_country:"Iran",origin_city:"Rafsanjan",production_lat:30.4,production_lng:56.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local peanuts"},
  {ingredient:"Peanuts",emoji:"🥜",category:"Nuts & Seeds",origin_country:"India",origin_city:"Gujarat",production_lat:22.0,production_lng:71.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Chia Seeds",emoji:"🌱",category:"Nuts & Seeds",origin_country:"Mexico",origin_city:"Jalisco",production_lat:20.6,production_lng:-105.2,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Sabja (Basil seeds)"},
  {ingredient:"Flaxseeds",emoji:"🌱",category:"Nuts & Seeds",origin_country:"Canada",origin_city:"Saskatchewan",production_lat:52.0,production_lng:-106.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Alsi (local flaxseeds)"},
  {ingredient:"Black Pepper",emoji:"🌶️",category:"Spices",origin_country:"India",origin_city:"Wayanad, Kerala",production_lat:11.6,production_lng:76.1,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local spices"},
  {ingredient:"Turmeric",emoji:"🟡",category:"Spices",origin_country:"India",origin_city:"Erode, Tamil Nadu",production_lat:11.3,production_lng:77.7,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Cardamom",emoji:"🌿",category:"Spices",origin_country:"India",origin_city:"Idukki, Kerala",production_lat:9.9,production_lng:77.1,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Cinnamon",emoji:"🍂",category:"Spices",origin_country:"Sri Lanka",origin_city:"Galle",production_lat:6.0,production_lng:80.2,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Cassia cinnamon"},
  {ingredient:"Saffron",emoji:"🌸",category:"Spices",origin_country:"Iran",origin_city:"Khorasan",production_lat:36.5,production_lng:60.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Kashmiri saffron"},
  {ingredient:"Cumin",emoji:"🌿",category:"Spices",origin_country:"India",origin_city:"Rajasthan",production_lat:26.5,production_lng:72.5,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Chilli (Red)",emoji:"🌶️",category:"Spices",origin_country:"India",origin_city:"Andhra Pradesh",production_lat:16.5,production_lng:80.6,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Vanilla",emoji:"🌿",category:"Spices",origin_country:"Madagascar",origin_city:"SAVA Region",production_lat:-14.3,production_lng:49.3,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Indian vanilla (Kerala)"},
  {ingredient:"Cloves",emoji:"🌸",category:"Spices",origin_country:"Indonesia",origin_city:"Maluku",production_lat:-3.7,production_lng:128.2,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local spice"},
  {ingredient:"Ginger",emoji:"🫚",category:"Spices",origin_country:"India",origin_city:"Kerala",production_lat:10.8,production_lng:76.3,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Coffee (Arabica)",emoji:"☕",category:"Beverages",origin_country:"Ethiopia",origin_city:"Yirgacheffe",production_lat:6.1,production_lng:38.2,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Indian Filter Coffee (Coorg)"},
  {ingredient:"Coffee (Indian)",emoji:"☕",category:"Beverages",origin_country:"India",origin_city:"Coorg, Karnataka",production_lat:12.4,production_lng:75.7,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Tea (Darjeeling)",emoji:"🍵",category:"Beverages",origin_country:"India",origin_city:"Darjeeling",production_lat:27.0,production_lng:88.3,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Tea (Matcha)",emoji:"🍵",category:"Beverages",origin_country:"Japan",origin_city:"Uji, Kyoto",production_lat:34.9,production_lng:135.8,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Indian green tea"},
  {ingredient:"Cacao / Cocoa",emoji:"🍫",category:"Beverages",origin_country:"Ivory Coast",origin_city:"Abidjan",production_lat:5.3,production_lng:-4.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Carob or local cacao"},
  {ingredient:"Sugar (White)",emoji:"🍬",category:"Sweeteners",origin_country:"India",origin_city:"Uttar Pradesh",production_lat:27.0,production_lng:80.9,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Jaggery or honey"},
  {ingredient:"Jaggery",emoji:"🍯",category:"Sweeteners",origin_country:"India",origin_city:"Maharashtra",production_lat:18.5,production_lng:74.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Honey",emoji:"🍯",category:"Sweeteners",origin_country:"India",origin_city:"Sundarbans, WB",production_lat:21.9,production_lng:89.2,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Maple Syrup",emoji:"🍁",category:"Sweeteners",origin_country:"Canada",origin_city:"Quebec",production_lat:46.8,production_lng:-71.2,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Jaggery (Gur)"},
  {ingredient:"Açaí",emoji:"🍇",category:"Superfoods",origin_country:"Brazil",origin_city:"Pará",production_lat:-1.5,production_lng:-48.5,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Jamun or Amla"},
  {ingredient:"Spirulina",emoji:"🌊",category:"Superfoods",origin_country:"USA",origin_city:"Hawaii",production_lat:19.9,production_lng:-155.6,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Moringa"},
  {ingredient:"Moringa",emoji:"🌿",category:"Superfoods",origin_country:"India",origin_city:"Tamil Nadu",production_lat:11.1,production_lng:78.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Goji Berries",emoji:"🍒",category:"Superfoods",origin_country:"China",origin_city:"Ningxia",production_lat:37.3,production_lng:106.3,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Amla or Karonda"},
  {ingredient:"Cranberry",emoji:"🍒",category:"Superfoods",origin_country:"USA",origin_city:"Massachusetts",production_lat:41.8,production_lng:-70.5,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Karonda (local berry)"},
  {ingredient:"Soy Sauce",emoji:"🍶",category:"Condiments",origin_country:"China",origin_city:"Guangdong",production_lat:23.1,production_lng:113.3,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local fermented sauces"},
  {ingredient:"Miso Paste",emoji:"🫙",category:"Condiments",origin_country:"Japan",origin_city:"Nagano",production_lat:36.6,production_lng:138.2,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local fermented foods"},
  {ingredient:"Tahini",emoji:"🫙",category:"Condiments",origin_country:"Ethiopia",origin_city:"Tigray",production_lat:14.0,production_lng:38.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Sesame paste"},
  {ingredient:"Mustard",emoji:"🌿",category:"Condiments",origin_country:"India",origin_city:"Rajasthan",production_lat:26.9,production_lng:75.8,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Vinegar (Balsamic)",emoji:"🫙",category:"Condiments",origin_country:"Italy",origin_city:"Modena",production_lat:44.6,production_lng:10.9,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local vinegar"},
];

// ── CITIES DATA ──
const CITIES = [
  {name:"Mumbai",country:"India",flag:"🇮🇳",lat:19.076,lng:72.877},{name:"New Delhi",country:"India",flag:"🇮🇳",lat:28.644,lng:77.216},{name:"Bengaluru",country:"India",flag:"🇮🇳",lat:12.972,lng:77.595},{name:"Chennai",country:"India",flag:"🇮🇳",lat:13.083,lng:80.270},{name:"Kolkata",country:"India",flag:"🇮🇳",lat:22.572,lng:88.363},{name:"Hyderabad",country:"India",flag:"🇮🇳",lat:17.385,lng:78.487},{name:"Ahmedabad",country:"India",flag:"🇮🇳",lat:23.022,lng:72.571},{name:"Pune",country:"India",flag:"🇮🇳",lat:18.520,lng:73.856},{name:"Jaipur",country:"India",flag:"🇮🇳",lat:26.912,lng:75.787},{name:"Surat",country:"India",flag:"🇮🇳",lat:21.170,lng:72.831},{name:"Lucknow",country:"India",flag:"🇮🇳",lat:26.847,lng:80.947},{name:"Nagpur",country:"India",flag:"🇮🇳",lat:21.145,lng:79.088},{name:"Indore",country:"India",flag:"🇮🇳",lat:22.719,lng:75.857},{name:"Bhopal",country:"India",flag:"🇮🇳",lat:23.259,lng:77.413},{name:"Visakhapatnam",country:"India",flag:"🇮🇳",lat:17.686,lng:83.218},{name:"Patna",country:"India",flag:"🇮🇳",lat:25.594,lng:85.137},{name:"Vadodara",country:"India",flag:"🇮🇳",lat:22.307,lng:73.182},{name:"Ludhiana",country:"India",flag:"🇮🇳",lat:30.901,lng:75.857},{name:"Agra",country:"India",flag:"🇮🇳",lat:27.176,lng:78.008},{name:"Nashik",country:"India",flag:"🇮🇳",lat:19.998,lng:73.790},{name:"Varanasi",country:"India",flag:"🇮🇳",lat:25.317,lng:82.974},{name:"Srinagar",country:"India",flag:"🇮🇳",lat:34.083,lng:74.797},{name:"Amritsar",country:"India",flag:"🇮🇳",lat:31.634,lng:74.872},{name:"Coimbatore",country:"India",flag:"🇮🇳",lat:11.001,lng:76.967},{name:"Kochi",country:"India",flag:"🇮🇳",lat:9.939,lng:76.270},{name:"Chandigarh",country:"India",flag:"🇮🇳",lat:30.733,lng:76.779},{name:"Thiruvananthapuram",country:"India",flag:"🇮🇳",lat:8.524,lng:76.936},{name:"Guwahati",country:"India",flag:"🇮🇳",lat:26.144,lng:91.736},{name:"Ranchi",country:"India",flag:"🇮🇳",lat:23.344,lng:85.309},{name:"Rajkot",country:"India",flag:"🇮🇳",lat:22.303,lng:70.802},
  {name:"Karachi",country:"Pakistan",flag:"🇵🇰",lat:24.860,lng:67.010},{name:"Lahore",country:"Pakistan",flag:"🇵🇰",lat:31.558,lng:74.358},{name:"Islamabad",country:"Pakistan",flag:"🇵🇰",lat:33.729,lng:73.093},{name:"Dhaka",country:"Bangladesh",flag:"🇧🇩",lat:23.810,lng:90.412},{name:"Colombo",country:"Sri Lanka",flag:"🇱🇰",lat:6.927,lng:79.862},{name:"Kathmandu",country:"Nepal",flag:"🇳🇵",lat:27.700,lng:85.318},
  {name:"Singapore",country:"Singapore",flag:"🇸🇬",lat:1.352,lng:103.819},{name:"Bangkok",country:"Thailand",flag:"🇹🇭",lat:13.756,lng:100.502},{name:"Kuala Lumpur",country:"Malaysia",flag:"🇲🇾",lat:3.140,lng:101.686},{name:"Jakarta",country:"Indonesia",flag:"🇮🇩",lat:-6.208,lng:106.845},{name:"Manila",country:"Philippines",flag:"🇵🇭",lat:14.599,lng:120.984},{name:"Ho Chi Minh City",country:"Vietnam",flag:"🇻🇳",lat:10.823,lng:106.629},{name:"Hanoi",country:"Vietnam",flag:"🇻🇳",lat:21.028,lng:105.854},{name:"Yangon",country:"Myanmar",flag:"🇲🇲",lat:16.871,lng:96.195},{name:"Phnom Penh",country:"Cambodia",flag:"🇰🇭",lat:11.569,lng:104.921},
  {name:"Tokyo",country:"Japan",flag:"🇯🇵",lat:35.676,lng:139.650},{name:"Osaka",country:"Japan",flag:"🇯🇵",lat:34.693,lng:135.502},{name:"Kyoto",country:"Japan",flag:"🇯🇵",lat:35.012,lng:135.768},{name:"Beijing",country:"China",flag:"🇨🇳",lat:39.905,lng:116.391},{name:"Shanghai",country:"China",flag:"🇨🇳",lat:31.230,lng:121.473},{name:"Guangzhou",country:"China",flag:"🇨🇳",lat:23.130,lng:113.264},{name:"Shenzhen",country:"China",flag:"🇨🇳",lat:22.543,lng:114.058},{name:"Seoul",country:"South Korea",flag:"🇰🇷",lat:37.566,lng:126.978},{name:"Busan",country:"South Korea",flag:"🇰🇷",lat:35.180,lng:129.075},{name:"Taipei",country:"Taiwan",flag:"🇹🇼",lat:25.033,lng:121.565},
  {name:"Dubai",country:"UAE",flag:"🇦🇪",lat:25.204,lng:55.270},{name:"Abu Dhabi",country:"UAE",flag:"🇦🇪",lat:24.453,lng:54.377},{name:"Riyadh",country:"Saudi Arabia",flag:"🇸🇦",lat:24.687,lng:46.722},{name:"Doha",country:"Qatar",flag:"🇶🇦",lat:25.286,lng:51.533},{name:"Kuwait City",country:"Kuwait",flag:"🇰🇼",lat:29.375,lng:47.977},{name:"Muscat",country:"Oman",flag:"🇴🇲",lat:23.614,lng:58.593},{name:"Tehran",country:"Iran",flag:"🇮🇷",lat:35.694,lng:51.421},{name:"Istanbul",country:"Turkey",flag:"🇹🇷",lat:41.015,lng:28.979},{name:"Tel Aviv",country:"Israel",flag:"🇮🇱",lat:32.085,lng:34.781},{name:"Amman",country:"Jordan",flag:"🇯🇴",lat:31.956,lng:35.945},{name:"Beirut",country:"Lebanon",flag:"🇱🇧",lat:33.888,lng:35.495},
  {name:"London",country:"UK",flag:"🇬🇧",lat:51.507,lng:-0.127},{name:"Manchester",country:"UK",flag:"🇬🇧",lat:53.480,lng:-2.243},{name:"Edinburgh",country:"UK",flag:"🇬🇧",lat:55.953,lng:-3.188},{name:"Paris",country:"France",flag:"🇫🇷",lat:48.856,lng:2.352},{name:"Lyon",country:"France",flag:"🇫🇷",lat:45.764,lng:4.836},{name:"Berlin",country:"Germany",flag:"🇩🇪",lat:52.520,lng:13.405},{name:"Munich",country:"Germany",flag:"🇩🇪",lat:48.137,lng:11.576},{name:"Hamburg",country:"Germany",flag:"🇩🇪",lat:53.551,lng:9.994},{name:"Amsterdam",country:"Netherlands",flag:"🇳🇱",lat:52.370,lng:4.895},{name:"Madrid",country:"Spain",flag:"🇪🇸",lat:40.416,lng:-3.703},{name:"Barcelona",country:"Spain",flag:"🇪🇸",lat:41.387,lng:2.170},{name:"Rome",country:"Italy",flag:"🇮🇹",lat:41.902,lng:12.496},{name:"Milan",country:"Italy",flag:"🇮🇹",lat:45.465,lng:9.186},{name:"Vienna",country:"Austria",flag:"🇦🇹",lat:48.208,lng:16.373},{name:"Zurich",country:"Switzerland",flag:"🇨🇭",lat:47.378,lng:8.540},{name:"Brussels",country:"Belgium",flag:"🇧🇪",lat:50.846,lng:4.352},{name:"Stockholm",country:"Sweden",flag:"🇸🇪",lat:59.333,lng:18.067},{name:"Oslo",country:"Norway",flag:"🇳🇴",lat:59.913,lng:10.752},{name:"Copenhagen",country:"Denmark",flag:"🇩🇰",lat:55.676,lng:12.568},{name:"Helsinki",country:"Finland",flag:"🇫🇮",lat:60.169,lng:24.938},{name:"Warsaw",country:"Poland",flag:"🇵🇱",lat:52.229,lng:21.012},{name:"Prague",country:"Czech Republic",flag:"🇨🇿",lat:50.076,lng:14.437},{name:"Budapest",country:"Hungary",flag:"🇭🇺",lat:47.497,lng:19.040},{name:"Athens",country:"Greece",flag:"🇬🇷",lat:37.984,lng:23.728},{name:"Lisbon",country:"Portugal",flag:"🇵🇹",lat:38.722,lng:-9.139},{name:"Dublin",country:"Ireland",flag:"🇮🇪",lat:53.333,lng:-6.249},{name:"Moscow",country:"Russia",flag:"🇷🇺",lat:55.751,lng:37.617},{name:"Kyiv",country:"Ukraine",flag:"🇺🇦",lat:50.450,lng:30.523},{name:"Belgrade",country:"Serbia",flag:"🇷🇸",lat:44.787,lng:20.457},{name:"Reykjavik",country:"Iceland",flag:"🇮🇸",lat:64.126,lng:-21.817},
  {name:"New York",country:"USA",flag:"🇺🇸",lat:40.712,lng:-74.006},{name:"Los Angeles",country:"USA",flag:"🇺🇸",lat:34.052,lng:-118.243},{name:"Chicago",country:"USA",flag:"🇺🇸",lat:41.878,lng:-87.630},{name:"Houston",country:"USA",flag:"🇺🇸",lat:29.760,lng:-95.370},{name:"San Francisco",country:"USA",flag:"🇺🇸",lat:37.774,lng:-122.419},{name:"Seattle",country:"USA",flag:"🇺🇸",lat:47.606,lng:-122.332},{name:"Miami",country:"USA",flag:"🇺🇸",lat:25.761,lng:-80.191},{name:"Boston",country:"USA",flag:"🇺🇸",lat:42.360,lng:-71.059},{name:"Atlanta",country:"USA",flag:"🇺🇸",lat:33.749,lng:-84.388},{name:"Dallas",country:"USA",flag:"🇺🇸",lat:32.776,lng:-96.797},{name:"Washington DC",country:"USA",flag:"🇺🇸",lat:38.907,lng:-77.037},{name:"Toronto",country:"Canada",flag:"🇨🇦",lat:43.651,lng:-79.347},{name:"Vancouver",country:"Canada",flag:"🇨🇦",lat:49.246,lng:-123.116},{name:"Montreal",country:"Canada",flag:"🇨🇦",lat:45.508,lng:-73.554},{name:"Mexico City",country:"Mexico",flag:"🇲🇽",lat:19.432,lng:-99.133},{name:"Havana",country:"Cuba",flag:"🇨🇺",lat:23.136,lng:-82.359},
  {name:"São Paulo",country:"Brazil",flag:"🇧🇷",lat:-23.550,lng:-46.633},{name:"Rio de Janeiro",country:"Brazil",flag:"🇧🇷",lat:-22.906,lng:-43.172},{name:"Buenos Aires",country:"Argentina",flag:"🇦🇷",lat:-34.615,lng:-58.373},{name:"Santiago",country:"Chile",flag:"🇨🇱",lat:-33.459,lng:-70.648},{name:"Lima",country:"Peru",flag:"🇵🇪",lat:-12.046,lng:-77.042},{name:"Bogotá",country:"Colombia",flag:"🇨🇴",lat:4.711,lng:-74.073},
  {name:"Cairo",country:"Egypt",flag:"🇪🇬",lat:30.044,lng:31.235},{name:"Lagos",country:"Nigeria",flag:"🇳🇬",lat:6.524,lng:3.379},{name:"Nairobi",country:"Kenya",flag:"🇰🇪",lat:-1.292,lng:36.821},{name:"Cape Town",country:"South Africa",flag:"🇿🇦",lat:-33.924,lng:18.424},{name:"Johannesburg",country:"South Africa",flag:"🇿🇦",lat:-26.204,lng:28.047},{name:"Casablanca",country:"Morocco",flag:"🇲🇦",lat:33.573,lng:-7.589},{name:"Accra",country:"Ghana",flag:"🇬🇭",lat:5.604,lng:-0.186},{name:"Addis Ababa",country:"Ethiopia",flag:"🇪🇹",lat:9.024,lng:38.747},{name:"Dar es Salaam",country:"Tanzania",flag:"🇹🇿",lat:-6.792,lng:39.209},
  {name:"Sydney",country:"Australia",flag:"🇦🇺",lat:-33.868,lng:151.209},{name:"Melbourne",country:"Australia",flag:"🇦🇺",lat:-37.813,lng:144.963},{name:"Brisbane",country:"Australia",flag:"🇦🇺",lat:-27.468,lng:153.024},{name:"Perth",country:"Australia",flag:"🇦🇺",lat:-31.952,lng:115.861},{name:"Auckland",country:"New Zealand",flag:"🇳🇿",lat:-36.867,lng:174.762},{name:"Wellington",country:"New Zealand",flag:"🇳🇿",lat:-41.286,lng:174.776},
];

// ── CONSTANTS ──
const TC={Air:"#ff00aa",Sea:"#00f5ff",Road:"#00ff88",Rail:"#bf00ff"};
const TP={Air:"tp-air",Sea:"tp-sea",Road:"tp-road",Rail:"tp-rail"};
const TE={Air:"✈️",Sea:"🚢",Road:"🚛",Rail:"🚆"};
const CATS=[...new Set(FOOD_DATA.map(f=>f.category))];
const FLAG_MAP={'Ivory Coast':'🇨🇮','Ethiopia':'🇪🇹','Madagascar':'🇲🇬','Norway':'🇳🇴','New Zealand':'🇳🇿','Australia':'🇦🇺','Italy':'🇮🇹','Spain':'🇪🇸','France':'🇫🇷','Denmark':'🇩🇰','Ireland':'🇮🇪','UK':'🇬🇧','Netherlands':'🇳🇱','Sweden':'🇸🇪','Ukraine':'🇺🇦','Iran':'🇮🇷','Morocco':'🇲🇦','Turkey':'🇹🇷','Hungary':'🇭🇺','Russia':'🇷🇺','Philippines':'🇵🇭','Indonesia':'🇮🇩','Vietnam':'🇻🇳','Thailand':'🇹🇭','Costa Rica':'🇨🇷','Peru':'🇵🇪','Mexico':'🇲🇽','Canada':'🇨🇦','USA':'🇺🇸','Brazil':'🇧🇷','Sri Lanka':'🇱🇰','China':'🇨🇳','Japan':'🇯🇵'};

// ── STATE ──
let destination={name:"Mumbai, India",lat:19.076,lng:72.877};
let ingredients=[];let idCounter=0;let map,routeLayers=[];
let aiOpen=false;let chatHistory=[];

// ── MATH ──
function haversine(lat1,lng1,lat2,lng2){
  const R=6371,dLat=(lat2-lat1)*Math.PI/180,dLng=(lng2-lng1)*Math.PI/180;
  const a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}
function calcCO2(dist,kg,transport,factors){return dist*(kg/1000)*(factors[transport]||0.096)}
function greatCircle(lat1,lng1,lat2,lng2,n){
  const r=d=>d*Math.PI/180,g=r=>r*180/Math.PI;
  const f1=r(lat1),l1=r(lng1),f2=r(lat2),l2=r(lng2);
  const d=2*Math.asin(Math.sqrt(Math.sin((f2-f1)/2)**2+Math.cos(f1)*Math.cos(f2)*Math.sin((l2-l1)/2)**2));
  if(d<0.001)return[[lat1,lng1],[lat2,lng2]];
  const pts=[];
  for(let i=0;i<=n;i++){const f=i/n,A=Math.sin((1-f)*d)/Math.sin(d),B=Math.sin(f*d)/Math.sin(d);
    const x=A*Math.cos(f1)*Math.cos(l1)+B*Math.cos(f2)*Math.cos(l2);
    const y=A*Math.cos(f1)*Math.sin(l1)+B*Math.cos(f2)*Math.sin(l2);
    const z=A*Math.sin(f1)+B*Math.sin(f2);
    pts.push([g(Math.atan2(z,Math.sqrt(x*x+y*y))),g(Math.atan2(y,x))]);}
  return pts;
}
function getFlag(c){return CITIES.find(x=>x.country===c)?.flag||FLAG_MAP[c]||'🌍'}

// ── MAP ──
function initMap(){
  map=L.map('map',{center:[20,20],zoom:2,minZoom:1,maxZoom:10,scrollWheelZoom:true});
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{attribution:'&copy; CARTO',subdomains:'abcd',maxZoom:19}).addTo(map);
}

function updateMap(){
  routeLayers.forEach(l=>map.removeLayer(l));routeLayers=[];
  const dLL=[destination.lat,destination.lng];
  const di=L.divIcon({className:'',html:`<div style="width:16px;height:16px;background:#ff00aa;border:2px solid #fff;border-radius:50%;box-shadow:0 0 12px rgba(255,0,170,0.8)"></div>`,iconSize:[16,16],iconAnchor:[8,8]});
  const dm=L.marker(dLL,{icon:di}).addTo(map);
  dm.bindPopup(`<div class="popup-title">📍 ${destination.name}</div><div class="popup-detail">Your destination</div>`);
  routeLayers.push(dm);
  ingredients.forEach(ing=>{
    const food=FOOD_DATA[ing.foodIdx];
    const sLL=[food.production_lat,food.production_lng];
    const dist=Math.round(haversine(food.production_lat,food.production_lng,destination.lat,destination.lng));
    const co2=calcCO2(dist,ing.weightKg,ing.transport,food.carbon_factor);
    const color=TC[ing.transport]||'#888';
    const si=L.divIcon({className:'',html:`<div style="width:10px;height:10px;background:${color};border:1px solid rgba(255,255,255,0.6);border-radius:50%;box-shadow:0 0 8px ${color}"></div>`,iconSize:[10,10],iconAnchor:[5,5]});
    const sm=L.marker(sLL,{icon:si}).addTo(map);
    sm.bindPopup(`<div class="popup-title">${food.emoji||TE[ing.transport]} ${food.ingredient}</div><div class="popup-detail">Origin: ${food.origin_city?food.origin_city+', ':''}${food.origin_country}</div><div class="popup-detail">${ing.transport} · ${dist.toLocaleString()} km</div><div class="popup-co2">${co2.toFixed(3)} kg CO₂</div>`);
    routeLayers.push(sm);
    const arc=greatCircle(food.production_lat,food.production_lng,destination.lat,destination.lng,80);
    const poly=L.polyline(arc,{color,weight:ing.transport==='Air'?1.5:2,opacity:.7,dashArray:ing.transport==='Air'?'6,5':ing.transport==='Rail'?'3,3':null}).addTo(map);
    routeLayers.push(poly);
  });
  if(ingredients.length>0){
    const pts=ingredients.map(i=>[FOOD_DATA[i.foodIdx].production_lat,FOOD_DATA[i.foodIdx].production_lng]);
    pts.push([destination.lat,destination.lng]);
    map.fitBounds(L.latLngBounds(pts),{padding:[40,40],maxZoom:5});
  }else map.setView([20,20],2);
}

// ── CITY SEARCH ──
const cityInput=document.getElementById('cityInput');
const cityDD=document.getElementById('cityDropdown');
cityInput.addEventListener('input',function(){
  const q=this.value.trim().toLowerCase();
  if(q.length<1){cityDD.classList.remove('open');return}
  const res=CITIES.filter(c=>c.name.toLowerCase().includes(q)||c.country.toLowerCase().includes(q)).slice(0,10);
  if(!res.length){cityDD.classList.remove('open');return}
  cityDD.innerHTML=res.map(c=>`<div class="search-result" onclick="selectCity(${c.lat},${c.lng},'${c.name}, ${c.country}')"><span class="sr-flag">${c.flag}</span><div><div>${c.name}</div><div class="sr-detail">${c.country} · ${c.lat.toFixed(2)}°, ${c.lng.toFixed(2)}°</div></div></div>`).join('');
  cityDD.classList.add('open');
});
document.addEventListener('click',e=>{if(!e.target.closest('.search-wrap'))cityDD.classList.remove('open')});

function selectCity(lat,lng,name){
  destination={name,lat,lng};
  document.getElementById('destName').textContent=name;
  document.getElementById('destCoords').textContent=`${Math.abs(lat).toFixed(3)}°${lat>=0?'N':'S'}, ${Math.abs(lng).toFixed(3)}°${lng>=0?'E':'W'}`;
  cityInput.value='';cityDD.classList.remove('open');
  renderIngredients();recalcAll();
}

// ── INGREDIENTS ──
function addIngredient(){ingredients.push({id:idCounter++,foodIdx:0,weightKg:1,transport:FOOD_DATA[0].default_transport});renderIngredients();recalcAll()}
function removeIngredient(id){ingredients=ingredients.filter(i=>i.id!==id);renderIngredients();recalcAll()}
function updateFood(id,idx){const i=ingredients.find(x=>x.id===id);if(i){i.foodIdx=parseInt(idx);i.transport=FOOD_DATA[i.foodIdx].default_transport;}renderIngredients();recalcAll()}
function updateWeight(id,val){const i=ingredients.find(x=>x.id===id);if(i)i.weightKg=Math.max(0.01,parseFloat(val)||1);}
function updateTransport(id,val){const i=ingredients.find(x=>x.id===id);if(i)i.transport=val;renderIngredients();}

function renderIngredients(){
  const list=document.getElementById('ingList');
  document.getElementById('ingCount').textContent=`${ingredients.length} item${ingredients.length!==1?'s':''}`;
  if(ingredients.length===0){list.innerHTML=`<div class="empty-state"><span class="empty-icon">🥦</span><div class="empty-title">No ingredients yet</div><div class="empty-text">Click "Add ingredient" to start tracking your meal's carbon footprint.</div></div>`;return}
  list.innerHTML=ingredients.map(ing=>{
    const food=FOOD_DATA[ing.foodIdx];
    const dist=Math.round(haversine(food.production_lat,food.production_lng,destination.lat,destination.lng));
    const co2=calcCO2(dist,ing.weightKg,ing.transport,food.carbon_factor);
    const opts=CATS.map(cat=>{const items=FOOD_DATA.map((f,i)=>({f,i})).filter(({f})=>f.category===cat);return`<optgroup label="── ${cat} ──">${items.map(({f,i})=>`<option value="${i}"${i===ing.foodIdx?' selected':''}>${f.emoji||''} ${f.ingredient}</option>`).join('')}</optgroup>`}).join('');
    return`<div class="ing-item">
      <div class="ing-top"><span class="ing-emoji">${food.emoji||'🌿'}</span><select class="ing-select" onchange="updateFood(${ing.id},this.value)">${opts}</select><button class="ing-del" onclick="removeIngredient(${ing.id})">×</button></div>
      <div class="origin-badge"><span class="origin-flag">${getFlag(food.origin_country)}</span><span class="origin-txt">${food.origin_city?food.origin_city+', ':''}${food.origin_country}</span></div>
      <div class="ing-fields">
        <div><div class="field-lbl">Weight (kg)</div><input class="field-input" type="number" min="0.01" step="0.1" value="${ing.weightKg}" onchange="updateWeight(${ing.id},this.value)"></div>
        <div><div class="field-lbl">Transport</div><select class="field-select" onchange="updateTransport(${ing.id},this.value)">${['Road','Rail','Sea','Air'].map(t=>`<option value="${t}"${t===ing.transport?' selected':''}>${TE[t]} ${t}</option>`).join('')}</select></div>
      </div>
      <div class="ing-result-row">
        <span class="tp-pill ${TP[ing.transport]}">${ing.transport}</span>
        <div class="ing-metrics">
          <div class="ing-metric"><div class="ing-metric-val">${dist.toLocaleString()} km</div><div class="ing-metric-lbl">distance</div></div>
          <div class="ing-metric"><div class="ing-metric-val" style="color:${co2>1?'var(--pink)':'var(--green)'}">${co2.toFixed(3)}</div><div class="ing-metric-lbl">kg CO₂</div></div>
        </div>
      </div></div>`;
  }).join('');
}

// ── CALCULATE BUTTON HANDLER ──
function handleCalculate(){
  if(ingredients.length===0){
    alert('Please add at least one ingredient before calculating.');
    return;
  }
  const btn=document.getElementById('calcBtn');
  const btnText=document.getElementById('calcBtnText');
  btn.classList.add('calculating');
  btnText.textContent='Calculating...';

  // Re-read current weight values from inputs (live DOM values)
  document.querySelectorAll('.ing-item').forEach((item,i)=>{
    if(ingredients[i]){
      const weightInput=item.querySelector('.field-input');
      if(weightInput)ingredients[i].weightKg=Math.max(0.01,parseFloat(weightInput.value)||1);
    }
  });

  setTimeout(()=>{
    recalcAll();
    btn.classList.remove('calculating');
    btnText.textContent='Calculate Carbon Emissions';

    // Scroll to results
    document.querySelector('.right-col').scrollIntoView({behavior:'smooth',block:'start'});
  },400);
}

// ── RECALC ALL ──
function recalcAll(){
  let totDist=0,totCO2=0;const byT={};const airIngs=[];
  ingredients.forEach(ing=>{
    const food=FOOD_DATA[ing.foodIdx];
    const dist=haversine(food.production_lat,food.production_lng,destination.lat,destination.lng);
    const co2=calcCO2(dist,ing.weightKg,ing.transport,food.carbon_factor);
    totDist+=dist;totCO2+=co2;
    byT[ing.transport]=(byT[ing.transport]||0)+co2;
    if(ing.transport==='Air'&&food.alternative)airIngs.push({name:food.ingredient,alt:food.alternative,co2});
  });
  document.getElementById('totDist').textContent=Math.round(totDist).toLocaleString();
  document.getElementById('totCO2').textContent=totCO2.toFixed(2);
  document.getElementById('totIng').textContent=ingredients.length;
  const pct=Math.min((totCO2/20)*100,100);
  const fill=document.getElementById('impactFill');
  fill.style.width=pct+'%';fill.style.background=pct>70?'var(--pink)':pct>35?'var(--yellow)':'var(--green)';
  document.getElementById('impactLabel').textContent=totCO2.toFixed(2)+' kg CO₂';
  const bb=document.getElementById('breakdownBars');
  if(!Object.keys(byT).length){bb.innerHTML='<div style="font-size:13px;color:var(--muted);text-align:center;padding:12px">Add ingredients and click Calculate</div>';}
  else{const mx=Math.max(...Object.values(byT));bb.innerHTML=Object.entries(byT).map(([t,v])=>`<div class="bd-row"><div class="bd-lbl">${TE[t]} ${t}</div><div class="bd-track"><div class="bd-fill" style="width:${mx>0?(v/mx*100).toFixed(1):0}%;background:${TC[t]};box-shadow:0 0 8px ${TC[t]}88"></div></div><div class="bd-val">${v.toFixed(2)} kg</div></div>`).join('');}
  const ac=document.getElementById('altCard');
  if(airIngs.length>0){ac.style.display='block';document.getElementById('altList').innerHTML=airIngs.map(a=>`<div class="alt-item"><span class="alt-from">${a.name}</span><span class="alt-arrow">→</span><span class="alt-to">${a.alt}</span><span class="alt-save">Air freight</span></div>`).join('');}
  else ac.style.display='none';
  updateMap();
}

// ── AI CHAT ──
function toggleChat(){
  aiOpen=!aiOpen;
  document.getElementById('aiPanel').classList.toggle('open',aiOpen);
  document.getElementById('aiToggleBtn').classList.toggle('active',aiOpen);
  if(aiOpen&&chatHistory.length===0){
    addMsg('ai','👋 Hi! I\'m your FoodMiles AI assistant. I can analyze your meal\'s carbon footprint, suggest sustainable swaps, and answer food sustainability questions. What would you like to know?');
  }
}

function getMealCtx(){
  if(ingredients.length===0)return"No ingredients added yet.";
  let total=0;
  const lines=ingredients.map(ing=>{
    const food=FOOD_DATA[ing.foodIdx];
    const dist=Math.round(haversine(food.production_lat,food.production_lng,destination.lat,destination.lng));
    const co2=calcCO2(dist,ing.weightKg,ing.transport,food.carbon_factor);
    total+=co2;
    return`- ${food.ingredient} (${food.origin_city?food.origin_city+', ':''}${food.origin_country}): ${ing.weightKg}kg via ${ing.transport}, ${dist.toLocaleString()}km, ${co2.toFixed(3)}kg CO₂`;
  }).join('\n');
  return`Meal heading to ${destination.name}:\n${lines}\nTotal CO₂: ${total.toFixed(2)}kg`;
}

function addMsg(role,text){
  const c=document.getElementById('chatMessages');
  const d=document.createElement('div');
  d.className=`chat-msg chat-msg-${role}`;
  d.innerHTML=`<div class="chat-bubble">${text.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')}</div>`;
  c.appendChild(d);c.scrollTop=c.scrollHeight;
}
function addTyping(){
  const c=document.getElementById('chatMessages');
  const d=document.createElement('div');
  d.className='chat-msg chat-msg-ai typing-wrap';d.id='typingDot';
  d.innerHTML='<div class="chat-bubble"><span class="t-dot"></span><span class="t-dot"></span><span class="t-dot"></span></div>';
  c.appendChild(d);c.scrollTop=c.scrollHeight;
}
function removeTyping(){const e=document.getElementById('typingDot');if(e)e.remove()}

// ── AI API CALL (Anthropic messages endpoint via proxy) ──
async function sendChatMessage(){
  const input=document.getElementById('chatInput');
  const msg=input.value.trim();if(!msg)return;
  input.value='';
  addMsg('user',msg);
  chatHistory.push({role:'user',content:msg});
  addTyping();

  const sysPrompt=`You are FoodMiles AI, an expert sustainability assistant in a food carbon footprint tracking app.

Current meal data:
${getMealCtx()}

Carbon factors: Air=0.602, Road=0.096, Rail=0.028, Sea=0.008 kgCO₂/tonne-km.

Keep responses concise (2-3 paragraphs), friendly, and actionable. Use **bold** for key stats.`;

  // Build messages: take last 10 turns, ensure correct alternating pattern
  const historySlice = chatHistory.slice(-10);
  // Ensure last message is user (current msg already pushed)
  const msgs = historySlice.length > 0 ? historySlice : [{role:'user',content:msg}];

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "anthropic-dangerous-direct-browser-access":"true"
      },
      body:JSON.stringify({
        model:"claude-sonnet-4-20250514",
        max_tokens:1000,
        system:sysPrompt,
        messages:msgs
      })
    });

    const data=await response.json();
    removeTyping();

    if(data.content&&data.content[0]&&data.content[0].text){
      const reply=data.content[0].text;
      addMsg('ai',reply);
      chatHistory.push({role:'assistant',content:reply});
    } else if(data.error){
      const errMsg=data.error.message||'Unknown API error';
      addMsg('ai',`⚠️ API Error: ${errMsg}\n\nTo use the AI assistant, you need to either:\n1. Open this file inside **Claude.ai** as an artifact (recommended)\n2. Or add your own API key to the fetch request headers`);
      console.error('Anthropic API error:',data.error);
    } else {
      addMsg('ai','Something went wrong. Please try again.');
      console.error('Unexpected API response:',data);
    }
  } catch(err){
    removeTyping();
    addMsg('ai','⚠️ Unable to reach the AI. If you\'re hosting this locally, the Anthropic API requires server-side calls due to CORS. Deploy via a backend or open inside **Claude.ai** for full AI support.');
    console.error('Fetch error:',err);
  }
}

function handleChatKey(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendChatMessage()}}
function sendSuggestion(text){document.getElementById('chatInput').value=text;sendChatMessage()}

// ── INIT ──
initMap();
const defs=[
  {foodIdx:FOOD_DATA.findIndex(f=>f.ingredient==='Rice (Basmati)'),weightKg:.5,transport:'Road'},
  {foodIdx:FOOD_DATA.findIndex(f=>f.ingredient==='Avocado'),weightKg:.3,transport:'Air'},
  {foodIdx:FOOD_DATA.findIndex(f=>f.ingredient==='Coffee (Arabica)'),weightKg:.2,transport:'Sea'}
];
defs.forEach(d=>{if(d.foodIdx>=0)ingredients.push({id:idCounter++,...d})});
renderIngredients();
recalcAll();

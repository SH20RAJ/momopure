export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  isVeg: boolean;
  spiceLevel: 1 | 2 | 3;
  image: string;
  description: string;
}

export const categories = [
  { id: 'all', name: 'Show All' },
  { id: 'steamed', name: 'Steamed Momos' },
  { id: 'fried', name: 'Fried Momos' },
  { id: 'kurkure', name: 'Kurkure Momos' },
  { id: 'tandoori', name: 'Tandoori Momos' },
  { id: 'cheese-paneer', name: 'Cheese & Paneer' },
  { id: 'chicken', name: 'Chicken Special' },
  { id: 'combos', name: 'Combo Meals' },
  { id: 'addons', name: 'Chutneys & Sides' },
];

export const menuItems: MenuItem[] = [
  {
    id: "m1",
    name: "Classic Veg Steamed Momos",
    category: "steamed",
    price: 90,
    isVeg: true,
    spiceLevel: 2,
    image: "/steamed_momos.png",
    description: "Hand-rolled thin wrappers stuffed with finely chopped fresh veggies and light spices, steamed to juicy perfection."
  },
  {
    id: "m2",
    name: "Juicy Chicken Steamed Momos",
    category: "steamed",
    price: 130,
    isVeg: false,
    spiceLevel: 2,
    image: "/steamed_momos.png",
    description: "Tender minced chicken breast seasoned with ginger, garlic, onions, and select herbs, steamed hot and fresh."
  },
  {
    id: "m3",
    name: "Paneer Steamed Momos",
    category: "steamed",
    price: 120,
    isVeg: true,
    spiceLevel: 1,
    image: "/steamed_momos.png",
    description: "Soft fresh paneer crumbles spiced lightly and mixed with herbs, wrapped and steamed for a melt-in-mouth taste."
  },
  {
    id: "m4",
    name: "Crispy Veg Fried Momos",
    category: "fried",
    price: 110,
    isVeg: true,
    spiceLevel: 2,
    image: "/fried_momos.png",
    description: "Classic vegetable momos golden-fried to a satisfying, crispy crunch. Served with our spicy signature red chutney."
  },
  {
    id: "m5",
    name: "Chicken Fried Momos",
    category: "fried",
    price: 140,
    isVeg: false,
    spiceLevel: 2,
    image: "/fried_momos.png",
    description: "Juicy chicken momos deep fried to a beautiful golden-brown, locked-in flavors. Crunchy outside, moist inside."
  },
  {
    id: "m6",
    name: "Crispy Veg Kurkure Momos",
    category: "kurkure",
    price: 140,
    isVeg: true,
    spiceLevel: 2,
    image: "/kurkure_cheese_momos.png",
    description: "Momo coated in our special seasoned crunchy batter, deep fried for that loud satisfying Kurkure crunch!"
  },
  {
    id: "m7",
    name: "Crunchy Chicken Kurkure Momos",
    category: "kurkure",
    price: 160,
    isVeg: false,
    spiceLevel: 3,
    image: "/kurkure_cheese_momos.png",
    description: "Coated in a spicy batter and cornflakes, fried for ultimate crispiness. A fiery crunch in every bite."
  },
  {
    id: "m8",
    name: "Smoky Tandoori Veg Momos",
    category: "tandoori",
    price: 150,
    isVeg: true,
    spiceLevel: 3,
    image: "/tandoori_momos.png",
    description: "Marinated in a rich, spiced tandoori yogurt marinade, skewered and charred to smoky perfection in our clay oven style."
  },
  {
    id: "m9",
    name: "Smoky Tandoori Chicken Momos",
    category: "tandoori",
    price: 180,
    isVeg: false,
    spiceLevel: 3,
    image: "/tandoori_momos.png",
    description: "Charcoal-grilled smoky chicken momos smothered in rich tandoori spices and butter. Served with mint chutney."
  },
  {
    id: "m10",
    name: "Kurkure Cheese Momos",
    category: "cheese-paneer",
    price: 180,
    isVeg: true,
    spiceLevel: 2,
    image: "/kurkure_cheese_momos.png",
    description: "Crispy outside, bursting with hot melted mozzarella cheese inside. Today's Special & Ranchi's favorite!"
  },
  {
    id: "m11",
    name: "Paneer Cheese Steamed Momos",
    category: "cheese-paneer",
    price: 140,
    isVeg: true,
    spiceLevel: 1,
    image: "/steamed_momos.png",
    description: "Filled with a rich mixture of fresh paneer crumbles and melted cheese, seasoned with mild black pepper."
  },
  {
    id: "m12",
    name: "Cheese Chicken Momos",
    category: "chicken",
    price: 160,
    isVeg: false,
    spiceLevel: 2,
    image: "/kurkure_cheese_momos.png",
    description: "Tender chicken filling loaded with melted cheese. Juicy, cheesy, and packed with savory umami flavors."
  },
  {
    id: "m13",
    name: "Spicy Chili Chicken Momos",
    category: "chicken",
    price: 150,
    isVeg: false,
    spiceLevel: 3,
    image: "/tandoori_momos.png",
    description: "For the spice lovers: shredded chicken tossed in local ghost pepper spices, green chillies, and ginger."
  },
  {
    id: "m14",
    name: "Student Combo",
    category: "combos",
    price: 120,
    isVeg: true,
    spiceLevel: 2,
    image: "/steamed_momos.png",
    description: "Budget friendly! 6 Steamed Momos + Signature Red Spicy Chutney + 1 Chilled Soft Drink."
  },
  {
    id: "m15",
    name: "Couple Combo",
    category: "combos",
    price: 240,
    isVeg: true,
    spiceLevel: 2,
    image: "/fried_momos.png",
    description: "Double the love! 2 Full Plates of Momos (16 pcs total) + 2 Chilled Soft Drinks."
  },
  {
    id: "m16",
    name: "Party Box (30 Momos)",
    category: "combos",
    price: 450,
    isVeg: true,
    spiceLevel: 2,
    image: "/bunny_bites_box.png",
    description: "Huge box containing 30 mixed momos of your choice, served with 3 large tubs of chutneys. Perfect for hostels & offices!"
  },
  {
    id: "m17",
    name: "Family Platter",
    category: "combos",
    price: 320,
    isVeg: true,
    spiceLevel: 2,
    image: "/og_image.png",
    description: "A grand platter of 24 mixed momos (steamed, fried, and tandoori), with 4 signature dips."
  },
  {
    id: "m18",
    name: "Secret Spicy Red Chutney",
    category: "addons",
    price: 20,
    isVeg: true,
    spiceLevel: 3,
    image: "/logo_icon.png",
    description: "Extra tub of our legendary homemade fire-red chili and garlic chutney. Dip at your own risk!"
  },
  {
    id: "m19",
    name: "Creamy Mint-Yogurt Dip",
    category: "addons",
    price: 20,
    isVeg: true,
    spiceLevel: 1,
    image: "/logo_icon.png",
    description: "Cooling mint, coriander, and yogurt dip to soothe your taste buds after a spicy kick."
  }
];

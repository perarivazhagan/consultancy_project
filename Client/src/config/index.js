export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "living-room", label: "Living Room" },
      { id: "bedroom", label: "Bedroom" },
      { id: "dining-room", label: "Dining Room" },
      { id: "office", label: "Office" },
      { id: "outdoor", label: "Outdoor" },
      { id: "accessories", label: "Accessories" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "ikea", label: "IKEA" },
      { id: "nilkamal", label: "Nilkamal" },
      { id: "durian", label: "Durian" },
      { id: "stanley", label: "Stanley" },
      { id: "hometown", label: "HomeTown" },
      { id: "royaloak", label: "Royal Oak" }
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Collections",
    path: "/shop/listing",
  },
  {
    id: "living-room",
    label: "Living Room",
    path: "/shop/listing",
  },
  {
    id: "bedroom",
    label: "Bedroom",
    path: "/shop/listing",
  },
  {
    id: "dining-room",
    label: "Dining Room",
    path: "/shop/listing",
  },
  {
    id: "office",
    label: "Office",
    path: "/shop/listing",
  },
  {
    id: "outdoor",
    label: "Outdoor",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  "living-room": "Living Room",
  "bedroom": "Bedroom",
  "dining-room": "Dining Room",
  "office": "Office",
  "outdoor": "Outdoor",
  "accessories": "Accessories",
};

export const brandOptionsMap = {
  "ikea": "IKEA",
  "nilkamal": "Nilkamal",
  "durian": "Durian",
  "stanley": "Stanley",
  "hometown": "HomeTown",
  "royaloak": "Royal Oak"
};

export const filterOptions = {
  category: [
    { id: "living-room", label: "Living Room" },
    { id: "bedroom", label: "Bedroom" },
    { id: "dining-room", label: "Dining Room" },
    { id: "office", label: "Office" },
    { id: "outdoor", label: "Outdoor" },
    { id: "accessories", label: "Accessories" },
  ],
  brand: [
    { id: "ikea", label: "IKEA" },
    { id: "nilkamal", label: "Nilkamal" },
    { id: "durian", label: "Durian" },
    { id: "stanley", label: "Stanley" },
    { id: "hometown", label: "HomeTown" },
    { id: "royaloak", label: "Royal Oak" }
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];

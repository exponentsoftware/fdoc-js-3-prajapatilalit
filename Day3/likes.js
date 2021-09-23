const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function likeProduct(products, productId, userId) {
  const foundProduct = products.find((product) => product._id === productId);
  if (!foundProduct) {
    return "product not found";
  } else {
    foundProduct.likes.push(userId);
    return foundProduct;
  }
}
console.log(likeProduct(products, "hedfcg", "zwf8md"));

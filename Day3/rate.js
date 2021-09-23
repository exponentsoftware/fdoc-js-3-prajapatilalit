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

const newRate = { userId: "zwf8md", rate: 4 };

function rateProduct(products, productId, rates) {
  const foundProduct = products.find((product) => product._id === productId);

  if (!foundProduct) {
    console.log("We can't find your product");
  }
  foundProduct.ratings.push(rates);
  console.log(products);
}
rateProduct(products, "aegfal", newRate);

//With function call to calculate average rating of products

function averageRating(products) {
  for (let i = 0; i < products.length; i++) {
    let totalRate = 0;
    for (let j = 0; j < products[i].ratings.length; j++) {
      totalRate = totalRate + products[i].ratings[j].rate;
    }

    return totalRate / products[i].ratings.length;
  }
}

console.log(averageRating(products));

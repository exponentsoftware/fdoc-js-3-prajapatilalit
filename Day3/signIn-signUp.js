const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "17/05/2019 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "17/05/2019 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "17/05/2019 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "17/05/2019 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "17/05/2019 10:00 AM",
    isLoggedIn: false,
  },
];

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

// SignUp function
const newUser = {
  _id: "eefamj",
  username: "Pallavi",
  email: "pallavi@pallavi.com",
  password: "123222",
  createdAt: "13/05/2020 9:50 AM",
  isLoggedIn: false,
};
const Signup = (userData) => {
  const foundUser = users.some((user) => user._id === userData._id);
  if (!foundUser) {
    users.push(userData);
    return users;
  } else {
    return "you have already an account";
  }
};

console.log(Signup(newUser));

// Login function

let email = "martha@martha.com";
let password = "123222";

const SignIn = (email, password) => {
  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!foundUser.isLoggedIn) {
    foundUser.isLoggedIn = true;
    return "user signed In successfully";
  } else {
    return "user already login";
  }
};

console.log(SignIn(email, password));

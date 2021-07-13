export const products = [
  {
    id: 1,
    title: "Polo Ralph Lauren",
    size: ["S", "M"],
    price: 35,
    image: `${process.env.PUBLIC_URL}/images/picture1.jpg`,
    oldPrice: 55.999,
    state: "sale",
  },
  {
    id: 2,
    title: "Polo Ralph Lauren",
    size: ["S", "M", "XL"],
    price: 65,
    image: `${process.env.PUBLIC_URL}/images/picture2.jpg`,
    oldPrice: 55.999,
    state: "sold out",
  },
  {
    id: 3,
    title: "Polo Ralph Lauren",
    size: ["S", "M", "L", "XL"],
    image: `${process.env.PUBLIC_URL}/images/picture3.jpg`,
    price: 95.999,
    oldPrice: 55.999,
    state: "sold",
  },
];

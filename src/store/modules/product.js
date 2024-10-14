const listProduct = {
  state: {
    products: [
      { id: 1, productName: "Cam sành", price: "30 000 đ", quantity: 32 },
      { id: 2, productName: "Mít thái", price: "60 000 đ", quantity: 16 },
    ],
  },
  getters: {
    getProduct: (state) => state.products,
  },
};
export default listProduct;

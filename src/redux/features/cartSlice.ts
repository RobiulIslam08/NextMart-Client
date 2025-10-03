import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartProduct extends IProduct {
  orderQuantity: number;
  
}
interface InitialState {
  products: CartProduct[];
    city: string;
  shippingAddress: string;
}
const initialState: InitialState = {
  products: [],
  city: "",
  shippingAddress: "",
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (productToAdd) {
        productToAdd.orderQuantity += 1;
        return;
      }

      state.products.push({ ...action.payload, orderQuantity: 1 });
    },
    incrementOrderQuantity: (state, action) => {
      //action.payload এ _id আসবে।
      const productToIncrement = state.products.find(
        (product) => product._id === action.payload
      );
      if (productToIncrement) {
        productToIncrement.orderQuantity += 1;
        return;
      }
    },
    decrementOrderQuantity: (state, action) => {
      //action.payload এ _id আসবে।
      const productToIncrement = state.products.find(
        (product) => product._id === action.payload
      );
      if (productToIncrement && productToIncrement.orderQuantity > 1) {
        productToIncrement.orderQuantity -= 1;
        return;
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
	updateCity:(state,action) => {
		state.city = action.payload
	},
	updateShipingAddress:(state,action) => {
		state.shippingAddress = action.payload
	},
  },
});
export const subTotalSelector = (state: RootState) => {
  return state.cart.products.reduce((acc, product) => {
    if (product.offerPrice) {
      console.log(product.offerPrice);
      return acc + product.offerPrice * product.orderQuantity;
    } else {
      console.log(product.price, "Price");
      return acc + product.price * product.orderQuantity;
    }
  }, 0);
};

export const orderedProductsSelector = (state: RootState) => {
  return state.cart.products;
};

//* Address

export const citySelector = (state: RootState) => {
  return state.cart.city;
};

export const shippingAddressSelector = (state: RootState) => {
  return state.cart.shippingAddress;
};
export const {
  addProduct,
  incrementOrderQuantity,
  decrementOrderQuantity,
  removeProduct,
  updateCity,
  updateShipingAddress
} = cartSlice.actions;
export default cartSlice.reducer;

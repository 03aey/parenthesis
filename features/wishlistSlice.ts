import { wishlists } from "@/lib/data";
import { Destination } from "@/lib/type";
import { createSlice } from "@reduxjs/toolkit";

interface WishlistState {
	items: Destination[];
}

const initialState: WishlistState = {
	items: wishlists,
};

export const wishlistSlice = createSlice({
	name: "wishlist",
	initialState,
	reducers: {
		addToWishlist: (state, action) => {
			const item = action.payload;
			const exists = state.items.find((i) => i.id === item.id);
			if (!exists) state.items.push(item);
		},
		removeFromWishlist: (state, action) => {
			state.items = state.items.filter(
				(item) => item.id !== action.payload
			);
		},
		clearWishlist: (state) => {
			state.items = [];
		},
	},
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
	wishlistSlice.actions;

export default wishlistSlice.reducer;

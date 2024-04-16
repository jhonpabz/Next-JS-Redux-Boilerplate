import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialShoppingListState: ReduxSpace.ShoppingList.State = {
    showAddItemModal: false,
    list: [],
  };

const shoppingListReducer = createSlice({
  name: "shoppingList",
  initialShoppingListState,
  reducers: {
    setIsAddItemModalShow(state, action: PayloadAction<boolean>) {
      state.showAddItemModal = action.payload;
    },

    setList(state, action: PayloadAction<any>) {
      state.list = action.payload;
    },
  },
});

const { setIsAddItemModalShow, setList } = shoppingListReducer.actions;

export type ShoppingListAction =
  | ReturnType<typeof setIsAddItemModalShow>
  | ReturnType<typeof setList>;

export default shoppingListReducer.reducer;
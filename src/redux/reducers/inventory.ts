import { Action, ActionType } from "redux/actionTypes";
import { Inventory } from "types";

const initialState: Inventory = { products: [] };

export const inventoryReducer = (
  state: Inventory = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.FETCH_INVENTORY_DATA:
      return { ...action.payload };
    default:
      return state;
  }
};

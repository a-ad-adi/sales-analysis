import { combineReducers } from "redux";
import { inventoryReducer } from "redux/reducers/inventory";

export const reducers = combineReducers({
  dashboard: inventoryReducer,
});
export type State = ReturnType<typeof reducers>;

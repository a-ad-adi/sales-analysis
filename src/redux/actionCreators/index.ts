import { Action, ActionType } from "redux/actionTypes";
import { Dispatch } from "redux";
import { fetchInventoryData } from "stubs/fetchInventoryData";

export const fetchSalesData = () => async (dispatch: Dispatch<Action>) => {
  const data = await fetchInventoryData();
  dispatch({ type: ActionType.FETCH_INVENTORY_DATA, payload: data });
};

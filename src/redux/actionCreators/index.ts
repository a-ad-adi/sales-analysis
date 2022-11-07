import { Action, ActionType } from "redux/actionTypes";
import { Dispatch } from "redux";
import { fetchDashboard } from "stubs/fetchDashboard";

export const fetchSalesData = () => async (dispatch: Dispatch<Action>) => {
  const data = await fetchDashboard();
  dispatch({ type: ActionType.FETCH_INVENTORY_DATA, payload: data });
};

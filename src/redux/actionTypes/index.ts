import { Inventory } from "types";

export enum ActionType {
  FETCH_INVENTORY_DATA = "FETCH_INVENTORY_DATA",
}

export interface FetchInventoryDataAction {
  type: ActionType;
  payload: Inventory;
}

export type Action = FetchInventoryDataAction;

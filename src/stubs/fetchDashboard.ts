import { Inventory } from "types";
import { mockInventory } from "stubs/mockData";

export function fetchDashboard(): Promise<Inventory> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockInventory as Inventory);
    }, 1000);
  });
}

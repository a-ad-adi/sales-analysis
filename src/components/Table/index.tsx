import React, { useState, useEffect } from "react";
import { SalesRecord } from "types";

import "components/Table/index.css";

enum Column {
  WEEK_ENDING = "WEEK ENDING",
  RETAIL_SALES = "RETAIL SALES",
  WHOLESALE_SALES = "WHOLESALE SALES",
  UNITS_SOLD = "UNITS SOLD",
  RETAILER_MARGIN = "RETAILER MARGIN",
}

enum Sort_Order {
  ASC = "ASC",
  DESC = "DESC",
}

const columnNames = [
  Column.WEEK_ENDING,
  Column.RETAIL_SALES,
  Column.WHOLESALE_SALES,
  Column.UNITS_SOLD,
  Column.RETAILER_MARGIN,
];

const initialSortState = {
  sortBy: Column.WEEK_ENDING,
  order: Sort_Order.ASC,
};
function Table({ salesData }: { salesData: SalesRecord[] }) {
  const [sortedData, setSortedData] = useState(salesData);
  const [sortState, setSortState] = useState(initialSortState);

  useEffect(() => {
    const records = [...salesData];
    records.sort((r1: SalesRecord, r2: SalesRecord) => {
      const d1 = new Date(r1.weekEnding);
      const d2 = new Date(r2.weekEnding);
      return d1 < d2 ? -1 : 1;
    });
    setSortedData(records);
  }, []);

  useEffect(() => {
    const { sortBy, order } = sortState;
    let records: SalesRecord[] = [...sortedData];

    switch (sortBy) {
      case Column.WEEK_ENDING:
        records.sort((r1: SalesRecord, r2: SalesRecord) => {
          const d1 = new Date(r1.weekEnding);
          const d2 = new Date(r2.weekEnding);
          return order === Sort_Order.ASC
            ? d1 < d2
              ? -1
              : 1
            : d1 < d2
            ? 1
            : -1;
        });
        console.log(sortBy, order, records);
        break;
      case Column.RETAIL_SALES:
        records.sort((r1: SalesRecord, r2: SalesRecord) => {
          return order === Sort_Order.ASC
            ? r1.retailSales - r2.retailSales
            : r2.retailSales - r1.retailSales;
        });
        break;
      case Column.WHOLESALE_SALES:
        records.sort((r1: SalesRecord, r2: SalesRecord) => {
          return order === Sort_Order.ASC
            ? r1.wholesaleSales - r2.wholesaleSales
            : r2.wholesaleSales - r1.wholesaleSales;
        });
        break;
      case Column.UNITS_SOLD:
        records.sort((r1: SalesRecord, r2: SalesRecord) => {
          return order === Sort_Order.ASC
            ? r1.unitsSold - r2.unitsSold
            : r2.unitsSold - r1.unitsSold;
        });

        break;
      case Column.RETAILER_MARGIN:
        records.sort((r1: SalesRecord, r2: SalesRecord) => {
          return order === Sort_Order.ASC
            ? r1.unitsSold - r2.unitsSold
            : r2.unitsSold - r1.unitsSold;
        });
        break;
      default:
        break;
    }

    setSortedData(records);
  }, [sortState]);

  const getHeaderCell = (column: Column) => {
    const { sortBy, order } = sortState;
    return (
      <div
        className="col header-col"
        onClick={() => {
          setSortState({
            sortBy: column,
            order:
              column === sortBy
                ? order === Sort_Order.ASC
                  ? Sort_Order.DESC
                  : Sort_Order.ASC
                : Sort_Order.ASC,
          });
        }}
      >
        {column}{" "}
        <span className="sort">
          {column === sortBy ? (order === Sort_Order.ASC ? " ↓" : " ↑") : ""}
        </span>
      </div>
    );
  };

  return (
    <div className="table">
      <div className="row">
        {columnNames.map((name) => getHeaderCell(name))}
      </div>
      {sortedData.map((record, idx) => (
        <div className="row" key={idx}>
          <div className="col">{record.weekEnding}</div>
          <div className="col">{record.retailSales}</div>
          <div className="col">{record.wholesaleSales}</div>
          <div className="col">{record.unitsSold}</div>
          <div className="col">{record.retailerMargin}</div>
        </div>
      ))}
    </div>
  );
}

export default Table;

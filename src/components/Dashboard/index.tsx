import React from "react";
import Graph from "components/Graph";
import Table from "components/Table";
import { SalesRecord } from "types";

function Dashboard({ salesData }: { salesData: SalesRecord[] }) {
  return (
    <div className="dashboard">
      <Graph salesData={salesData} />
      <Table salesData={salesData} />
    </div>
  );
}

export default Dashboard;

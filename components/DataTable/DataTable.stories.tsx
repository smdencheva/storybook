import React from "react";
import { DataTable } from "./DataTable";

const mockData = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
  { id: 4, name: "David", email: "david@example.com" },
  { id: 5, name: "Eve", email: "eve@example.com" },
  { id: 6, name: "Frank", email: "frank@example.com" },
  { id: 7, name: "Grace", email: "grace@example.com" },
  { id: 8, name: "Heidi", email: "heidi@example.com" },
  { id: 9, name: "Ivan", email: "ivan@example.com" },
  { id: 10, name: "Judy", email: "judy@example.com" },
];

export default {
  title: "Components/DataTable",
  component: DataTable,
};

export const MyDataTable = () => <DataTable data={mockData} itemsPerPage={4} />;

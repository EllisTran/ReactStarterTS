import { useState } from "react";
import { SortableTableConfig } from "../components/SortableTable";
import { TableConfig, TableRow } from "../components/Table";

const useSort = (data: TableRow[], config: TableConfig[]) => {
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const setSortColumn = (label: string) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }

    // Only sort data if sortOrder && sortBy are not null
    // Make a copy of the 'data' prop
    // Find the correct sortValue function and use it for sorting.
  };
  let sortedData = data;
  if (sortOrder && sortBy) {
    const updatedConfig = config.find(
      (column) => column.label === sortBy
    ) as SortableTableConfig;

    if (updatedConfig.sortValue) {
      const { sortValue } = updatedConfig;
      sortedData = [...data].sort((a, b) => {
        const valueA = sortValue(a);
        const valueB = sortValue(b);

        const reverseOrder = sortOrder === "asc" ? 1 : -1;
        if (typeof valueA === "string") {
          return valueA.localeCompare(valueB as string) * reverseOrder;
        } else {
          return (valueA - (valueB as number)) * reverseOrder;
        }
      });
    }
  }
  return { sortBy, sortOrder, setSortColumn, sortedData };
};
export default useSort;

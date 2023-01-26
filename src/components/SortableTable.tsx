import { useState } from "react";
import Table, { TableConfig, TableProps } from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import useSort from "../hooks/use-sort";

export interface SortableTableConfig extends TableConfig {
  sortValue?: (...args: any) => string | number;
}

const SortableTable = (props: TableProps): JSX.Element => {
  const { config, data } = props;
  const { sortBy, sortOrder, setSortColumn, sortedData } = useSort(
    data,
    config
  );
  const updatedConfig = config.map((column: SortableTableConfig) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  const getIcons = (
    label: string,
    sortBy: string | null,
    sortOrder: string | null
  ) => {
    if (label !== sortBy) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    }
    if (sortOrder === null) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          <GoArrowSmallUp />
        </div>
      );
    } else {
      return (
        <div>
          <GoArrowSmallDown />
        </div>
      );
    }
  };

  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
};
export default SortableTable;

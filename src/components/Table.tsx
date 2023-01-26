import { Fragment } from "react";
export interface TableRow {
  label: string;
}

export interface TableConfig {
  label: string;
  render: (...args: any) => React.ReactNode;
  header?: (...args: any) => React.ReactNode;
}

export interface TableProps {
  data: TableRow[];
  config: TableConfig[];
  keyFn: (...args: any) => string;
}

const Table = ({ data, config, keyFn }: TableProps): JSX.Element => {
  const renderedRows = data.map((row) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={keyFn(column)}>
          {column.render(row)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(row)}>
        {renderedCells}
      </tr>
    );
  });

  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  return (
    <table className="table-auto border-space-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};
export default Table;

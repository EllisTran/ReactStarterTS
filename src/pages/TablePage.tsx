import SortableTable, {
  SortableTableConfig,
} from "../components/SortableTable";
import Table, { TableRow, TableConfig } from "../components/Table";

interface TablePageProps {}
interface FruitsTableRow extends TableRow {
  color: string;
  score: number;
}
const TablePage = ({}: TablePageProps): JSX.Element => {
  const fruits: FruitsTableRow[] = [
    {
      label: "Orange",
      color: "bg-orange-500",
      score: 5,
    },
    {
      label: "Apple",
      color: "bg-red-300",
      score: 2,
    },
    {
      label: "Banana",
      color: "bg-yellow-500",
      score: 6,
    },
    {
      label: "Lime",
      color: "bg-green-500",
      score: 3,
    },
  ];

  const config: SortableTableConfig[] = [
    {
      label: "Name",
      render: (fruit) => fruit.label,
      sortValue: (fruit) => fruit.label,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Score Squared",
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },
  ];

  const keyFn = (fruit: TableRow): string => {
    return fruit.label;
  };

  return (
    <div>
      <SortableTable data={fruits} config={config} keyFn={keyFn} />
    </div>
  );
};
export default TablePage;

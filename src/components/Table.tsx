import {
  Table as BTable,
  TableTbody,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";
import { Column, TableRow } from "./TableRow";

export const Table = <T,>({
  columns,
  data,
}: {
  columns: Column<T>[];
  data: T[];
}) => {
  return (
    <BTable
      striped
      highlightOnHover
      horizontalSpacing="md"
      verticalSpacing="md"
    >
      <TableThead>
        <TableTr bg="gray.1">
          {columns.map((column, index) => (
            <TableTh key={index} c="gray.6" fz={14} fw={700}>
              {column.header()}
            </TableTh>
          ))}
        </TableTr>
      </TableThead>
      <TableTbody>
        {data.map((row, index) => (
          <TableRow key={index} data={row} columns={columns} />
        ))}
      </TableTbody>
    </BTable>
  );
};

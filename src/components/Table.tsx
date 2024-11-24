import {
  Table as BTable,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";
import _ from "lodash";
import { ReactNode } from "react";

const getCell = <T,>(row: T, key: string | number | symbol) => _.get(row, key);

type Column<T> = {
  keyIndex: keyof T;
  header: () => ReactNode;
  cell?: (row: T) => ReactNode;
};

export const Table = <T,>({
  columns,
  data,
}: {
  columns: Column<T>[];
  data: T[];
}) => {
  return (
    <BTable striped highlightOnHover>
      <TableThead>
        <TableTr>
          {columns.map((column, index) => (
            <TableTh key={index}>{column.header()}</TableTh>
          ))}
        </TableTr>
      </TableThead>
      <TableTbody>
        {data.map((row, index) => (
          <TableTr key={index}>
            {columns.map((column, cIndex) => (
              <TableTd key={cIndex}>
                {column.cell ? column.cell(row) : getCell(row, column.keyIndex)}
              </TableTd>
            ))}
          </TableTr>
        ))}
      </TableTbody>
    </BTable>
  );
};

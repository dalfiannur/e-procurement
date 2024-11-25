"use client";
import { TableTd, TableTr } from "@mantine/core";
import _ from "lodash";
import { ReactNode, useState } from "react";

export type Column<T> = {
  keyIndex: keyof T;
  header: () => ReactNode;
  cell?: (
    row: T,
    options: { setSelected: (selected: boolean) => void }
  ) => ReactNode;
};

const getCell = <T,>(row: T, key: string | number | symbol) => _.get(row, key);

export const TableRow = <T,>({
  columns,
  data,
}: {
  columns: Column<T>[];
  data: T;
}) => {
  const [selected, setSelected] = useState(false);

  return (
    <TableTr bg={selected ? "var(--mantine-color-blue-light)" : undefined}>
      {columns.map((column, cIndex) => (
        <TableTd key={cIndex}>
          {column.cell
            ? column.cell(data, { setSelected })
            : getCell(data, column.keyIndex)}
        </TableTd>
      ))}
    </TableTr>
  );
};

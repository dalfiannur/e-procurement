"use client";
import {
  Checkbox,
  Flex,
  InputLabel,
  Pagination,
  Select,
  Stack,
  Text,
} from "@mantine/core";
import { useEffect, useMemo, useState } from "react";
import { Table } from "~/components/Table";
import { Column } from "~/components/TableRow";

export type Tender = {
  id: string;
  title: string;
};

const data: Tender[] = [
  {
    id: "id",
    title: "This is tender title",
  },
];

export const TenderListTable = ({
  onSelectedRows,
}: {
  onSelectedRows?: (rows: Tender[]) => void;
}) => {
  const [selectedRows, setSelectedRows] = useState<Tender[]>([]);
  const columns = useMemo(
    () =>
      [
        {
          keyIndex: "id",
          header: () => null,
          cell: (row, { setSelected }) => (
            <Checkbox
              aria-label="Select row"
              checked={selectedRows.includes(row)}
              onChange={(event) => {
                const checked = event.currentTarget.checked;
                setSelected(checked);
                setSelectedRows(
                  checked
                    ? [...selectedRows, row]
                    : selectedRows.filter((position) => position !== row)
                );
              }}
            />
          ),
        },
        {
          keyIndex: "title",
          header: () => "Title",
        },
      ] satisfies Column<Tender>[],
    [data, selectedRows]
  );

  useEffect(() => {
    onSelectedRows?.(selectedRows);
  }, [selectedRows]);

  return (
    <Stack>
      <Table columns={columns} data={data} />
      <Flex justify="space-between" align="center">
        <Text c="gray.6" size="sm">
          10 of 100 data
        </Text>
        <Pagination radius="xl" total={10} />
        <Flex align="center" gap="lg">
          <InputLabel size="sm">Per Page</InputLabel>
          <Select size="xs" w={80} data={["10", "25", "50", "100"]} />
        </Flex>
      </Flex>
    </Stack>
  );
};

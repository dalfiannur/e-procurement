"use client";

import { Flex, ButtonGroup, Button, Text } from "@mantine/core";
import { QueryData } from "@supabase/supabase-js";
import { IconEditCircle, IconTrashXFilled } from "@tabler/icons-react";
import dayjs from "dayjs";
import { use, useMemo } from "react";
import { Table } from "~/components/Table";
import { Column } from "~/components/TableRow";
import { createClientDatabase } from "~/utils/supabase/client";

const query = createClientDatabase()
  .from("orders")
  .select("*, categories (id, name)")
  .limit(10);

type Order = QueryData<typeof query>["0"];

export const OrderTable = () => {
  const { data } = use(query);

  const columns = useMemo(
    () =>
      [
        {
          keyIndex: "title",
          header: () => "Title",
        },
        {
          keyIndex: "categories.name",
          header: () => "Category",
        },
        {
          keyIndex: "created_at",
          header: () => "Create Date",
          cell: (row) => dayjs(row.created_at).format("MMM DD, YYYY"),
        },
        {
          keyIndex: "id",
          header: () => (
            <Text ta="center" size="sm" c="gray.6" fw={700}>
              Actions
            </Text>
          ),
          cell: (row) => (
            <Flex justify="center">
              <ButtonGroup>
                <Button
                  size="xs"
                  variant="subtle"
                  leftSection={<IconEditCircle size={20} />}
                >
                  Edit
                </Button>
                <Button
                  size="xs"
                  variant="subtle"
                  color="red"
                  leftSection={<IconTrashXFilled size={20} />}
                >
                  Delete
                </Button>
              </ButtonGroup>
            </Flex>
          ),
        },
      ] satisfies Column<Order>[],
    []
  );

  return <Table columns={columns} data={data ?? []} />;
};

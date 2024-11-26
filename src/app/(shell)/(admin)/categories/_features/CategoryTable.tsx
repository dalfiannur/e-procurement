"use client";
import { Button, ButtonGroup, Flex, Text } from "@mantine/core";
import { IconEditCircle, IconTrashXFilled } from "@tabler/icons-react";
import { use, useMemo } from "react";
import { Table } from "~/components/Table";
import { Column } from "~/components/TableRow";
import { Category } from "~/types/Category";
import { createClientDatabase } from "~/utils/supabase/client";

export const CategoryTable = () => {
  const { data } = use(
    createClientDatabase().from("categories").select().limit(10)
  );

  const columns = useMemo(
    () =>
      [
        {
          keyIndex: "name",
          header: () => "Name",
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
      ] satisfies Column<Category>[],
    []
  );

  return <Table columns={columns} data={data ?? []} />;
};

"use client";
import {
  ActionIcon,
  Anchor,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Card,
  Flex,
  Stack,
  TextInput,
  Title,
  Tooltip,
} from "@mantine/core";
import { Tender, TenderListTable } from "./_features/TenderListTable";
import { IconPlus, IconTrashFilled } from "@tabler/icons-react";
import { useState } from "react";

export default function Page() {
  const [selected, setSelected] = useState<Tender[]>([]);

  return (
    <Stack>
      <Flex justify="space-between" align="center">
        <Title order={3}>Tender List Management</Title>
        <Breadcrumbs>
          <Anchor>Home</Anchor>
          <Anchor>List</Anchor>
        </Breadcrumbs>
      </Flex>
      <Card radius="lg" withBorder>
        <Stack>
          <Flex justify="space-between" align="center">
            <Flex gap="xl" align="center">
              <TextInput radius="md" size="md" placeholder="Search..." />
              {selected.length > 0 && (
                <ButtonGroup>
                  <Tooltip label="Delete Selected Rows">
                    <ActionIcon
                      variant="transparent"
                      c="red"
                      onClick={() => console.log(selected)}
                    >
                      <IconTrashFilled />
                    </ActionIcon>
                  </Tooltip>
                </ButtonGroup>
              )}
            </Flex>
            <Button leftSection={<IconPlus />} radius="md" size="md">
              Add New
            </Button>
          </Flex>
          <TenderListTable onSelectedRows={setSelected} />
        </Stack>
      </Card>
    </Stack>
  );
}

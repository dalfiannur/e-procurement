"use client";
import {
  Anchor,
  Breadcrumbs,
  Button,
  Card,
  Container,
  Flex,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { IconCirclePlus } from "@tabler/icons-react";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { OrderTable } from "./_features/OrderTable";

export default function Page() {
  const router = useRouter();

  return (
    <Container size="xl">
      <Card p="xl">
        <Stack gap="xl">
          <Flex justify="space-between" align="center">
            <Title order={3}>Order List</Title>
            <Breadcrumbs>
              <Anchor component={Link} href="/">
                Home
              </Anchor>
              <Anchor c="gray.6">Orders</Anchor>
            </Breadcrumbs>
          </Flex>

          <Stack>
            <Flex justify="space-between" align="center">
              <TextInput placeholder="Search..." />
              <Button
                leftSection={<IconCirclePlus size={20} />}
                onClick={() => router.push("/orders/create")}
              >
                Create New Order
              </Button>
            </Flex>
            <OrderTable />
          </Stack>
        </Stack>
      </Card>
    </Container>
  );
}

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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CategoryTable } from "./_features/CategoryTable";

export default function Page() {
  const router = useRouter();

  return (
    <Container size="xl">
      <Card p="xl">
        <Stack gap="xl">
          <Flex justify="space-between" align="center">
            <Title order={3}>Category List</Title>
            <Breadcrumbs>
              <Anchor component={Link} href="/">
                Home
              </Anchor>
              <Anchor c="gray.6">Category List</Anchor>
            </Breadcrumbs>
          </Flex>

          <Stack>
            <Flex justify="space-between" align="center">
              <TextInput placeholder="Search..." />
              <Button
                leftSection={<IconCirclePlus size={20} />}
                onClick={() => router.push("/categories/create")}
              >
                Create Category
              </Button>
            </Flex>
            <CategoryTable />
          </Stack>
        </Stack>
      </Card>
    </Container>
  );
}

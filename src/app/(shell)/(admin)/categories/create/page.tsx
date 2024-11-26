"use client";
import {
  Anchor,
  Breadcrumbs,
  Button,
  Card,
  Container,
  Flex,
  Select,
  Stack,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconReload, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { createCategoryAction, CreateCategoryInput } from "./action";

export default function Page() {
  const router = useRouter();
  const [isLoading, loading] = useDisclosure(false);
  const { getInputProps, onSubmit } = useForm<CreateCategoryInput>({
    initialValues: {
      name: "",
    },
  });

  const handleSubmit = useCallback(async (values: CreateCategoryInput) => {
    loading.open();
    await createCategoryAction(values);
    loading.close();
    notifications.show({
      title: "Success",
      message: "Order successfully created.",
    });
    router.push("/categories");
  }, []);

  return (
    <Container size="xl">
      <Card p="xl">
        <Stack gap="xl">
          <Flex justify="space-between" align="center">
            <Title order={3}>Create New Category</Title>
            <Breadcrumbs>
              <Anchor component={Link} href="/">
                Home
              </Anchor>
              <Anchor component={Link} href="/categories">
                Category List
              </Anchor>
              <Anchor c="gray.6">Create</Anchor>
            </Breadcrumbs>
          </Flex>
          <form onSubmit={onSubmit(handleSubmit)}>
            <Stack>
              <TextInput
                {...getInputProps("name")}
                required
                label="Name"
                placeholder="Enter category name"
              />
              <Flex mt="xl" justify="end" gap="lg">
                <Button
                  type="reset"
                  variant="white"
                  leftSection={<IconReload size={20} />}
                >
                  Reset
                </Button>
                <Button
                  variant="light"
                  leftSection={<IconX size={20} />}
                  onClick={() => router.back()}
                >
                  Cancel
                </Button>
                <Button
                  loading={isLoading}
                  type="submit"
                  leftSection={<IconCheck size={20} />}
                >
                  Save
                </Button>
              </Flex>
            </Stack>
          </form>
        </Stack>
      </Card>
    </Container>
  );
}

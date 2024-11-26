"use client";
import {
  Anchor,
  Breadcrumbs,
  Button,
  Card,
  Container,
  Flex,
  Stack,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconReload, IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { SelectCategory } from "./_features/SelectCategory";
import { createOrderAction, CreateOrderInput } from "./action";

export default function Page() {
  const router = useRouter();
  const [isLoading, loading] = useDisclosure(false);
  const { getInputProps, onSubmit } = useForm<CreateOrderInput>({
    initialValues: {
      title: "",
      category_id: "",
      description: "",
    },
  });

  const handleSubmit = useCallback(async (values: CreateOrderInput) => {
    loading.open();
    await createOrderAction(values);
    loading.close();
    notifications.show({
      title: "Success",
      message: "Order successfully created.",
    });
    router.push("/orders");
  }, []);

  return (
    <Container size="xl">
      <Card p="xl">
        <Stack gap="xl">
          <Flex justify="space-between" align="center">
            <Title order={3}>Create New Order</Title>
            <Breadcrumbs>
              <Anchor>Home</Anchor>
              <Anchor>Orders</Anchor>
              <Anchor>Create</Anchor>
            </Breadcrumbs>
          </Flex>
          <form onSubmit={onSubmit(handleSubmit)}>
            <Stack>
              <TextInput
                {...getInputProps("title")}
                required
                label="Title"
                placeholder="Enter title of procurement"
              />

              <SelectCategory {...getInputProps("category_id")} />

              <Textarea
                {...getInputProps("description")}
                required
                label="Description"
                placeholder="Enter description"
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

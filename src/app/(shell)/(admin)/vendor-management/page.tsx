import { Button, Card, Container, Flex, Stack, Title } from "@mantine/core";
import Link from "next/link";
import { Table } from "~/components/Table";
import { createClient } from "~/utils/supabase/server";

export default async function Page() {
  const supabase = await createClient();
  const { data } = await supabase.from("vendors").select().limit(10);

  return (
    <Container py="xl">
      <Card shadow="xl" radius="xl" p="xl">
        <Stack>
          <Flex align="center" justify="space-between">
            <Title>Vendor Management</Title>
            <Button component={Link} href="/vendor-management/add">
              Add New Vendor
            </Button>
          </Flex>
          <Table
            columns={[
              {
                keyIndex: "name",
                header: () => <Title order={6}>Vendor Name</Title>,
              },
              {
                keyIndex: "address",
                header: () => <Title order={6}>Address</Title>,
              },
            ]}
            data={data ?? []}
          />
        </Stack>
      </Card>
    </Container>
  );
}

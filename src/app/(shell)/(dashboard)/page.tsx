"use client";
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconCircleFilled,
  IconCirclePlus,
  IconNotebook,
  IconSearch,
} from "@tabler/icons-react";
import dynamic from "next/dynamic";
import { Table } from "~/components/Table";
import dayjs from "dayjs";
import { BarChart } from "@mantine/charts";
import { useRouter } from "next/navigation";

const PieChart = dynamic(() => import("~/components/PieChart"), {
  ssr: false,
});

export default function Page() {
  const router = useRouter();

  return (
    <Container size="xl">
      <Stack gap="xl">
        <Title>E-Procurement Dashboard</Title>
        <SimpleGrid cols={3} spacing="xl">
          <Card p="lg">
            <Stack gap="lg">
              <Box>
                <Title order={3}>Quick Actions</Title>
                <Text c="gray.6">Frequently used procurement actions</Text>
              </Box>
              <Stack>
                <Button
                  leftSection={<IconCirclePlus size={20} />}
                  onClick={() => router.push("/orders/create")}
                >
                  Create New Order
                </Button>
                <Button
                  leftSection={<IconNotebook size={20} />}
                  variant="outline"
                >
                  Submit Requisition
                </Button>
                <Button leftSection={<IconSearch size={20} />} variant="light">
                  Search Catalog
                </Button>
              </Stack>
            </Stack>
          </Card>

          <Card p="lg">
            <Stack gap="lg">
              <Box>
                <Title order={3}>Spending Overview</Title>
                <Text c="gray.6">Distribution of procurement spending</Text>
              </Box>
              <Stack>
                <Stack justify="center" align="center">
                  <PieChart
                    size={120}
                    withTooltip
                    tooltipDataSource="segment"
                    data={[
                      {
                        name: "IT Equipment",
                        value: 35,
                        color: "blue",
                      },
                      {
                        name: "Software",
                        value: 20,
                        color: "yellow",
                      },
                      {
                        name: "Services",
                        value: 5,
                        color: "violet",
                      },
                      {
                        name: "Office Suppliers",
                        value: 25,
                        color: "green",
                      },
                      {
                        name: "Furniture",
                        value: 15,
                        color: "orange",
                      },
                    ]}
                  />
                </Stack>
                <SimpleGrid cols={2} spacing="xl" verticalSpacing="xs">
                  <Group>
                    <ThemeIcon color="blue" variant="transparent" size={16}>
                      <IconCircleFilled />
                    </ThemeIcon>
                    IT Equipment
                  </Group>
                  <Group>
                    <ThemeIcon color="green" variant="transparent" size={16}>
                      <IconCircleFilled size={16} />
                    </ThemeIcon>
                    Office Supplier
                  </Group>
                  <Group>
                    <ThemeIcon color="yellow" variant="transparent" size={16}>
                      <IconCircleFilled size={16} />
                    </ThemeIcon>
                    Software
                  </Group>
                  <Group>
                    <ThemeIcon color="orange" variant="transparent" size={16}>
                      <IconCircleFilled size={16} />
                    </ThemeIcon>
                    Furniture
                  </Group>
                  <Group>
                    <ThemeIcon color="violet" variant="transparent" size={16}>
                      <IconCircleFilled size={16} />
                    </ThemeIcon>
                    Services
                  </Group>
                </SimpleGrid>
              </Stack>
            </Stack>
          </Card>

          <Card p="lg">
            <Stack gap="lg">
              <Box>
                <Title order={3}>Pending Approvals</Title>
                <Text c="gray.6">Requests awaiting your approval</Text>
              </Box>
              <Stack>
                <Flex justify="space-between" align="center">
                  <Box>
                    <Text fw="bold" c="gray.8">
                      New Laptop
                    </Text>
                    <Text size="sm" c="gray.6">
                      John Doe
                    </Text>
                  </Box>
                  <Badge color="red">High</Badge>
                </Flex>
                <Flex justify="space-between" align="center">
                  <Box>
                    <Text fw="bold" c="gray.8">
                      Office Chair
                    </Text>
                    <Text size="sm" c="gray.6">
                      Jane Smith
                    </Text>
                  </Box>
                  <Badge color="black">Medium</Badge>
                </Flex>
                <Flex justify="space-between" align="center">
                  <Box>
                    <Text fw="bold" c="gray.8">
                      Software License
                    </Text>
                    <Text size="sm" c="gray.6">
                      John Doe
                    </Text>
                  </Box>
                  <Badge color="gray.2" c="black">
                    High
                  </Badge>
                </Flex>
              </Stack>
            </Stack>
          </Card>
        </SimpleGrid>

        <SimpleGrid cols={2} spacing="xl">
          <Card p="lg">
            <Stack gap="lg">
              <Box>
                <Title order={3}>Recent Purchases</Title>
                <Text c="gray.6">
                  A list of recent procurement transactions
                </Text>
              </Box>
              <Table
                data={[
                  {
                    name: "Office Supplies",
                    supplier: {
                      name: "OfficeMax",
                    },
                    amount: "Rp. 1.000.000",
                    created_at: dayjs(new Date().toISOString()).format(
                      "DD MMM YYYY"
                    ),
                  },
                  {
                    name: "IT Equipment",
                    supplier: {
                      name: "Dell",
                    },
                    amount: "Rp. 1.000.000",
                    created_at: dayjs(new Date().toISOString()).format(
                      "DD MMM YYYY"
                    ),
                  },
                  {
                    name: "Furniture",
                    supplier: {
                      name: "IKEA",
                    },
                    amount: "Rp. 1.000.000",
                    created_at: dayjs(new Date().toISOString()).format(
                      "DD MMM YYYY"
                    ),
                  },
                  {
                    name: "Software License",
                    supplier: {
                      name: "Microsoft",
                    },
                    amount: "Rp. 1.000.000",
                    created_at: dayjs(new Date().toISOString()).format(
                      "DD MMM YYYY"
                    ),
                  },
                ]}
                columns={[
                  {
                    keyIndex: "name",
                    header: () => "Item",
                  },
                  {
                    keyIndex: "supplier.name",
                    header: () => "Supplier",
                  },
                  {
                    keyIndex: "amount",
                    header: () => "Amount",
                  },
                  {
                    keyIndex: "created_at",
                    header: () => "Date",
                  },
                ]}
              />
            </Stack>
          </Card>
          <Card p="lg">
            <Stack gap="lg">
              <Box>
                <Title order={3}>Suppliers Performance</Title>
                <Text c="gray.6">
                  Overall performance scores of top suppliers
                </Text>
              </Box>
              <Stack>
                <BarChart
                  w="full"
                  h={300}
                  data={[
                    { id: 1, name: "OfficeMax", rating: 80 },
                    { id: 2, name: "Dell", rating: 90 },
                    { id: 3, name: "IKEA", rating: 70 },
                    { id: 4, name: "Microsoft", rating: 60 },
                    { id: 5, name: "Apple", rating: 75 },
                  ]}
                  dataKey="name"
                  type="default"
                  series={[{ name: "rating" }]}
                />
              </Stack>
            </Stack>
          </Card>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

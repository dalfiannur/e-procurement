import { Flex, Stack, TextInput, Title } from "@mantine/core";
import { createVendor } from "./action";
import { SubmitButton } from "./SubmitButton";

export default function Page() {
  return (
    <Stack>
      <Title>Add New Vendor</Title>
      <form action={createVendor}>
        <Stack>
          <TextInput label="Name" name="name" />
          <TextInput label="Address" name="address" />
          <Flex>
            <SubmitButton />
          </Flex>
        </Stack>
      </form>
    </Stack>
  );
}

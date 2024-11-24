"use client";
import { Button, Flex, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { handleSubmit } from "./action";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { getInputProps, onSubmit } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Flex>
      <form
        onSubmit={onSubmit(async (values) => {
          const data = await handleSubmit(values);
          if (data.session) {
            localStorage.setItem("access_token", data.session.access_token);
            router.push("/dashboard");
          }
        })}
      >
        <Stack>
          <TextInput {...getInputProps("email")} label="Email" />
          <TextInput
            {...getInputProps("password")}
            label="Password"
            type="password"
          />
          <Button type="submit">Login</Button>
        </Stack>
      </form>
    </Flex>
  );
}

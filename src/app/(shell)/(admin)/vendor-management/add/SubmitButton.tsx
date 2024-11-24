"use client";
import { Button } from "@mantine/core";
import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button loading={pending} type="submit">
      Save
    </Button>
  );
};

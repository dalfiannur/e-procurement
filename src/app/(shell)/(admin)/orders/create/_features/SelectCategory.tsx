"use client";
import { ComboboxData, Select, SelectProps } from "@mantine/core";
import { useEffect, useState } from "react";
import { createClientDatabase } from "~/utils/supabase/client";

export const SelectCategory = (props: SelectProps) => {
  const [options, setOptions] = useState<ComboboxData>([]);

  useEffect(() => {
    createClientDatabase()
      .from("categories")
      .select()
      .then(({ data }) => {
        setOptions(
          data?.map((row) => ({ label: row.name, value: row.id })) ?? []
        );
      });
  });

  return (
    <Select
      {...props}
      data={options}
      label="Category"
      placeholder="Select category"
    />
  );
};

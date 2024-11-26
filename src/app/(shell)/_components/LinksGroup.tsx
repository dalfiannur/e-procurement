"use client";
import {
  Box,
  Collapse,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

type LinksGroupProps = {
  icon: React.FC<any>;
  label: string;
  link?: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
};

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  link,
  links,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const router = useRouter();
  const [opened, setOpened] = useState<boolean>(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Text
      component={Link}
      className="font-medium block px-4 py-2 text-sm text-[light-dark(var(--mantine-color-gray-7),var(--mantine-color-dark-0))] border-l-[1px_solid_light-dark(var(--mantine-color-gray-3),var(--mantine-color-dark-4))] hover:bg-[light-dark(var(--mantine-color-gray-0),var(--mantine-color-dark-7))] hover:text-[light-dark(var(--mantine-color-black),var(--mantine-color-dark-0))] border-l !border-blue-200 ml-8 pl-8"
      href={link.link}
      key={link.label}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => {
          if (link) {
            router.push(link);
          } else {
            setOpened((o) => !o);
          }
        }}
        className="font-medium block w-full px-4 py-2 text-neutral-950 text-sm hover:bg-[light-dark(var(--mantine-color-gray-0),var(--mantine-color-dark-7))] hover:text-[light-dark(var(--mantine-color-black,var(--mantine-color-dark-0)))]"
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className="transition-transform ease-in"
              stroke={1.5}
              size={16}
              style={{ transform: opened ? "rotate(-90deg)" : "none" }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

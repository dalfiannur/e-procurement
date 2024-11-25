import { Box } from "@mantine/core";
import { LinksGroup } from "./LinksGroup";
import { IconShield } from "@tabler/icons-react";

export const NavbarLinksGroup = () => {
  return (
    <Box>
      <LinksGroup label="Tender" link="/tender-management" icon={IconShield} />
      <LinksGroup label="Role" link="/roles" icon={IconShield} />
    </Box>
  );
};

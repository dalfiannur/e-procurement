import { Box } from "@mantine/core";
import { LinksGroup } from "./LinksGroup";
import {
  IconChartBar,
  IconHome,
  IconNotebook,
  IconShoppingCart,
  IconUsers,
} from "@tabler/icons-react";

export const NavbarLinksGroup = () => {
  return (
    <Box>
      <LinksGroup label="Dashboard" link="/" icon={IconHome} />
      <LinksGroup
        label="Orders"
        icon={IconShoppingCart}
        links={[
          {
            label: "List",
            link: "/orders",
          },
          {
            label: "Category",
            link: "/categories",
          },
        ]}
      />
      <LinksGroup label="Requisition" link="/requisition" icon={IconNotebook} />
      <LinksGroup label="Suppliers" link="/suppliers" icon={IconUsers} />
      <LinksGroup label="Analytics" link="/analytics" icon={IconChartBar} />
    </Box>
  );
};

import { Box, Icon, styled, theme } from "@washingtonpost/wpds-ui-kit";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./logo";
import Menu from "@washingtonpost/wpds-assets/asset/menu";
import { ThemeToggle } from "./ThemeToggle";
import SearchForm from "./SearchForm";
import { useEffect } from "react";

const List = styled("ul", {
  gridArea: "nav",
  display: "flex",
  flexDirection: "row",
  listStyle: "none",
  justifyContent: "flex-end",
  alignItems: "center",

  "@sm": {
    display: "none",
  },
});

const Container = styled("div", {
  alignItems: "center",
  display: "flex",
  gridArea: "logo",
  height: 60,
  "@notSm": {
    backgroundColor: "$gray500",
    overflow: "hidden",
    position: "fixed",
    zIndex: "$shell",
    top: 0,
    right: 0,
    left: 0,
    width: "300px",
  },

  "@sm": {
    width: "100%",
  },
});

const ListItem = styled("li", {
  display: "flex",
  flexDirection: "column",
  margin: "0 $200 0 0",

  "@sm": {
    margin: "0",
    display: "none",
  },
});

const Anchor = styled("a", {
  color: "$onSecondary",
  textDecoration: "none",
  "&:hover": {
    opacity: "0.75",
  },

  variants: {
    isCurrent: {
      true: {
        fontWeight: "$bold",
      },
    },
  },
});

const MenuToggle = styled("button", {
  height: 32,
  width: 32,
  alignItems: "center",
  backgroundColor: "transparent",
  borderStyle: "none",
  display: "flex",
});
const HamburgerMenu = styled(Menu, {
  fill: "$primary",
  variants: {
    state: {
      open: {
        transform: "rotate(180deg)",
      },
      closed: {
        transform: "rotate(270deg)",
      },
    },
  },
});

export const NavigationBar = ({
  setMobileMenu,
  mobileMenuState,
  isClosed,
  children,
}) => {
  const router = useRouter();

  return (
    <>
      <Container>
        <Logo css={{ width: "100%" }} />
        <Box
          css={{
            "@notSm": {
              display: "none",
            },
            "@sm": {
              display: "flex",
              gap: "$075",
              paddingRight: "$100",
              justifyItems: "flex-end",
            },
          }}
        >
          <ThemeToggle />
          <MenuToggle onClick={() => setMobileMenu(!isClosed)}>
            <Icon size="$200" label="Menu Icon">
              <HamburgerMenu state={isClosed ? "closed" : "open"} />
            </Icon>
          </MenuToggle>
        </Box>
      </Container>
      <List>
        <ListItem>
          <SearchForm />
        </ListItem>
        <ListItem>
          <Link href="/resources" passHref>
            <Anchor isCurrent={router.asPath.includes("/resources")}>
              Resources
            </Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            onClick={() => setMobileMenu(!mobileMenuState)}
            href="/release-notes"
            passHref
          >
            <Anchor isCurrent={router.asPath.includes("/release-notes")}>
              Release Notes
            </Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <ThemeToggle />
        </ListItem>
      </List>
    </>
  );
};

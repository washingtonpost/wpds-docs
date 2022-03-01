import { styled } from "@washingtonpost/wpds-ui-kit";
import React from "react";
import Link from "./link";

export const Header = styled("h1", {
  fontSize: "$300",
  scrollMarginTop: "$400",
  fontFamily: "$headline",
  color: "$primary",
  fontWeight: "$bold",
  "@sm": {
    fontSize: "$250",
  },
  variants: {
    as: {
      h2: {
        fontFamily: "$headline",
        fontSize: "$175",
        fontWeight: "$bold",
        "@sm": {
          fontSize: "$175",
        },
      },
      h3: {
        fontSize: "$125",
        fontFamily: "$subhead",
        fontWeight: "$bold",
        marginBottom: "$025",
        marginTop: "$100",
      },
      h4: {
        fontSize: "$100",
        fontWeight: "$bold",
        fontFamily: "$meta",
        paddingBottom: "$025",
        marginTop: "$100",
      },
      h6: {
        fontSize: "$050",
        fontWeight: "$light",
        fontFamily: "$body",
      },
    },
  },
});

export default function headers({ css, children, as }) {
  if (!children) {
    return null;
  }

  return (
    <Link id={`${encodeURI(children)}`} href={`#${decodeURI(children)}`}>
      <Header css={css} as={as}>
        {children}
      </Header>
    </Link>
  );
}

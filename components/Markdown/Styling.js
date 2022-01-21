/**IMPORTS AND MAPS COMPONENTS TO ALL ELEMENTS IN MARKDOWN FILES
 * FOR STYLING. AS WELL COMMONLY USED COMPONENTS. FOR UNIQUE COMPONENTS
 * NEEDED IMPORT THEM VIA THE COMPONENTS PASSED ON THE SPECIFIC [SLUG].JS FILE
 */
import Header from "./Components/headers";
import CustomLink from "./Components/link";
import { styled, theme, Box } from "@washingtonpost/wpds-ui-kit";
import { List, ListItem } from "~/components/Markdown/Components/list";
import dynamic from "next/dynamic";
import Sandbox from "./Components/Sandbox";
import { InputCheckbox } from "./Components/Checkbox";

const HR = styled("hr", {
  borderStyle: "none",
  backgroundColor: "$subtle",
  height: "1px",
  width: "100%",
  margin: "$100 0",
});
export const P = styled("p", {
	fontSize: "$100",
	paddingBottom: "$050",
	color: theme.colors.accessible,
	fontFamily: "$meta",
	fontWeight: "$light",
});

export const BR = styled("div", {
  paddingBottom: "$125",
  variants: {
    size: {
      xl: { paddingBottom: "$225" },
    },
  },
});

const components = {
  a: ({ children, href }) => (
    <CustomLink href={href} useSignal>
      {children}
    </CustomLink>
  ),
  ul: List,
  ol: ({ children }) => <List as="ol">{children}</List>,
  li: ListItem,
  p: P,
  h1: ({ children }) => <Header as="h1">{children}</Header>,
  h2: ({ children }) => (
    <Header id={children} css={{ paddingBottom: "$100" }} as="h2">
      {children}
    </Header>
  ),
  h3: ({ children }) => (
    <Header id={children} as="h3">
      {children}
    </Header>
  ),
  h4: ({ children }) => (
    <Header id={children} as="h4">
      {children}
    </Header>
  ),
  hr: HR,
  BR: BR,
  TableOfContents: dynamic(() => import("./Components/tableofcontents")),
  Container: dynamic(() => import("./Components/container")),
  GuideContainer: dynamic(() => import("./Components/GuideContainer")),
  InlineSVG: dynamic(() => import("./Components/inlineSVG")),
  Box: Box,
  pre: ({ children }) => (
    <Box
      as="pre"
      css={{
        marginBottom: "$100",
        overflowX: "auto",
        "@sm": {
          width: "calc(100vw - $100 - $100)",
        },
      }}
    >
      {children}
    </Box>
  ),
  code: ({ children }) => {
    return (
      <Box
        as="code"
        css={{
          marginBottom: "$100",
          maxWidth: "100%",
          width: "100%",
        }}
      >
        <Sandbox withPreview={children.includes("// preview")}>
          {
            // remove the preview comment from the code and the line break
            children.includes("// preview")
              ? children.replace("// preview", "").replace("\n", "")
              : children
          }
        </Sandbox>
      </Box>
    );
  },
  input: ({ children, type, ...props }) => {
    if (type === "checkbox") {
      return <InputCheckbox {...props} />;
    }

    return <input {...props} />;
  },
};

export default components;

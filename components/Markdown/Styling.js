/**IMPORTS AND MAPS COMPONENTS TO ALL ELEMENTS IN MARKDOWN FILES
 * FOR STYLING. AS WELL COMMONLY USED COMPONENTS. FOR UNIQUE COMPONENTS
 * NEEDED IMPORT THEM VIA THE COMPONENTS PASSED ON THE SPECIFIC [SLUG].JS FILE
 */
import Header from "./Components/Headers";
import CustomLink from "./Components/link";
import { styled } from "@washingtonpost/ui-theme";
// import TableOfContents from "./Components/tableofcontents";
import dynamic from "next/dynamic";
const HR = styled("hr", {
  borderStyle: "none",
  backgroundColor: "$subtle",
  height: "1px",
  width: "100%",
  margin: "$100 0"
});
const P = styled("p", {
  fontSize: "$100",
  paddingBottom: "$050",
  color: "$accessible"
});
const components = {
  a: ({ children, href }) => (
    <CustomLink href={href} useSignal>
      {children}
    </CustomLink>
  ),
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
  TableOfContents: dynamic(() => import("./Components/tableofcontents")),
  Container: dynamic(() => import("./Components/container"))
};

export default components;
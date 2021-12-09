import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { useState } from "react";
import Head from "next/head";
import { styled } from "@washingtonpost/ui-theme";
import MDXStyling from "~/components/Markdown/Styling";
import Layout from "~/components/Layout/WithSidebar";
import Sidebar from "~/components/Layout/Components/Sidebar";
import Content from "~/components/Layout/Components/Content";
import Header from "~/components/Typography/Headers";
import TableofContents from "~/components/Markdown/Components/tableofcontents";
import {
  getAllPathsBySection,
  getDocByPathName,
  getDocsListBySection
} from "~/services";
import { NavigationBar } from "~/components/NavigationBar";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  ...MDXStyling,
  // Custom components go here
  CustomComponent: dynamic(() => import("~/components/Typography/Headers")),
  Head
};
const P = styled("p", {
  color: "$accessible"
});
export default function Page({ current, docs, source }) {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  return (
    <Layout>
      <NavigationBar showLogo={false} />
      <Sidebar
        showSidebar={toggleSideBar}
        docs={{ root: thisSection, label: thisSection, files: docs }}
        current={current}
        id="sidebar"
      />
      <Content id="content" useShortVersion>
        <div className="post-header">
          <Header>{source.scope.title}</Header>
          {source.scope.description && (
            <P className="description">{source.scope.description}</P>
          )}
          <TableofContents current={current} />
        </div>
        <MDXRemote {...source} components={components} />
      </Content>
    </Layout>
  );
}

const thisSection = "components";

export const getStaticProps = async ({ params }) => {
  const source = await getDocByPathName(`${thisSection}/${params.slug}`);

  const [docs] = [thisSection].map(section => getDocsListBySection(section));

  return {
    props: {
      current: params.slug,
      thisSection,
      docs,
      source
    }
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllPathsBySection(thisSection);

  return {
    paths,
    fallback: false
  };
};

import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import MDXStyling from "~/components/Markdown/Styling";
import Header from "~/components/Typography/Headers";
import {
  getNavigation,
  getAllPathsByCategory,
  getResource,
  getHeadings,
} from "~/services";
import Breadcrumbs from "~/components/Breadcrumbs";
import TableofContents from "~/components/Markdown/Components/tableofcontents";

const SECTION = "resources";

const components = {
  ...MDXStyling,
};

export default function Page({ current, source, headings }) {
  return (
    <>
      <Head>
        <title>WPDS - {source.scope.title} | Resources</title>
      </Head>
      <>
        <Breadcrumbs.Root>
          <Breadcrumbs.Item href="/resources">Resources</Breadcrumbs.Item>
          <Breadcrumbs.Item
            href={`/resources/${source.scope.kicker.toLowerCase()}`}
          >
            {source.scope.kicker}
          </Breadcrumbs.Item>
        </Breadcrumbs.Root>
        <header>
          <Header as="h1">{source.scope.title}</Header>
          <Header
            as="h2"
            css={{
              font: "$subhead",
              marginBottom: "$200",
              color: "$accessible",
            }}
          >
            {source.scope.description}
          </Header>
        </header>
        <TableofContents current={current} headings={headings} />
      </>
      <article>
        <MDXRemote {...source} components={components} />
      </article>
    </>
  );
}

export const getStaticProps = async (response) => {
  const source = await getResource(
    `${SECTION}/${response.params.category}/${response.params.slug}`
  );
  const navigation = await getNavigation();
  const headings = await getHeadings(
    `${SECTION}/${response.params.category}/${response.params.slug}`
  );

  return {
    props: {
      current: response.params.slug,
      source,
      navigation,
      headings,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllPathsByCategory(SECTION);

  return {
    paths,
    fallback: false,
  };
};

import { MDXRemote } from "next-mdx-remote";
import { NextSeo } from "next-seo";
import MDXStyling from "~/components/Markdown/Styling";
import Header from "~/components/Typography/Headers";
import {
  getDocByPathName,
  getAllPathsBySection,
  getHeadings,
} from "~/services";
import { getNavigation } from "~/services/getNavigation";
import Breadcrumbs from "~/components/Breadcrumbs";
import { theme, Box } from "@washingtonpost/wpds-ui-kit";

export default function Page({ source, headings }) {
  return (
    <>
      <NextSeo
        title={`WPDS - ${source.scope.title} | Release notes`}
        description={source.scope.description}
      />
      <>
        <Breadcrumbs.Root>
          <Breadcrumbs.Item href="/release-notes">
            Release notes
          </Breadcrumbs.Item>
        </Breadcrumbs.Root>
        <header>
          <Header
            css={{
              marginBottom: "$100",
            }}
          >
            {source.scope.title}
          </Header>
          <Header
            as="h2"
            css={{
              marginBottom: "$100",
            }}
          >
            {source.scope.Head}
          </Header>
          <Box as="p" css={{ color: "$accessible" }}>
            {source.scope.description}
          </Box>
          <br />
        </header>
      </>
      <>
        <article>
          <MDXRemote {...source} components={MDXStyling} />
        </article>
      </>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const source = await getDocByPathName(`release-notes/${params.slug}`);

  const navigation = await getNavigation();

  const headings = await getHeadings(`release-notes/${params.slug}`);

  return {
    props: {
      source,
      navigation,
      headings,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllPathsBySection("release-notes");

  return {
    paths,
    fallback: false,
  };
};

import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { Box, theme, styled } from "@washingtonpost/wpds-ui-kit";
import MDXStyling from "~/components/Markdown/Styling";
import Header from "~/components/Typography/Headers";
import { getNavigation, getAllPathsByCategory, getBlogPost } from "~/services";
import CustomLink from "~/components/Typography/link";

const Slash = styled("span", {
  color: theme.colors.accessible,
});

const SECTION = "blog";

const components = {
  ...MDXStyling,
};

export default function Page({ source }) {
  return (
    <>
      <Head>
        <title>WPDS - {source.scope.title} | Blog</title>
      </Head>
      <>
        <Box
          css={{
            marginBottom: "$050",
          }}
        >
          <CustomLink
            href="/blog"
            css={{
              fontFamily: "$meta",
              fontSize: "$100",
              fontWeight: "$light",
              borderBottom: "1px solid currentColor",
              color: theme.colors.accessible,
              marginRight: "$050",
            }}
          >
            Blog
          </CustomLink>
          <Slash aria-hidden="true">/</Slash>
          <CustomLink
            href="/blog"
            css={{
              fontFamily: "$meta",
              fontSize: "$100",
              fontWeight: "$light",

              borderBottom: "1px solid currentColor",
              color: theme.colors.accessible,
              marginRight: "$050",
              marginLeft: "$050",
            }}
          >
            {source.scope.kicker}
          </CustomLink>
          <Slash aria-hidden="true">/</Slash>
        </Box>
        <Header
          as="h1"
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
      </>
      <>
        <MDXRemote {...source} components={components} />
      </>
    </>
  );
}

export const getStaticProps = async (response) => {
  const source = await getBlogPost(
    `${SECTION}/${response.params.category}/${response.params.slug}`
  );
  const navigation = await getNavigation();

  return {
    props: {
      source,
      navigation,
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

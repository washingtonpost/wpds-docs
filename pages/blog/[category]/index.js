import { styled, theme, Box } from "@washingtonpost/wpds-ui-kit";
import Head from "next/head";
import Header from "~/components/Typography/Headers";
import CustomLink from "~/components/Typography/link";
import { getAllPathsByCategory, getBlogPosts, getNavigation } from "~/services";
import { P } from "~/components/Markdown/Styling";

const titleCase = (input) => {
  return input.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const Slash = styled("span", {
	color: theme.colors.accessible,
});

const Masonry = styled("section", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
  gridGap: "$100",
  "@sm": {
    gridTemplateColumns: "1fr",
  },
});

export default function Page({ docs, category }) {
  return (
    <div>
      <Head>
        <title>WPDS - {category} Blog</title>
      </Head>
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
						marginBottom: "$050",
					}}
				>
					Blog
				</CustomLink>
				<Slash aria-hidden="true">/</Slash>
			</Box>
			<Header>{category}</Header>
			<Masonry>
				{docs.map((doc) => {
					return (
						<CustomLink
							href={doc.slug}
							key={doc.slug}
							css={{
								border: "1px solid $subtle",
								borderRadius: "$025",
								padding: "$100",
							}}
						>
							<article>
								{doc.data.publishDate}
								<Header as="h3">{doc.data.title}</Header>

                <P
                  css={{
                    marginBottom: "$100",
                  }}
                >
                  {doc.data.description}
                </P>
                <Box
                  as="footer"
                  css={{
                    fontFamily: "$meta",
                    fontSize: "$100",
                    fontWeight: "$light",
                    lineHeight: "$125",
                  }}
                >
                  {doc.data.byline}
                </Box>
              </article>
            </CustomLink>
          );
        })}
      </Masonry>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const docs = await getBlogPosts(`blog/${params.category}`);

  const navigation = await getNavigation();

  return {
    props: {
      category: titleCase(params.category),
      docs,
      navigation,
    },
  };
};

const SECTION = "blog";

export const getStaticPaths = async (response) => {
  const paths = await getAllPathsByCategory(`${SECTION}`);

  return {
    paths,
    fallback: false,
  };
};

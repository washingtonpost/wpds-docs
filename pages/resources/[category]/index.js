import { styled, Box } from "@washingtonpost/wpds-ui-kit";
import { NextSeo } from "next-seo";
import Header from "~/components/Typography/Headers";
import CustomLink from "~/components/Typography/link";
import { getAllPathsByCategory, getNavigation, getResources } from "~/services";
import Breadcrumbs from "~/components/Breadcrumbs";
import { Thumbnail } from "~/components/Thumbnail";
import { SubPageGrid } from "~/components/Markdown/Components/ResourcesGrids";

const titleCase = (input) => {
  return input.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const HeadDiv = styled("div", {
  paddingLeft: "$050",
  color: "$primary",
  "@sm": {
    padding: "$025",
  },
});

export default function Page({ docs, category, description, type, size }) {
  return (
    <>
      <NextSeo
        title={`WPDS - ${category} | Resources`}
        description={`${category} resources, including links to documentation, guides, and more.`}
      />
      <HeadDiv>
        <Breadcrumbs.Root>
          <Breadcrumbs.Item href="/resources">Resources</Breadcrumbs.Item>
        </Breadcrumbs.Root>
        <header>
          <Header css={{ padding: "$100 0 $050" }}>{category}</Header>
        </header>
        <p>{description}</p>
      </HeadDiv>
      <SubPageGrid type={type}>
        {docs.map((doc) => {
          return (
            <CustomLink
              href={doc.slug}
              key={doc.slug}
              css={{
                borderRadius: "$025",
                padding: "$100 $050 0",
                "@sm": {
                  padding: "$100 $025 0",
                },
              }}
            >
              <Thumbnail
                name={doc.data.title}
                description={doc.data.description.split(".")[0]}
                publishDate={doc.data.publishDate}
                kicker={doc.data.kicker}
                imageTag={doc.data.imageTag}
                thumbnail={doc.data.thumbnail}
                size={size}
              />
            </CustomLink>
          );
        })}
      </SubPageGrid>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const docs = await getResources(`resources/${params.category}`);
  const todaysDate = new Date();
  // exclude future posts using collection.publishDate
  const publishedDocs = docs.filter(
    (doc) => new Date(doc.data.publishDate) <= todaysDate
  );

  const navigation = await getNavigation();

  // populate props
  let description, type, size;
  type = params.category;
  if (type === "tutorials") {
    description =
      "Watch or read through our tutorials to understand key techniques and concepts.";
    size = "full";
  } else if (type === "workshops") {
    description =
      "Sharpen your design and development skills with our in-depth recorded workshops.";
    size = "full";
  } else if (type === "guides") {
    description =
      "Explore the processes and tools we use in our step-by-step written guides.";
    size = "mini";
  }

  return {
    props: {
      category: titleCase(params.category),
      docs: publishedDocs,
      navigation,
      description,
      type,
      size,
    },
  };
};

const SECTION = "resources";

export const getStaticPaths = async (response) => {
  const paths = await getAllPathsByCategory(`${SECTION}`);

  return {
    paths,
    fallback: false,
  };
};

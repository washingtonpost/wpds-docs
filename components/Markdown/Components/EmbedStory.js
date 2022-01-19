import { styled } from "@washingtonpost/wpds-ui-kit";
import { theme } from "@washingtonpost/wpds-theme";

/**
 * create a component that renders an iframe embedding a storybook story
 * @param {string} componentName - the name of the story to embed in the iframe (e.g. ('button'))
 * @param {string} viewMode - the view mode of the story (e.g. ('story'))
 */
export default function EmbedStory({
	componentName,
	viewMode = "story",
	...rest
}) {
	const Story = styled("iframe", {
		aspectRatio: "1 / 0.25",
		width: "100%",
		maxWidth: "100%",
		borderRadius: "$025",
		border: "$100 solid $subtle",
		background: theme.colors["gray600-static"],
	});

	const hostname = "https://main--6197ecb0496d77003a9e85fd.chromatic.com";
	const pathname = `/iframe.html?id=${componentName}--play&viewMode=${viewMode}&shortcuts=false&singleStory=true`;
	const src = `${hostname}${pathname}`;

	return <Story src={src} {...rest} />;
}

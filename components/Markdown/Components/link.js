import Link from "next/link";
import * as React from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";

export default function CustomLink({
	children,
	useSignal,
	as,
	href,
	id,
	...otherProps
}) {
	const A = styled("a", {
		cursor: "pointer",
		textDecoration: "none",
		color: "$primary",
		"&:hover": {
			opacity: ".75",
		},
		"&:focus": {
			outlineColor: "$signal",
			outlineStyle: "solid",
			outlineOffset: "2px",
			outlineWidth: "2px",
		},
		variants: {
			signal: {
				showColor: {
					color: "$signal",
				},
			},
		},
	});

	return (
		<>
			<Link as={as} href={href} forceHref passHref>
				<A
					id={id}
					signal={useSignal ? "showColor" : ""}
					{...otherProps}
				>
					{children}
				</A>
			</Link>
		</>
	);
}

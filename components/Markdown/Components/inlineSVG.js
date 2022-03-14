import React from "react";
import { ReactSVG } from "react-svg";
import Tokens from "@washingtonpost/wpds-theme/src/wpds.tokens.json";
import Image from "next/image";
import { css, styled } from "@washingtonpost/wpds-ui-kit";

export default function inlineSVG({
  cushion,
  path,
  title,
  description,
  width,
  height,
}) {
  const Size = { height: height ? height : 150, width: width ? width : 300 };
  const SVGContainer = styled("div", {
    padding: "$100 $100",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    fontSize: 0, // this is to prevent the font size from increasing the box size of the container
    lineHeight: 0, // this is to prevent the font size from increasing the box size of the container
    variants: {
      cushion: {
        none: {
          padding: 0,
        },
      },
    },
  });
  function hexToRgbA(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      let rgba =
        "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",1)";
      return lookUpValue(rgba);
    }
    if (hex == "white") {
      return "var(--wpds-colors-gray600)";
    }
    if (hex == "black") {
      return "var(--wpds-colors-gray0)";
    } else {
      // console.log("Bad Hex");
    }
  }

  function lookUpValue(rgba) {
    for (var token in Tokens.color.light) {
      if (Tokens.color.light[token].hasOwnProperty("value")) {
        const tokenValue = Tokens.color.light[token].value.replaceAll(" ", "");
        if (rgba == tokenValue) {
          return `var(--wpds-colors-${token})`;
        }
      }
    }
  }

  const inlineSvgCss = css({
    aspectRatio: `${width}/${height}`,
  });

  return (
    <SVGContainer cushion={cushion}>
      <ReactSVG
        aria-label={description}
        loading={() => (
          <Image
            width={width}
            height={height}
            className={inlineSvgCss()}
            src={path}
            alt=""
          />
        )}
        beforeInjection={(svg) => {
          const titleTag = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "title"
          );
          titleTag.innerHTML = title; //require title to be passed
          svg.prepend(title);
          svg.setAttribute(
            "style",
            `max-width:${Size.width}px;max-height:${Size.height}px;display:flex`
          );
          svg.setAttribute("width", "100%");
          svg.setAttribute("height", "auto");
          const paths = svg.querySelectorAll("path");
          paths.forEach((i) => {
            i.setAttribute("fill", hexToRgbA(i.getAttribute("fill")));
          });
          const lines = svg.querySelectorAll("line");
          lines.forEach((i) => {
            i.setAttribute("stroke", hexToRgbA(i.getAttribute("stroke")));
          });
          const rects = svg.querySelectorAll("rect");
          rects.forEach((i) => {
            i.setAttribute("fill", hexToRgbA(i.getAttribute("fill")));
          });
          //TODO need to account for primitives circle, ellipse, polyline, polygon
        }}
        fallback={() => <span>Error while loading image</span>}
        src={path}
      />
    </SVGContainer>
  );
}

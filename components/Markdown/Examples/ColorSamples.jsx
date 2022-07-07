import React, { useEffect, useState } from "react";
import { Box, styled, AlertBanner, theme } from "@washingtonpost/wpds-ui-kit";
import { toast } from "react-toastify";
import Tokens from "@washingtonpost/wpds-theme/src/wpds.tokens.json";

import { Grid } from "../Components/Grid";

const ColorSamples = ({ group }) => {
  const [colorGroupArray, setColorGroupArray] = useState([]);
  const [copyText, setCopyText] = useState("");

  useEffect(() => {
    const colorArray = handleColor(group);
    setColorGroupArray(colorArray);
  }, [group]);

  useEffect(() => {
    if (copyText) {
      window.navigator.clipboard.writeText(copyText);
      toast(<SuccessToast />, {
        position: "top-center",
        closeButton: false,
        autoClose: 2000,
        hideProgressBar: true,
        draggable: false,
        onClose: () => {
          setCopyText(null);
        },
      });
    }
  }, [copyText]);

  const SuccessToast = () => {
    return (
      <AlertBanner.Root variant="success">
        <AlertBanner.Content css={{ minWidth: 250, paddingRight: "$050" }}>
          <b>Copied: </b>
          <Box as="span" css={{ fontSize: theme.fontSizes[100] }}>
            <Box as="i">{copyText}</Box>
          </Box>
        </AlertBanner.Content>
      </AlertBanner.Root>
    );
  };

  const handleColor = (group) => {
    const colorNamesArray = Object.keys(Tokens.color[group]);

    return colorNamesArray.filter((colorName) =>
      Tokens.color[group][colorName].hasOwnProperty("value")
    );
  };

  const Swatch = styled("button", {
    backgroundColor: "transparent",
    border: "1px solid $subtle",
    "&:hover": {
      opacity: 0.5,
    },
  });

  const ColorExample = styled("div", {
    minHeight: "$500",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const ColorID = styled("p", {
    fontSize: "$100",
    padding: "$025",
    fontFamily: "$meta",
    color: "$primary",
  });

  const copyOnClick = (color) => {
    setCopyText(`$${color.toLowerCase()}${group == "static" ? "-static" : ""}`);
  };

  return (
    <>
      <Grid maxSize={"120px"}>
        {colorGroupArray.map((color) => (
          <Swatch key={color} onClick={copyOnClick}>
            <ColorExample
              css={{
                backgroundColor: `$${color}${
                  group == "static" ? "-static" : ""
                }`,
              }}
            />
            <ColorID>{color}</ColorID>
          </Swatch>
        ))}
      </Grid>
    </>
  );
};

ColorSamples.displayName = "Color Samples";

export default ColorSamples;

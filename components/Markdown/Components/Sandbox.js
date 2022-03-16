import React, { useEffect, useState } from "react";
import {
  SandpackPreview,
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  UnstyledOpenInCodeSandboxButton,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { useTheme } from "next-themes";
import {
  Box,
  styled,
  Icon,
  theme,
  globalCss,
  Button,
} from "@washingtonpost/wpds-ui-kit";
import packageJson from "../../../package.json";
import packageJsonLock from "../../../package-lock.json";
import InlineSVG from "./inlineSVG";

const sandboxGlobalcss = globalCss({
  ".sp-preview-iframe": {
    background: theme.colors.gray500,
    border: 0,
    width: "100%",
    minHeight: 300,
    overflow: "hidden",

    // style the scrollbar
    "&::-webkit-scrollbar": {
      width: "0",
      height: "0",
      backgroundColor: "transparent",
    },
    // style the scrollbar handle
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
      borderRadius: "0",
    },
    // style the scrollbar handle on hover
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "transparent",
    },
  },
  ".sp-preview-container": {
    background: "theme.colors.secondary",
    height: 300,
    overflow: "hidden",
    "&::-webkit-scrollbar": {
      width: "0",
      height: "0",
      backgroundColor: "transparent",
    },
    // style the scrollbar handle
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
      borderRadius: "0",
    },
    // style the scrollbar handle on hover
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "transparent",
    },
  },
  ".sp-layout": {
    borderColor: "transparent",
    borderBottomLeftRadius: "0 !important",
    borderBottomRightRadius: "0 !important",
    background: "$secondary !important",
  },

  ".sp-code-editor": {
    py: "var(--sp-space-2)",
    background: "$secondary",
  },

  ".sp-wrapper": {
    "--sp-colors-fg-active": "#1f2933",
    "--sp-colors-fg-default": "#757678",
    "--sp-colors-fg-inactive": "#e4e7eb",
    "--sp-colors-bg-active": "#e4e7eb",
    "--sp-colors-bg-default": "#f8f9fb",
    "--sp-colors-bg-default-overlay": "rgba(248,249,251,0.8117647058823529)",
    "--sp-colors-bg-input": "#fff",
    "--sp-colors-accent": "#64d2ff",
    "--sp-colors-bg-error": "#ffcdca",
    "--sp-colors-fg-error": "#811e18",
    "--sp-layout-height": "300px",
    "--sp-font-size": "14px",
    "--sp-font-body":
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    "--sp-font-mono":
      '"Fira Mono","DejaVu Sans Mono",Menlo,Consolas,"Liberation Mono",Monaco,"Lucida Console",monospace',
    "--sp-space-1": "4px",
    "--sp-space-2": "8px",
    "--sp-space-3": "12px",
    "--sp-space-4": "16px",
    "--sp-space-5": "20px",
    "--sp-space-6": "24px",
    "--sp-space-7": "28px",
    "--sp-space-8": "32px",
    "--sp-border-radius": "4px",
    background: "$secondary",
    overflow: "hidden",
    fontSize: "var(--sp-font-size)",
    fontFamily: "var(--sp-font-body)",
    display: "block",
    boxSizing: "border-box",
    textRendering: "optimizeLegibility",
    WebkitTapHighlightColor: "transparent",
    WebkitFontSmoothing: "subpixel-antialiased",

    "&::-webkit-scrollbar": {
      width: "0",
      height: "0",
      backgroundColor: "transparent",
    },
    // style the scrollbar handle
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
      borderRadius: "0",
    },
    // style the scrollbar handle on hover
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "transparent",
    },
  },
  ".sp-preview-actions": {
    display: "none",
  },
  ".sp-overlay": {
    display: "none",
  },
});

const CodeIcon = (props) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.11 4.44 2 8l3.11 3.56.63-.72L3.25 8l2.49-2.84-.63-.72zm5.78 0-.63.72L12.75 8l-2.49 2.84.63.72L14 8l-3.11-3.56zm-4.56 8.28.88.28 2.5-9.72L8.82 3l-2.49 9.72z"
      fill={theme.colors.accessible}
    />
  </svg>
);

const CopyCodeButton = () => {
  const [copied, setCopied] = useState(false);
  const { sandpack } = useSandpack();
  const { files, activePath } = sandpack;
  const code = files[activePath].code;

  // set the copied state to false after a second
  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copied]);

  return (
    <Button
      icon="left"
      isOutline
      variant="primary"
      css={{
        border: 0,
        fontWeight: "$light",
      }}
      density="compact"
      onClick={() => {
        // copy code to clipboard
        navigator.clipboard.writeText(code);
        setCopied(true);
      }}
      aria-label="Copy code to clipboard"
    >
      <Icon size="100" label="Copy code to clipboard">
        <InlineSVG
          cushion="none"
          path="/img/doc-icons/clipboard.svg"
          height="16"
          width="16"
        />
      </Icon>
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
};

const lightTheme = {
  palette: {
    activeText: "#166dfc",
    defaultText: "#666666",
    inactiveText: "#e9e9e9",
    activeBackground: "#dde6f2",
    defaultBackground: "#ffffff",
    inputBackground: "#ffffff",
    accent: "#166dfc",
    errorBackground: "#ffffff",
    errorForeground: "#f27b81",
  },
  syntax: {
    plain: "#111111",
    comment: {
      color: "#999",
      fontStyle: "italic",
    },
    keyword: "#166dfc",
    tag: "#498a0c",
    punctuation: "#111111",
    definition: "#092c65",
    property: "#166dfc",
    static: "#b16e00",
    string: "#498a0c",
  },
  typography: {
    bodyFont:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    monoFont:
      '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    fontSize: "14px",
    lineHeight: "1.4",
  },
};

const darkTheme = {
  palette: {
    activeText: "#1761f1",
    defaultText: "#868585",
    inactiveText: "#e9e9e9",
    activeBackground: "#0f1218",
    defaultBackground: "#020202",
    inputBackground: "#020202",
    accent: "#1761f1",
    errorBackground: "#020202",
    errorForeground: "#f27b81",
  },
  syntax: {
    plain: "#f3f3f3",
    comment: {
      color: "#f3f3f3",
      fontStyle: "italic",
    },
    keyword: "#166dfc",
    tag: "#517c2a",
    punctuation: "#f3f3f3",
    definition: "#cdd4df",
    property: "#166dfc",
    static: "#906629",
    string: "#517c2a",
  },
  typography: {
    bodyFont:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    monoFont:
      '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    fontSize: "14px",
    lineHeight: "1.4",
  },
};

const OpenInSandboxButton = styled(UnstyledOpenInCodeSandboxButton, Button, {});

const CustomSandpack = ({ isGuide, withPreview = false, hideNavBar = false, children }) => {
  sandboxGlobalcss();

  const [showCode, setShowCode] = useState(!withPreview);
  const { resolvedTheme } = useTheme();
  const [sandboxTheme, setSandboxTheme] = useState("");
  const [bodyBackground, setBodyBackground] = useState("$gray500");
  const [sandboxEmbedTheme, setSandboxEmbedTheme] = useState(lightTheme);

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setSandboxEmbedTheme(darkTheme);
      setSandboxTheme("darkTheme.className");
    } else {
      setSandboxTheme("'light'");
      setSandboxEmbedTheme(lightTheme);
    }
    setBodyBackground("$gray500");
  }, [resolvedTheme]);

  const AppCode = `import {
    globalCss,
    styled,
    darkTheme,
    theme,
    globalStyles,
    darkModeGlobalStyles,
    Icon
  } from "@washingtonpost/wpds-ui-kit";
  import Example from "./Example";
  import Success from "@washingtonpost/wpds-assets/asset/success";
  import Warning from "@washingtonpost/wpds-assets/asset/warning";
  import Info from "@washingtonpost/wpds-assets/asset/info";
  import Error from "@washingtonpost/wpds-assets/asset/error";
  import warning from "@washingtonpost/wpds-assets/asset/warning";
  const Canvas = styled("div", {
    background: "$gray500",
    color: "$accessible",
    padding: "$100",
    width: "100vw",
    height: "100vh",
    margin: "0 auto",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  });
  const Guide = styled("div", {
    position: "absolute",
    padding:"$100",
    display: "flex",
    alignItems: "center",
    gap:"$025",
    width: "100%",
    top: "0",
    left: "0",
    variants: {
      variant: {
        success: {
          color: theme.colors.success
        },
        error: {
          color: theme.colors.error
        },
        warning: {
          color: theme.colors.warning
        },
        information: {
          color: theme.colors.signal
        }
      }
    }
  });
  const Rule = styled("div", {
    height: "2px",
    width: "100%",
    variants: {
      variant: {
        success: {
          backgroundColor: theme.colors.success
        },
        error: {
          backgroundColor: theme.colors.error
        },
        warning: {
          backgroundColor: theme.colors.warning
        },
        information: {
          backgroundColor: theme.colors.signal
        }
      }
    }
  });
  const GetIcon=({variant})=>{
    switch(variant){
      case 'success':
        return <Icon size="200"><Success/></Icon>
      case 'warning':
        return <Icon size="200"><Warning/></Icon>
      case 'information':
        return <Icon size="200"><Info/></Icon>
      case 'error':
        return <Icon size="200"><Error/></Icon>
      default:
        return null;
    }
  }
  export default function App() {
    globalStyles();
    darkModeGlobalStyles();
    return (
      <Canvas className={${sandboxTheme}}>
          <Guide variant="${isGuide}">
            <GetIcon variant="${isGuide}" />
            <Rule variant="${isGuide}"></Rule>
          </Guide>
        <Example />
      </Canvas>
    );
  }`;

  return (
    <SandpackProvider
      template="react"
      customSetup={{
        dependencies: {
          "@washingtonpost/wpds-assets":
            packageJson.dependencies["@washingtonpost/wpds-assets"],
          "@washingtonpost/wpds-ui-kit":
            packageJson.dependencies["@washingtonpost/wpds-ui-kit"],
          ...packageJsonLock.packages[
            "node_modules/@washingtonpost/wpds-ui-kit"
          ].dependencies,
          ...packageJsonLock.packages["node_modules/@washingtonpost/wpds-theme"]
            .peerDependencies,
          "@radix-ui/react-checkbox":
            packageJson.dependencies["@radix-ui/react-checkbox"],
          "@stitches/react": packageJson.dependencies["@stitches/react"],
        },
        files: {
          "/App.js": AppCode,
          "/Example.js": {
            code: children,
            active: true,
          },
        },
      }}
    >
      <SandpackLayout theme={sandboxEmbedTheme}>
        {withPreview && (
          <SandpackPreview
            showRefreshButton={false}
            showOpenInCodeSandbox={false}
          />
        )}
        {showCode && (
          <SandpackCodeEditor
            customStyle={{
              border: "1px solid var(--wpds-colors-subtle)",
            }}
            showTabs={false}
            showNavigator={false}
            showRunButton={false}
            initMode="user-visible"
          />
        )}
      </SandpackLayout>
      <Box
        as="nav"
        css={{
          border: "1px solid $subtle",
          flexGrow: 0,
          width: "100%",
          flexDirection: "row",
          gap: "$075",
          padding: "$050 $075 $050 $100",
          background: "$gray500",
          display: Boolean(hideNavBar) ? "none" : "flex",
          "@sm": {
            display: withPreview ? "flex" : "none",
          },
        }}
      >
        <Box>
          {withPreview && (
            <Button
              icon="left"
              isOutline
              variant="primary"
              onClick={() => {
                setShowCode(!showCode);
              }}
              css={{
                border: 0,
                fontWeight: "$light",
              }}
              density="compact"
            >
              <Icon>
                <CodeIcon />
              </Icon>
              {showCode ? "Hide" : "Show"} code
            </Button>
          )}
        </Box>
        <Box
          css={{
            alignSelf: "flex-end",
            flex: "1 1 auto",
            display: "flex",
            justifyContent: "flex-end",
            gap: "$100",
            "@sm": {
              display: "none",
            },
          }}
        >
          <OpenInSandboxButton
            icon="none"
            isOutline
            variant="primary"
            css={{
              border: 0,
              gap: 0, // there is a form descendent in the open in sandbox button
              fontWeight: "$light",
            }}
            density="compact"
          >
            Open in CodeSandbox
          </OpenInSandboxButton>
          <CopyCodeButton />
        </Box>
      </Box>
    </SandpackProvider>
  );
};

export default React.memo(CustomSandpack);

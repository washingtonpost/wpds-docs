module.exports = {
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        {
          source: "/components",
          destination: "/components/design",
        },
        {
          source: "/foundations",
          destination: "/foundations/principles",
        },
        {
          source: "/",
          destination: "/foundations",
        },
      ],
      fallback: [
        {
          source: "/v0",
          destination: "https://v0.wpds.docs.preview.now.washingtonpost.com/v0",
        },
        {
          source: "/v0/:slug*",
          destination:
            "https://v0.wpds.docs.preview.now.washingtonpost.com/v0/:slug*",
        },
        {
          source: "/v0/assets/:slug*",
          destination:
            "https://v0.wpds.docs.preview.now.washingtonpost.com/assets/:slug*",
        },
        {
          source: "/v0/img/:slug*",
          destination:
            "https://v0.wpds.docs.preview.now.washingtonpost.com/img/:slug*",
        },
      ],
    };
  },
};

const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Proxy the requests to the Cloudinary API
app.use(
  "/api/cloudinary",
  createProxyMiddleware({
    target: "https://api.cloudinary.com/v1_1/dl5blx3gw",
    changeOrigin: true,
    pathRewrite: {
      "^/api/cloudinary": "", // Remove the /api/cloudinary prefix
    },
  }) //hey
);

// Start the server
app.listen(5000, () => {
  console.log("Proxy server is running on port 5000");
});

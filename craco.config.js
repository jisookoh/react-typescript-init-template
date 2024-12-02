const path = require("path");
// craco를 통해 eject를 하지 않고 webpack에 절대 경로 설정을 할 수 있음
module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@queries": path.resolve(__dirname, "src/queries"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
};

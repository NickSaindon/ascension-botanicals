import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#9f1102",
    colorSuccess: "#9f1102",
    colorWarning: "#9f1102",
    colorError: "#9f1102",
    colorInfo: "#9f1102",

    fontSize: 14,

    borderRadius: 6,

    colorBgContainer: "#ffffff",
    colorBgLayout: "#ffffff",
  },
  components: {
    Button: {
      colorPrimary: "#9f1102",
    },
    Card: {
      borderRadius: 6,
    },
    Menu: {
      itemBorderRadius: 6,
    },
    Input: {
      controlHeight: 36,
      borderRadius: 6,
    },
  },
};

export default theme;

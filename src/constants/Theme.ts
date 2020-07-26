import { createMuiTheme } from "@material-ui/core/styles";

export const Theme = createMuiTheme({
  //色の設定
  palette: {
    type: "light",
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#ffeb3b",
    },
  },
  //テキストの設定
  typography: {
    htmlFontSize: 10,
    fontSize: 14,
    h1: {
      fontSize: "2.4rem",
    },
    body1: {
      fontSize: "1.6rem",
    },
    body2: {
      fontSize: "1.0rem",
    },
    // ボタンのラベルが大文字になるのを防ぐ
    button: {
      textTransform: "none",
    },
  },
  //部品のスタイルの設定
  props: {
    MuiTextField: {
      color: "primary",
      variant: "outlined",
    },
    MuiButton: {
      color: "primary",
      variant: "outlined",
    },
    MuiCheckbox: {
      color: "primary",
    },
    MuiRadio: {
      color: "primary",
    },
    MuiSwitch: {
      color: "primary",
    },
    MuiList: {
      dense: true,
    },
    MuiTable: {
      size: "small",
    },
  },
});

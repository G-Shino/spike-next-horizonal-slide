import { css } from "@emotion/core";
import emotionReset from "emotion-reset";
import { Color } from "./../constants/Color";

const globalCSS = css`
  ${emotionReset}
  html {
    font-size: 62.5%;
  }

  body {
    color: ${Color.FONT_COLOR};
    font-size: 1.4rem;
    font-family: "Jost", "YuGothic", "Yu Gothic", "游ゴシック", "Meiryo",
      "メイリオ", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN",
      -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    background-color: ${Color.BASE_COLOR};
  }

  ul,
  ol {
    list-style: none;
  }
`;

export default globalCSS;

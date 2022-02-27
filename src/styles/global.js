import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw"; //converts pixels to viewport width

export const Global = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pangolin&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;

  }
  :root {
    font-size: ${px2vw(24)};
    background-color: #74EBD5;
    background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);
    height: 100vh;
      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;

export default Global;

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    fontWeight: {
      extraSemiBold: number;
      bold: number;
      semiBold: number;
      medium: number;
      regular: number;
    };
  }
}

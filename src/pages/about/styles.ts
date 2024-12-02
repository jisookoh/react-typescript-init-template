import { Typography } from "@styles/fonts";
import styled from "styled-components";

export namespace S {
  export const Container = styled.div``;

  export const Text = styled.p`
    ${Typography.Large};
    color: ${({ theme }) => theme.colors.primary};
  `;
}

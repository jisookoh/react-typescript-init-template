import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const CommonLayout = () => {
  return (
    <S.Container>
      공통 레이아웃
      <Outlet />
    </S.Container>
  );
};

namespace S {
  export const Container = styled.div``;
}

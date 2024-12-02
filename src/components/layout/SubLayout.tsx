import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const SubLayout = () => {
  return (
    <S.Container>
      서브 레이아웃
      <Outlet />
    </S.Container>
  );
};

namespace S {
  export const Container = styled.div``;
}

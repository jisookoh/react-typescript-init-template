import { useLoaderData } from "react-router-dom";
import { S } from "./styles";

export default function Greeting() {
  const { text } = useLoaderData();

  return (
    <S.Container>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}

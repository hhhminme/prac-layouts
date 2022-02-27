import React from "react";

import * as S from "./HomeStyles";

export default function Home({ boxData }) {
  return (
    <>
      <S.Title>glassmorphism responsive and adaptive layouts</S.Title>
      <S.Container>
        {boxData.map((box) => (
          <S.Box key={box.id}>
            <S.BoxTitle>{box.title}</S.BoxTitle>
            <S.BoxText>{box.text}</S.BoxText>
          </S.Box>
        ))}
      </S.Container>
    </>
  );
}

import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  padding-top: ${px2vw(40)};
  font-size: 2rem;
  text-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  height: 100%;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  text-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #444;
  font-size: 1.5rem;
  padding: ${px2vw(20)};

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

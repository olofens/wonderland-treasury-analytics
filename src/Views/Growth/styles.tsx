import styled from "styled-components";

export const ChartsContainer = styled.div`
  min-height: 600px;
  margin: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
`;

export const FlexMember = styled.div`
  flex-grow: 1;
  flex-basis: 40%;
`;

export const Wrapper = styled.div`
  font-family: Montserrat;
`;

export const ChartCardContainer = styled.div`
  height: 500px;
  background: rgba(36, 39, 41, 0.1);
  -webkit-backdrop-filter: blur(100px);
  backdrop-filter: blur(100px);
  padding: 24px;
  border-radius: 10px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
`;

export const ChartsWrapper = styled.div`
  padding: 24px;
  height: 100%;
  max-width: 1200px;
  margin: auto;
`;

export const TitleTextWrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  text-align: center;
`;

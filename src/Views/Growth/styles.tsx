import styled from "styled-components";

export const ChartsContainer = styled.div`
  width: 80%;
  min-height: 600px;
  margin: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 24px;
`;

export const FlexMember = styled.div`
  flex: 1;
  max-width: 600px;
`;

export const Wrapper = styled.div`
  font-family: Montserrat;
`;

export const ChartCardContainer = styled.div`
  height: 500px;
  background: rgba(0, 0, 0, 0.2);
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

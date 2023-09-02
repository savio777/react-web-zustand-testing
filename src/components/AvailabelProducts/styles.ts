import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  border-bottom: 1px solid gray;
  margin-bottom: 24px;
  padding-bottom: 24px;
  gap: 10px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 12px;
  min-height: 360px;
  min-width: 211px;
  max-height: 360px;
  max-width: 211px;

  h5 {
    color: black;
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    color: gray;
    font-weight: bold;
    font-size: 1rem;
    text-decoration: underline;
  }

  button {
    text-align: center;
    border: 1px solid black;
    padding: 6px;
    font-size: 1rem;
    color: white;
    background-color: black;
    text-transform: uppercase;
  }
`;

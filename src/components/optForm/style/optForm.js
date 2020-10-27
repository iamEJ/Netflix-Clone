import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin: auto;
  margin-top: 20px;
  flex-wrap: wrap;
  max-width: 1000px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: #fff;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  curson: pointer;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: #fff;
  text-align: center;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: green;
  align-self: center;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  background-color: #2b2c2c;
  padding-right: 50px;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  width: 50%;
  background-color: #343636;
  padding-left: 50px;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: red;
`;

export const SectionName = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LastName = styled.p`
  font-size: 30px;
`;

export const Name = styled.p`
  font-size: 80px;
  font-weight: bold;
  color: #e0a80d;
`;

export const Function = styled.p`
  padding-top: 10px;
  font-size: 20px;
`;
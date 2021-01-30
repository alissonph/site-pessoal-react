import styled from 'styled-components';

export const Container = styled.div`
  min-width: 300px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 40%;
  background-color: #2b2c2c;
  padding-right: 50px;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
    align-items: center;
    width: 100%;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  background-color: #343636;
  padding-left: 50px;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
    align-items: center;
    width: 100%;
  }
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
  
  .lastName{
    font-size: 3rem;
  }
  .name{
    font-size: 8rem;
    font-weight: bold;
    color: #e0a80d;
  }
  .function{
    padding-top: 10px;
    font-size: 2rem;
  }
`;

export const SectionLink = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const LinkButton = styled.a`
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  width: 35px;
  height: 35px;
  border-radius: 6px;
  cursor: pointer;
  background-color: #2b2c2c;

  img{
    width: 25px;
    height: 25px;
    filter: invert(73%) sepia(4%) saturate(85%) hue-rotate(169deg) brightness(92%) contrast(84%);
  }

  :hover{
    img {
      width: 27px;
      height: 27px;
      filter: invert(83%) sepia(47%) saturate(4126%) hue-rotate(1deg) brightness(94%) contrast(90%);
    }
  }
`;

export const SectionInfo = styled.div`
  margin-top: 50px;
  border-top: 1px solid #CCC;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1180px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 428px) {
    grid-template-columns: repeat(1, 1fr);
    position: relative;
    bottom: 0px;
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  .title{
    font-size: 1.6rem;
    font-weight: bold;
  }
  .description{
    margin-top: 7px;
    font-size: 1.2rem;
  }
`;

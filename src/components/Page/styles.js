import styled from 'styled-components';

export const Container = styled.div`

`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: green;

  
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 40%;
  background-color: #2b2c2c;
  padding-right: 50px;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
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
  
  .lastName{
    font-size: 30px;
  }
  .name{
    font-size: 80px;
    font-weight: bold;
    color: #e0a80d;
  }
  .function{
    padding-top: 10px;
    font-size: 20px;
  }
`;

export const SectionLink = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:10px;
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
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 30px;
  height: 100px;
  border-top: 1px solid #CCC;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  .title{
    font-size: 16px;
    font-weight: bold;
  }
  .description{
    margin-top: 7px;
    font-size: 12px;
  }
`;

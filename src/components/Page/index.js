import React from 'react';
import { Container, Section, SectionHeader, SectionContent, Avatar, SectionName, SectionLink, LinkButton, SectionInfo, InfoItem} from './styles';
import perfil from '../../assets/images/perfil.jpg';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';

export default function Page() {
  return (
    <Container>
      <Section>
        <SectionHeader>
          <Avatar src={perfil} />
        </SectionHeader>
        <SectionContent>
          <SectionName>
            <p className="lastName">HAUSMANN</p>
            <p className="name">ALISSON</p>
            <p className="function">Desenvolvedor de Software Pleno</p>
          </SectionName>
          <SectionLink>
            <LinkButton href="https://www.linkedin.com/in/alissonph" target="_blank">
              <img src={linkedin} alt="Linkedin"/>
            </LinkButton>
            <LinkButton href="https://github.com/alissonph" target="_blank"n>
              <img src={github} alt="Github"/>
            </LinkButton>
          </SectionLink>
          <SectionInfo>
            <InfoItem>
              <p className="title">Localização</p>
              <p className="description">Artur Nogueira - SP</p>
            </InfoItem>
            <InfoItem>
              <p className="title">Telefone</p>
              <p className="description">(19) 99117-0250</p>
            </InfoItem>
            <InfoItem>
              <p className="title">E-mail</p>
              <p className="description">alissonphausmann@hotmail.com</p>
            </InfoItem>
            <InfoItem>
              <p className="title">Linkedin</p>
              <p className="description">www.linkedin.com/in/alissonph</p>
            </InfoItem>
          </SectionInfo>
        </SectionContent>
      </Section>
      <Section>
        TESTE
      </Section>
    </Container>
  )
}

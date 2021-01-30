import React from 'react';
import { Container, Section, SectionHeader, SectionContent, Avatar, SectionName, SectionLink, LinkButton, SectionInfo, InfoItem} from './styles';
import perfil from '../../assets/images/perfil.jpg';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';

export default function Page() {
  return (
    <Container>
      <Section>
        <SectionHeader>
          <Avatar src={perfil} />
        </SectionHeader>
        <SectionContent>
          <div>
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
              <LinkButton href="https://api.whatsapp.com/send?phone=5519991170250&text=Ol%C3%A1%20Alisson" target="_blank"n>
                <img src={whatsapp} alt="Whatsapp"/>
              </LinkButton>
            </SectionLink>
          </div>
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
              <p className="description"><a href="mailto:alissonphausmann@hotmail.com">alissonphausmann@hotmail.com</a></p>
            </InfoItem>
            <InfoItem>
              <p className="title">Linkedin</p>
              <p className="description"><a href="https://www.linkedin.com/in/alissonph" target="_blank">www.linkedin.com/in/alissonph</a></p>
            </InfoItem>
          </SectionInfo>
        </SectionContent>
      </Section>
    </Container>
  )
}

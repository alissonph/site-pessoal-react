import React from 'react';
import { Container, Section, SectionHeader, SectionContent, Avatar, SectionName, LastName, Name, Function } from './styles';
import perfil from '../../assets/images/perfil.jpg'

export default function Page() {
  return (
    <Container>
      <Section>
        <SectionHeader>
          <Avatar src={perfil} />
        </SectionHeader>
        <SectionContent>
          <SectionName>
            <LastName>HAUSMANN</LastName>
            <Name>ALISSON</Name>
            <Function>Desenvolvedor de Software Pleno</Function>
          </SectionName>
        </SectionContent>
      </Section>
      <Section>
        Teste Alisson
      </Section>
    </Container>
  )
}

import React from 'react';
import { Container, Section, SectionHeader, SectionTitle, SectionContent, SectionContentText, Avatar, SectionName, SectionLink, LinkButton, SectionInfo, InfoItem, ExperienceInfo, SectionExperience, SectionExperienceInfo, EducationInfo, SectionTechnologies, Technology, Footer} from './styles';
import { Switch } from '../Switch';
import perfil from '../../assets/images/perfil.jpeg';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import data from '../../data/data.json';

export default function Page({ toggleTheme }) {

  return (
    <Container>
      <Section height="100vh">
        <SectionHeader>
          <Avatar src={perfil} />
        </SectionHeader>
        <SectionContent header>
          <Switch id="switch" className="switch">
            <input type="checkbox" id="slider" onChange={toggleTheme} />
            <span className="slider round"></span>
          </Switch>
          <div>
            <SectionName>
              <p className="lastName">{data.lastName}</p>
              <p className="name">{data.name}</p>
              <p className="function">{data.function}</p>
            </SectionName>
            <SectionLink>
              <LinkButton href={data.linkedinLink} target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="Linkedin"/>
              </LinkButton>
              <LinkButton href={data.githubLink} target="_blank" rel="noopener noreferrer">
                <img src={github} alt="Github"/>
              </LinkButton>
              <LinkButton href={data.whatsappLink} target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="Whatsapp"/>
              </LinkButton>
            </SectionLink>
          </div>
          <SectionInfo>
            {data.info.map((item) =>
              <InfoItem key={item.title}>
                <p className="title">{item.title}</p>
                {item.link === '' && <p className="description">{item.description}</p>}
                {item.link !== '' && <p className="description"><a href={item.link} target="_blank" rel="noopener noreferrer">{item.description}</a></p>}
              </InfoItem>
            )}
          </SectionInfo>
        </SectionContent>
      </Section>
      <Section height="auto">
        <SectionHeader odd>
          <SectionTitle>
            <p className="title">Introdução</p>
            <p className="subTitle">Um pouco mais sobre mim</p>
          </SectionTitle>
        </SectionHeader>
        <SectionContent odd>
          <SectionContentText>
            <p className="text" dangerouslySetInnerHTML={ { __html: data.intro } }>
              
            </p>
          </SectionContentText>
        </SectionContent>
      </Section>
      <Section height="auto">
        <SectionHeader>
          <SectionTitle>
            <p className="title">Experiência</p>
            <p className="subTitle">Experiências profissionais</p>
          </SectionTitle>
        </SectionHeader>
        <SectionContent>
          <SectionContentText>
            {data.experience.map((item) =>
              <SectionExperience key={item.companyName}>
              <SectionExperienceInfo>
                <div className="badge">
                </div>
                <ExperienceInfo>
                  <p className="yearInfo">{item.year}</p>
                  <p className="companyName">{item.companyName}</p>
                  <p className="functionName">{item.functionName}</p>
                  <p className="city">{item.city}</p>
                </ExperienceInfo>
              </SectionExperienceInfo>
              <div>
                <p className="text" dangerouslySetInnerHTML={ { __html: item.description } }>
                </p>
              </div>
            </SectionExperience>
            )}
          </SectionContentText>
        </SectionContent>
      </Section>
      <Section height="auto">
        <SectionHeader odd>
          <SectionTitle>
            <p className="title">Educação</p>
            <p className="subTitle">Formação Acadêmica</p>
          </SectionTitle>
        </SectionHeader>
        <SectionContent odd>
          <SectionContentText>
            {data.education.map((item) =>
              <SectionExperience key={item.courseName}>
                <SectionExperienceInfo>
                  <div className="badge">
                  </div>
                  <EducationInfo>
                    <p className="yearInfo">{item.year}</p>
                    <p className="companyName">{item.companyName}</p>
                    <p className="courseName">{item.courseName}</p>
                    <p className="city">{item.city}</p>
                  </EducationInfo>
                </SectionExperienceInfo>
              </SectionExperience>
            )}
          </SectionContentText>
        </SectionContent>
      </Section>
      <Section height="auto">
        <SectionHeader>
          <SectionTitle>
            <p className="title">Tecnologias</p>
            <p className="subTitle">Linguagens e Tecnologias</p>
          </SectionTitle>
        </SectionHeader>
        <SectionContent>
          <SectionContentText>
            <SectionTechnologies>
              {data.technologies.map((item) =>
                  <Technology key={item}>
                    <div className="badge">
                    </div>
                    <p>{item}</p>
                  </Technology>
              )}
            </SectionTechnologies>
          </SectionContentText>
        </SectionContent>
      </Section>
      <Footer>
        <p>
          2021 | Feito em React | Desenvolvido por: Alisson Hausmann
        </p>
      </Footer>
    </Container>
  )
}

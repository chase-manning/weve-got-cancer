import styled from "styled-components";
import bg from "../assets/hero-bg.png";
import Button from "./Button";
import { AMAZON_LINK } from "../app/constants";

const StyledHero = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  padding: 10rem;
  position: relative;

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 5rem;
    gap: 10rem;
    height: auto;
  }

  @media (max-width: 900px) {
    padding: 5rem 2rem;
  }
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.25;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`;

const Author = styled.h4`
  font-size: 2.8rem;
  color: var(--primary);
  font-family: "PT Serif", serif;
  letter-spacing: 1rem;
  text-transform: uppercase;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 2.4rem;
    text-align: center;
  }
`;

const Header = styled.h1`
  font-size: 5.4rem;
  color: var(--primary);
  font-family: "PT Serif", serif;
  font-style: italic;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 4.2rem;
    text-align: center;
  }
`;

const SubHeader = styled.h3`
  font-size: 3.2rem;
  color: var(--primary);
  font-family: "PT Serif", serif;
  font-weight: normal;
  max-width: 65rem;

  @media (max-width: 900px) {
    font-size: 2.8rem;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2.6rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }
`;

const Section = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  height: 80dvh;

  @media (max-width: 900px) {
    height: auto;
    width: 90%;
  }
`;

const Hero = () => {
  return (
    <StyledHero id="home">
      <Background src={bg} alt="Hero Background Image" />
      <Section>
        <TextArea>
          <Author>Kushla Rolls</Author>
          <Header>
            We've Got Cancer:
            <br />
            I'll Start at the Beginning
          </Header>
          <SubHeader>
            “This started as a diary, which then became my saviour, which in
            turn has become a book. I wrote it, in the end, for you.”
          </SubHeader>
          <ButtonContainer>
            <Button link="/#about">Learn more</Button>
            <Button primary link={AMAZON_LINK} newTab>
              Buy on Amazon
            </Button>
          </ButtonContainer>
        </TextArea>
      </Section>
      <Section>
        <Image src="/hero-01.png" alt="We've Got Cancer Book" />
      </Section>
    </StyledHero>
  );
};

export default Hero;

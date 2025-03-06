import styled from "styled-components";
import bg from "../assets/hero-bg.png";
import Button from "./Button";
import { AMAZON_LINK } from "../app/constants";

const StyledHero = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  padding: 10rem;
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
`;

const Header = styled.h1`
  font-size: 5.4rem;
  color: var(--primary);
  font-family: "PT Serif", serif;
  font-style: italic;
  font-weight: bold;
`;

const SubHeader = styled.h3`
  font-size: 3.2rem;
  color: var(--primary);
  font-family: "PT Serif", serif;
  font-weight: normal;
  max-width: 65rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2.6rem;
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
`;

const Hero = () => {
  return (
    <StyledHero>
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

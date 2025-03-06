import styled from "styled-components";
import Button from "./Button";
import { AMAZON_LINK } from "../app/constants";

const StyledAbout = styled.div`
  width: 100%;
  padding: 10rem 12rem;
  background: var(--bg-2);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 3rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  position: relative;
  max-width: 120rem;
  margin-bottom: 1rem;

  @media (max-width: 900px) {
    gap: 2rem;
  }
`;

const Header = styled.h2`
  font-size: 4.8rem;
  color: var(--primary);
  font-family: "PT Serif", serif;
  font-weight: bold;
  margin-bottom: 2rem;
  width: 100%;
  border-bottom: 0.2rem solid var(--primary);
  padding-bottom: 1rem;

  @media (max-width: 900px) {
    font-size: 3.6rem;
  }
`;

const Paragraph = styled.p`
  font-size: 2.8rem;
  color: var(--primary);
  font-weight: normal;
  line-height: 1.4;

  @media (max-width: 900px) {
    font-size: 2.4rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2.6rem;

  @media (max-width: 900px) {
    margin-top: 2rem;
  }
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  position: absolute;
  bottom: 0;
  right: 0;

  @media (max-width: 900px) {
    position: relative;
    margin-top: 2rem;
  }
`;

const BoldQuote = styled.p`
  font-size: 1.6rem;
  color: var(--primary);
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 1.4rem;
  }
`;

const Quote = styled.p`
  font-size: 1.6rem;
  color: var(--primary);
  font-weight: normal;
  font-style: italic;

  @media (max-width: 900px) {
    font-size: 1.4rem;
  }
`;

const About = () => {
  return (
    <StyledAbout id="about">
      <TextContent>
        <Header>About the Book</Header>
        <Paragraph>
          My partner was suddenly diagnosed with Multiple Myeloma with 80-90
          percent saturation of cancer in his blood - plus a chromosome deletion
          to top it off. He's now in stringent complete remission. I've told the
          story from beginning to end. You get it all from diagnosis, medical
          aspects, detailed description of the treatments he underwent like
          chemotherapy and stem cell transplant, side effects, and amazing
          results. There are a few twists and turns, tips that are good to know,
          and I suppose there's a love story entwined. I seriously hope with all
          my heart that this book can offer you some comfort, advice, insight,
          understanding, knowledge and hope within these pages.
        </Paragraph>
        <ButtonContainer>
          <Button link={AMAZON_LINK} primary newTab>
            Buy now on Amazon
          </Button>
        </ButtonContainer>
        <QuoteContainer>
          <BoldQuote>"Kia Kaha. Tena koutou e te whanau."</BoldQuote>
          <Quote>Stay strong. Welcome to our family.</Quote>
          <Quote>(Te reo Maori, Aotearoa, New Zealand)</Quote>
        </QuoteContainer>
      </TextContent>
    </StyledAbout>
  );
};

export default About;

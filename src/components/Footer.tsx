import styled from "styled-components";
import { AMAZON_LINK, AUTHOR_LINK } from "../app/constants";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 5rem 14rem;
  background: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 3rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 120rem;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const Section = styled.div<{ flex?: number }>`
  flex: ${(props) => props.flex || 1};
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 900px) {
    gap: 0.6rem;
  }
`;

const Author = styled.h4`
  font-size: 2.8rem;
  color: var(--bg);
  font-family: "PT Serif", serif;
  letter-spacing: 1rem;
  text-transform: uppercase;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const FooterHeader = styled.h5`
  font-size: 2.4rem;
  color: var(--bg);
  font-weight: bold;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const FooterLink = styled.a`
  font-size: 2.4rem;
  color: var(--bg);
  font-weight: normal;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <Section>
          <Author>Kushla Rolls</Author>
        </Section>
        <Section>
          <FooterHeader>Links</FooterHeader>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href={AMAZON_LINK} target="_blank">
            Buy on Amazon
          </FooterLink>
          <FooterLink href="/#about">About the book</FooterLink>
          <FooterLink href="/#author">About the author</FooterLink>
        </Section>
        <Section flex={0.5}>
          <FooterHeader>Contact</FooterHeader>
          <FooterLink href="mailto:modernmindkushla@gmail.com" target="_blank">
            Email
          </FooterLink>
          <FooterLink href={AUTHOR_LINK} target="_blank">
            Amazon
          </FooterLink>
        </Section>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;

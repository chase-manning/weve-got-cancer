import styled from "styled-components";

const Container = styled.div`
  width: auto;
  position: relative;
`;

const StyledButton = styled.a<{ primary?: boolean }>`
  height: 6.1rem;
  padding: 0 3rem;
  border: none;
  background: ${(props) =>
    props.primary ? "var(--primary)" : "var(--secondary)"};
  color: var(--bg);
  font-size: 2.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 1.5rem;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 900px) {
    height: 5.4rem;
    padding: 0 2.4rem;
    font-size: 2rem;
  }
`;

interface Props {
  primary?: boolean;
  link: string;
  newTab?: boolean;
  children: React.ReactNode;
}

const Button = ({ primary, link, children, newTab }: Props) => {
  return (
    <Container>
      <StyledButton
        primary={primary}
        href={link}
        target={newTab ? "_blank" : "_self"}
      >
        {children}
      </StyledButton>
    </Container>
  );
};

export default Button;

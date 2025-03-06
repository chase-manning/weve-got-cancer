import styled from "styled-components";

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
`;

interface Props {
  primary?: boolean;
  link: string;
  newTab?: boolean;
  children: React.ReactNode;
}

const Button = ({ primary, link, children, newTab }: Props) => {
  return (
    <StyledButton
      primary={primary}
      href={link}
      target={newTab ? "_blank" : "_self"}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

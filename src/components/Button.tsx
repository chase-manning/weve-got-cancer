import styled from "styled-components";

const StyledButton = styled.a<{ $primary?: boolean }>`
  height: 6.1rem;
  padding: 0 3rem;
  border: none;
  background: ${(props) =>
    props.$primary ? "var(--primary)" : "var(--secondary)"};
  color: var(--bg);
  font-size: 2.4rem;
  cursor: pointer;
  display: inline-flex;
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
    width: 100%;
  }
`;

interface Props {
  primary?: boolean;
  link: string;
  newTab?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  id?: string;
}

const Button = ({ primary, link, children, newTab, onClick, id }: Props) => {
  return (
    <StyledButton
      $primary={primary}
      href={link}
      target={newTab ? "_blank" : "_self"}
      onClick={() => {
        if (onClick) onClick();
      }}
      id={id}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

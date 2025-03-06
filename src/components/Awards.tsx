import styled from "styled-components";

import award01 from "../assets/awards/01.png";
import award02 from "../assets/awards/02.png";
import award03 from "../assets/awards/03.png";

const StyledAwards = styled.div`
  width: 100%;
  padding: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: var(--bg);

  @media (max-width: 900px) {
    padding: 3rem;
    gap: 1rem;
    justify-content: space-between;
  }
`;

const Award = styled.img`
  width: 20rem;
  object-fit: contain;

  @media (max-width: 900px) {
    width: calc(33% - 1rem);
  }
`;

const Awards = () => {
  return (
    <StyledAwards id="awards">
      <Award src={award01} alt="award" />
      <Award src={award02} alt="award" />
      <Award src={award03} alt="award" />
    </StyledAwards>
  );
};

export default Awards;

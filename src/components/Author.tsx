import styled from "styled-components";

const StyleAuthor = styled.div`
  width: 100%;
  padding: 10rem 12rem;
  background: var(--bg);
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
    margin-bottom: 1rem;
  }
`;

const Paragraph = styled.p`
  font-size: 2.8rem;
  color: var(--primary);
  font-weight: normal;
  line-height: 1.4;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const Author = () => {
  return (
    <StyleAuthor id="author">
      <TextContent>
        <Header>About the Author</Header>
        <Paragraph>
          Kushla was born and bred in New Zealand. In true Kiwi style she has
          travelled the world but always chosen to keep New Zealand as her home.
        </Paragraph>
        <Paragraph>
          Living in Auckland, Kushla has a private practice working
          predominantly as a therapist helping her clients through emotional
          distress. She has a love for philosophy and has over the past 25 years
          enjoyed a spiritual path of learning as she navigates her way through
          life. Her passions have led her desire to write, to reach further in
          helping others going through challenging times.
        </Paragraph>
        <Paragraph>
          Using her own real life experiences and knowledge, she writes in a
          simple story telling way bringing helpful information, tips, pitfalls,
          successes and opportunities of hope.
        </Paragraph>
      </TextContent>
    </StyleAuthor>
  );
};

export default Author;

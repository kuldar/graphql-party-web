// Libraries
import styled from 'styled-components'

// Locals
import Arrow from '../../assets/Arrow'

// Link Vote
const LinkVote = ({ votesCount, isVoted }) => (
  <Container isVoted={isVoted}>
    <Vote><Arrow /></Vote>
    <Count>{votesCount}</Count>
  </Container>
)

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem;
  border: 1px solid ${p => p.isVoted ? 'none' : p.theme.gray4};
  background-image: ${p => p.isVoted ? p.theme.purpleToBlue : 'none' };
  color: ${p => p.isVoted ? p.theme.white : p.theme.gray3 };
  border-radius: ${p => p.theme.radius};
  min-width: 2.5rem;
  margin-right: 1rem;

  &:hover {
    border: 1px solid ${p => p.isVoted ? 'none' : p.theme.purple};
    color: ${p => p.isVoted ? p.theme.white : p.theme.purple };
  }

  &:active {
    position: relative;
    top: 1px;
  }
`

const Vote = styled.div`
  svg { display: block; }
`

const Count = styled.div`
  margin-top: 0.5rem;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.125rem;
`

export default LinkVote
// Libraries
import styled from 'styled-components'

// Local
import { links } from '../../utils/data'

// Link
const Link = ({ id }) => {
  const link = links[id-1]

  return (
    <Card>
      {link.title}
      {link.oneliner}
    </Card>
  )
}

// Styles
const Card = styled.div`
  background-color: ${p => p.theme.white};
  box-shadow: ${p => p.theme.boxShadow};
  overflow: hidden;
  padding: 1rem;
`

export default Link
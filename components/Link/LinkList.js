// Libraries
import styled from 'styled-components'

// Locals
import LinkRow from './LinkRow'
import LinkListHeader from './LinkListHeader'

// Link List
const LinkList = ({ links }) => (
  <Card>
    <LinkListHeader />
    <List>
      { links.map((link, i) => <LinkRow link={link} key={i} />) }
    </List>
  </Card>
)

// Styles
const Card = styled.div`
  background-color: ${p => p.theme.white};
  box-shadow: ${p => p.theme.boxShadow};
`

const List = styled.div``

export default LinkList
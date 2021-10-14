import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 20px;  
  cursor: ${props => props.onClick ? 'pointer' : ''}
`

const Logo = ({ onClick }: { onClick?: () => void }) => {

  return <H1 onClick={onClick}>TODO</H1>
}

export default Logo

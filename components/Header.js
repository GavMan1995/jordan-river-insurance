import styled from 'styled-components'
import Link from 'next/link'

import { flexContainer } from '../styles/tools/mixins'
import { neutral6 } from '../styles/tools/colors'

const Header = styled.header`
  width: 100%;
  padding: 14px calc(50% - 600px);

  @media(max-width: 1228px) {
    padding: 14px;
  }

  > img {
    width: 100%;
    height: auto;
  } 
`

const Menu = styled.div`
  ${flexContainer('center', 'center')}
  width: 100%;

  > a {
    padding: 8px;
    color: ${neutral6}
  }
`

export default () => {
  return (
    <Header>
      <Link href='/'>
        <img
          src='/static/jri-logo.png'
          alt='jordan river insurance' />
      </Link>

      <Menu className='c-menu'>
        <Link prefetch href='/'><a>Home</a></Link>
        <Link prefetch href='/about'><a>About</a></Link>
        <Link prefetch href='/contact-us/our-location'><a>Our Location</a></Link>
        <a target='_blank' href='http://calendly.com/jri/call'>Schedule a Call</a>
      </Menu>
    </Header>
  )
}

import Link from 'next/link'
import { AppBar, Toolbar } from "@material-ui/core"
//import navStyles from '../styles/Nav.module.css'

const navLinks = [
  { title: `home`, path: `/` },
  { title: `about`, path: `/about` },
  { title: `projects`, path: `/projects` },
  { title: `software`, path: `/software` },
  { title: `space`, path: `/space` },
]

const Nav= () => {
  return (
    <AppBar position="static">
      <Toolbar>
    <nav className="">
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
        <li>
          <Link href='/software'>Software</Link>
        </li>
        <li>
          <Link href='/space'>Space</Link>
        </li>
      </ul>
    </nav>
    </Toolbar>
    </AppBar>
  )
}

  export default Nav
import Link from 'next/link'
//import navStyles from '../styles/Nav.module.css'

const Nav= () => {
  return (
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
  )
}

  export default Nav
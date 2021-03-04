import Link from 'next/link'
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, makeStyles, Container  } from "@material-ui/core"
import { Home } from "@material-ui/icons"
//import navStyles from '../styles/Nav.module.css'

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

const navLinks = [
  { title: `home`, path: `/` },
  { title: `about`, path: `/about` },
  { title: `projects`, path: `/projects` },
  { title: `software`, path: `/software` },
  { title: `space`, path: `/space` },
]

const Nav= () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="md" className={classes.navDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>

          <List 
            component="nav" 
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              // TODO: change anchor tag to Link from Gatsby or react router
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
    // <nav className="">
    //         <Link href='/'>Home</Link>
    //       <br/>
    //         <Link href='/about'>About</Link>
    //       <br/>
    //         <Link href='/projects'>Projects</Link>
    //       <br/>
    //         <Link href='/software'>Software</Link>
    //       <br/>
    //         <Link href='/space'>Space</Link>
    // </nav>
    
  )
}

  export default Nav
import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/logo-e-commerce.png'
import useStyles from './styles'


const Navbar = () => {
    const classes = useStyles()

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit" >
                <Toolbar>
                    <img src={logo} alt="logo" height="35px" className={classes.image} />
                    <Typography variant="h6" >
                        Shopers
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="show cart item" color="inherit">
                            <Badge badgeContent={2} color="secondary" >
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar

import React from 'react'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import classes from './Sidebar.module.css'

const sidebar = (props) => {
    //conditionally attach css classes
    return (
        <div className={classes.Sidebar}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavItems/>
            </nav>
        </div>
    )
}

export default sidebar
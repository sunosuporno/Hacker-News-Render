import React from 'react';

function Nav({children}){
    let NavItems = React.Children.toArray(children)
    
    let NavBar = NavItems.map(NavItem => 
        NavItem.props.children)

    let NavRendered = NavBar.join(' | ')

    console.log(NavBar)
    return(
        <p className="nav">{NavRendered}</p>
    )
}

export default Nav

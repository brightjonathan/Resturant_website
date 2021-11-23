import React from 'react';
import MenuList from '../Helper/MenuList'
import Menu1b from '../InnerPages/Menu1b'

const Menu1 = () => {
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
               {MenuList.map((e, key)=>{
                  return <Menu1b key={key} e={e}/>
               })}
            </div>
        </div>
    )
}

export default Menu1

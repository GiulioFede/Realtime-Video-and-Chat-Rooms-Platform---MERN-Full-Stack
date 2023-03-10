
import React from 'react';
import MainPageButton from './MainPageButton';


const SideBar = () => {
    return (
        <div style={divStyle}>
            <MainPageButton />
        </div>
    )
}

const divStyle = {
    width:"72px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#202225"
};

export default SideBar;
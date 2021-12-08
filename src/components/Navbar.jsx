import styled from "styled-components";


import React from 'react'




const Header = () => {

    




    return (
        <Nav>
            <Logo href="/">
                <img src="/logo.png" alt="Disney+"/>

            </Logo>
            {
                <>
            <NavMenu>
            <a href="/Wcrypto">
            
                <span>WHAT IS CRYPTOCURRENCIES ??</span>
            </a>
            <a href="/Cryptocurrencies">
                
                <span>TOP CRYPTOCURRENCIES </span>
            </a>
            <a href="/News">
            
                <span>NEWS</span>
            </a>
        
            </NavMenu>
            <SignOut>
            
            <DropDown>
                <span onClick={""}>Sign Out</span>
            </DropDown>
            </SignOut>
            
            </>}
           
        </Nav>
    )
}
const Nav = styled.nav`
position:fixed;
top:0;
left:0;
right:0;
height:70px;
background-color:#090b13;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 36px;
letter-spacing:16px;
z-index:3;
`;
const Logo = styled.a`
padding:0;
width:60px;
margin-top:2px;
max-height:70px;
display:inline-block;
img{
    display:block;
    width:100%;
}
`;

const NavMenu = styled.div`
align-items:center;
display:flex;
flex-flow:row nowrap;
height:100%;
justify-content:flex-end;
margin:0px;
padding:0px;
position:relative;
margin-right:auto;
margin-left:25px;

a{
    display:flex;
    align-items:center;
    padding:0 15px;
    img{
        height:20px;
        min-width:20px;
        width:20px;
        z-index:auto;
    }
    span{
        color:rgb(249,249,249);
        font-size:13px;
        letter-spacing:1.08px;
        padding:2px 0;
        white-space:nowrap;
        position:relative;

        &:before{
        
        background-color:rgb(249,249,249);
        border-radius:0 0 4px 4px;
        bottom:-6px; 
        content: " ";
        height:2px;
        left:0px;
        opacity:0;
        position:absolute;
        right:0px;
        transform-origin :left center;
        transform:scaleX(0);
        transition:all 250ms cubic-bezier(0.25,0.46,0.46,0.95) 0s;
        visibility:hidden;
        width:auto;

    }
    }
    &:hover {
    span:before{
        transform:scaleX(1);
        visibility:visible;
        opacity:1 !important;
    }
}
  
}



${'' /* @media(max-width:768px){
    display:none;
} */}

`;

const LoginHome= styled.a`
background-color:rgb(0,0,0,0.6);
padding:8px 16px;
text-transform:uppercase;
letter-spacing:1.5px;
border:1px solid #f9f9f9;
border-radius:4px;
transition:all .2s ease 0s;
&:hover{
    background-color:#f9f9f9;
    color:#000;
    border-color:transparent;
}
`;

const UserImg = styled.img`
height:100%;
border-radius:50%;

`;


const DropDown = styled.div`
position:absolute;
top:50px;
right:0;
background:rgb(19,19,19);
color:#999;
border:1px solid rgba(151,151,151,0);
border-radius:4px;
box-shadow:rgb(0 0 0  / 50%) 0 0 18px 18px;
letter-spacing:1.06px;
padding:10px;
font-size:14px;
width:100px;
opacity:0;

;


`;

const SignOut = styled.div`
position:relative;
height:48px;
width:48px;
display:flex;
curser:pointer;
align-items:center;
justify-content:center

${UserImg}{
  
    width:100%;
    height:100%;
}

&:hover{
    ${DropDown}{
        opacity:1;
        transition-duration:1s;
    }
}
`;

export default Header

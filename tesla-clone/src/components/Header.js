import React,{useState} from 'react'
import styled from "styled-components"
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
function Header() {
    const [showSideBar, setShowSideBar] = useState(false);
    return (
        <div>
            <Container>
                <Logo>
                    <a href="#" className="logo">
                        <img src="/images/Log.svg" alt="logo"/>
                    </a>
                </Logo>
                <Menu>
                    <a href="#" >Model S</a>
                    <a href="#" >Model 3</a>
                    <a href="#" >Model X</a>
                    <a href="#" >Model Y</a>
                    <a href="#" >Solar Roof</a>
                    <a href="#" >Solar Panels</a>
                </Menu>
                <RightMenu>
                    <a href="#" >Shop</a>
                    <a href="#" >Account</a>
                    <button className="btnMenu" onClick={() => setShowSideBar(true)}>Menu</button>
                </RightMenu>
                <Sidebar show={showSideBar}>
                    <CloseIconWrapper>
                        <CustomClose onClick={() => setShowSideBar(false)}/>
                    </CloseIconWrapper>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-In</a></li>
                    <li><a href="#">Test Drive</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Semi</a></li>
                </Sidebar>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`
    min-height : 60px;
    position: fixed;
    display : flex;
    align-items:center;
    justify-content:space-between;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;
`
const Logo = styled.div`
    width:150px;
    height:40px;
    img{
        object-fit: cover;
        width:150px;
        height:40px;
    }
`

const Menu = styled.div`
    display : flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    a{
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media(max-width:760px){
        display:none;
    }
`
const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
        font-weight: 600;
        margin-right: 10px;
        align-items:center;
    }
    .btnMenu{
        border:none;
        background-color:transparent;
        font-weight:600;
        font-size:16px;
        color: #393c41;
        cursor:pointer;
    }
`
const Sidebar = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:white;
    width:300px;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s;
    li{
        padding: 10px 0px;

        a{
            font-weight:600;
        }
    }
`
const CloseIconWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`

const CustomClose = styled(CloseSharpIcon)`
    cursor:pointer;
`

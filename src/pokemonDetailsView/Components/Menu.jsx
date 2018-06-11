import React from 'react';
import {Component} from 'react';
import logo from '../../img/pokelogo.png';
import { MenuBox, 
        MenuButton, 
        ButtonsBox, 
        Logo, 
        LogoWrapper, 
        SearchInput,
        SearchWrapper} from '../ComponentsStyles/Menu.s';
import SearchIcon from '../../../node_modules/react-material-icons/icons/action/search';
import { Link } from 'react-router-dom'

const searchStyle = {
    height:'20px',
    color:'black',
    margin:'2.5px 0 0 5px',
    borderRight:'1px solid black',
    float:'left',
}


export class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
   
    render() {
        return (
            <MenuBox>
                <LogoWrapper> <Logo src={logo} alt='logo' /> </LogoWrapper>
                <ButtonsBox scrolled={ this.state.changeMenuStyle } >
                    <Link to={'/'} ><MenuButton> Home </MenuButton> </Link>
                    <MenuButton> Filters </MenuButton>
                    <MenuButton> Coś </MenuButton>
                    <MenuButton> Coś innego </MenuButton>
                </ButtonsBox>

            
                <SearchWrapper>
                    <SearchIcon style={ searchStyle } />
                    <SearchInput placeholder='Search for pokemon...' />
                </SearchWrapper>
               

            </MenuBox>
        )
    }
}
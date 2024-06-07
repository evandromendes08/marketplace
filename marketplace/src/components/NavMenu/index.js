import { Link } from "react-router-dom";
import './style.css';
import styles from './styles.module.css';
import styled from 'styled-components';

const NavMenu = () => {
    const Button = styled.button`
        backgroud: palevioletred;
        border-radius: 3px;
        boder: 2px solid palevioletred;
        color: palevioletred;
        margin: 0 1em;
        padding: 0.25em 1em;
    `
    const style = {
        list: {
            backgroundColor:'blue'
        }
    }
    return (
        <nav>
            <h1 className={styles.heading}>MarketPlace</h1>
            <ul style={style.list}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li>
                    <Link to='/registro'>Registro</Link>
                </li>
                <li>
                    <Button>Clique aqui</Button>
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu;

//instalar npm i --save styled-components
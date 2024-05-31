import { Link } from 'react-router-dom';

const Home = () =>{
    return (
        <div>
            <h1>HomePage</h1>
            <a href="/login">VÁ PARA LOGIN</a>
            <br/>
            <Link to='/login'>VÁ PARA LOGIN COM LINK</Link>
        </div>
        
    )
}

export default Home;
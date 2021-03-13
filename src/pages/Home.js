import logo from './logo.svg';
import './Home.css';
import  Nav from './Nav';
import  Banner from './Banner';
import  Login from './Login';

function Home() {
  return (
    <div className="Home_Page">
   <Login/>
      <Banner />
     </div>
  );
}

export default Home;

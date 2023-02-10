import React from 'react';
import logo from "./logo.png";
import { Link } from 'react-router-dom';
import {Button} from 'antd';
import './Home.css';
const Home = () => {
  return (
    <div className="home" style={styles.container}>
      <br/>

    
      <img src={logo} height="600" width="850" style={{position: 'relative'}} alt="login"/>
      <Link to="/all"><Button type="primary" style={{ borderColor: "blue" }}>Shop Now</Button></Link>

    </div>
  );
};

const styles = {

  button: {
    backgroundColor: '#f34343',
    color: 'white',
    fontSize: '18px',
    padding: '15px 30px',
    borderRadius: '5px',
    border: 'none'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    fontSize: '50px',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '10px'
  },
  list: {
    listStyleType: 'decimal',
    marginLeft: '20px'
  },
  listItem: {
    fontSize: '16px',
    marginTop: '10px'
  }
};

export default Home;
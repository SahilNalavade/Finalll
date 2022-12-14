import React from 'react'
import QRCode from "react-qr-code";
import ReactToPrint from 'react-to-print';
import { Card } from 'antd';
import GithubInfo from '../components/GithubProfile';



const style = {
    margin:"auto",
    height: '223px',
    width: '390px',
    color: 'white',
    marginTop:'15%',
    backgroundImage: "url('/Frame.png')",
    padding: '1rem 1rem',
    textAlign: 'left',
    fontFamily: 'KoPub Batang',
    
  }
  
  function Name(props) {
    return <h4 style={{color:'white'}}>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h4>
  }
  
  function JobTitle(props) {
    return <h6 style={{color:'#D9D9D9',paddingBottom:"75px",marginTop:"-10px ",fontFamily: 'sans-serif',}}>{user.skills.map((skill) => {
      return <p>{skill.technology}</p>;
    })}</h6>
  }
  
  function Email(props) {
    return <p style={{color:"#626262",marginTop:"-15px ",fontSize:"12px",maxWidth:"200px"}}>{user.address}</p>
  }
  
  function Address(props) {
    return <h6 style={{color:"#626262",maxWidth:"200px",fontSize:"12px",marginBottom:"-30px", paddingBottom:"0px"}}>{user.email}</h6>
  }
  
  function BusinessCard(props) {
    return (
      <div style={props.style}>
        <Name name="Fathima Naduthody" />
        <JobTitle title="Graphic Designer" />
        <Email email="egold@mail.com" />
        <Address Address="10578/38, Shanker Gali No 2, Kalyan, Maharashtra, Pin code 110055, India" />
        <QRCode value="https://www.geeksforgeeks.org/how-to-set-background-images-in-reactjs/" size={85}
    style={{ position:"relative",marginLeft:"77%",marginTop:"-65%" ,background:"white",padding:"2px",width:"90px",height:"90px"}}
   
 
    />
      </div>
    )
  }

const user = JSON.parse(localStorage.getItem("sheyresume-user")); 
const { Meta } = Card;
class ComponentToPrint extends React.Component {
    render() {
      return (
        <>
        <div style={{background:"linear-gradient(115deg, rgb(0, 0, 0) 5.8%, rgb(178, 14, 14) 112.6%)",height:"93vh",overflow:"hidden"}}>
        <BusinessCard style={style} />
        </div>
       
        </>
        



        
      );
    }
  }
  

  class Github extends React.Component {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => {
              return <a href="#" style={{backgroundColor:"#008CBA",color:"#fff",padding:"12px 28px",borderRadius:" 4px",position:"relative",display:"flex",justifyContent:"center",height:"7vh"}} >Print this out!</a>;
            }}
            content={() => this.componentRef}
          />
          <ComponentToPrint ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }

export default Github











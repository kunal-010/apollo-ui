/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useRef, useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Header from "components/Headers/Header.js";
import YoutubeEmbed from "components/YoutubeEmbed/YoutubeEmbed";
import './index.css';
import axios from "axios";
import {FileDownload} from 'js-file-download';
import bgImage from './../assets/img/theme/bgImage4.jpg';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Index = (props) => {
  const leadtOptions = ['1000',  '2000', '4000', '7000',  '10000', '15000', '20000'];  
  const divRef = useRef(null);
  const prices = {
    "1000": "3",
    "2000": "6",
    "4000": "12",
    "7000": "20",
    "10000": "27",
    "15000": "40",
    "20000": "45"
  }

  const [obj,setObj] =  useState({
    url : "",
    records: "1000",
    price: "3",
    nationality: "Non-Indian",
    email: ""
  });
  const [loading,setLoading] = useState(false);

  const onChange = (e,field) => {
    if(field === "records"){
      setObj({
        ...obj,
        [field]: e.target.value,
        price: prices[`${e.target.value}`]
      })
    }else{
      setObj({
        ...obj,
        [field]: e.target.value
      })
    }
  
  }

  const onNext = async (e) => {
    e.preventDefault();
    if(!emailRegex.test(obj.email)){
      window.alert("Enter correct email!!");
      return;
    }
    if(!obj.url){
      window.alert("Enter url!!")
        return;
    }
    setLoading(true);
    try{
    const response = await axios.post('https://8e49-2405-201-d008-502c-5939-9039-76fb-633a.ngrok-free.app/process_payment', {
      url: obj.url,
      records: obj.leads,
      email: obj.email,
      nationality: obj.nationality
    })
    console.log(response.data);
    window.location.replace(response.data.redirect_url);
    // FileDownload(response.data['py/iterator'],'temp.csv');
    setLoading(false);
  }catch(e){
    console.log(e);
    setLoading(false);
  }  
}

  const scrollToDiv = () => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      {/* <Header /> */}
      {/* Page content */}
      <div style={{width: "100%", backgroundImage: `url(${bgImage})`,backgroundSize: 'cover', backgroundPosition: 'center', height: '125vh'}}>
        <div style={{paddingTop: "10%", display: "flex", justifyContent: "center"}}>
          <div style={{fontSize: "60px",fontWeight: "650",color: "white",textAlign: "center", width: "1300px"}}>Get Marketing Data Seamlessly and Cost Effectly from <span style={{color: "#EF9F4C", fontFamily: "Papyrus", fontWeight: "850"}} className="fancy-underline">Apollo</span> and other Sources!</div>
        </div>
        <div style={{ display: "flex", paddingTop: "1%", justifyContent: "center"}}>
          <div style={{ fontSize: "30px", width: "1200px", textAlign: "center", color: "white", fontWeight: "650"}}>Paste Your Apollo Search URL and get Data Instantly!</div>
        </div>
        <div style={{ display: "flex", paddingTop: "3%", justifyContent: "center"}}>
          <Button style={{ width: "200px", padding: "15px", color: "#2596be", borderRadius: "25px", fontSize: '20px'}} onClick={scrollToDiv}>Pay as you go
            <AiOutlineArrowRight style={{marginLeft: "2%"}}/>
          </Button>
        </div>
        <div style={{ display: "flex", paddingTop: "3%", justifyContent: "center"}}>
          <YoutubeEmbed url="https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1&mute=1"/>
        </div>
      </div>
      
      <div>
        <div style={{display: "flex", justifyContent: "center"}} >

          <div className="innerAPP">
            <h1 className="header" ref={divRef}>Apollo Scrapper</h1>
            <h3 className="subHeader">All we need is just an Apollo Search URL and the number of leads you want to extract, and it will be sent directly to your inbox.</h3>
            <form className="hey" action='https://enrichiq.com/process_payment' method="post"> 
              <input placeholder="Apollo Search URL" className="apolloSearchInput" onChange={(e) => onChange(e,"url")} name="url"/> 
              <label className="leadsLabel">
                Leads
              </label>
              <div >
                <select className="leadsDropdown" onChange={(e) => onChange(e,"records")} name="records">
                  {leadtOptions.map(value => {
                    return <option value={value} key={value}>{value}</option>
                  })}     
                </select>
                </div>
                <label className="leadsLabel">
                  Total Bills
                </label>
                <input placeholder="0" className="apolloSearchInput" disabled value={`${obj.price}$`} style={{marginTop: "3%"}}/>
                <label className="leadsLabel">
                  Nationality
                </label>
                <div >
                  <select className="leadsDropdown" onChange={(e) => onChange(e,"nationality")} name="nationality">
                      <option value="Non-Indian" key="Non-Indian">Non-Indian</option>
                      <option value="Indian" key="Indian">Indian</option>
                  </select>
                </div>
                <label className="leadsLabel">
                  Email
                </label>
                <input placeholder="Email" className="apolloSearchInput" onChange={(e) => onChange(e,"email")} style={{marginTop: "3%"}} name="email"/>
                <div className="spin" style={{display: loading ? "" : "none"}}></div>
                <button className="nextButton">Proceed To Payment</button>
                </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;


import { BrowserRouter, Link } from "react-router-dom"
import { BsArrowRight } from 'react-icons/bs'
import { FiTruck } from 'react-icons/fi'
import { BsCurrencyDollar } from 'react-icons/bs'
import { CiPercent } from 'react-icons/ci'
import { BiHeadphone } from 'react-icons/bi'
import {  AiOutlineHeart} from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'
import Homeproduct from "./homeproduct"


export default function Home(){
  return(
    <>
     <div className="top-banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Note Book Collection 2023</h2>
            <Link to ='/product' className="link">Shop Now <BsArrowRight/></Link>

          </div>
          <div className="img_box">
            <img src="./img/slider-img.png"></img>
          </div>
        </div>
      </div>
      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img src="./img/Mobile Phone.png"></img>
            </div>
            <div className="detail">
              <p>23 Products</p>
            </div>
          </div>

          <div className="box">
            <div className="img_box">
              <img src="./img/smart watch.png"></img>
            </div>
            <div className="detail">
              <p>18 Products</p>
            </div>
          </div>

          <div className="box">
            <div className="img_box">
              <img src="./img/headphone.png"></img>
            </div>
            <div className="detail">
              <p>52 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="./img/cpu.png" style={{width:"203px" , height:"149px" , marginTop:"21px" , marginLeft: "2px"}}></img>
            </div>
            <div className="detail">
              <p>63 Products</p>
            </div>
          </div>
          
        </div>

      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck/>
            </div>
            <div className="details">
              <h3>Free Shipping</h3>
              <p>Order above $1000</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <BsCurrencyDollar/>
            </div>
            <div className="details">
              <h3>Return & Refund</h3>
              <p>Money Back Guarentee</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <CiPercent/>
            </div>
            <div className="details">
              <h3>Memeber Discount</h3>
              <p>On every order</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <BiHeadphone/>
            </div>
            <div className="details">
              <h3>Customer Support</h3>
              <p>All time call support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {
            Homeproduct.map((curElm) =>{
              return(
                <div className="box" key={curElm.id}>
                  <div className="img_box">
                    <img src={curElm.Img} alt={curElm.Title} />
                    <div className="icon">
                      <li><AiOutlineShoppingCart /></li>
                      <li><BsEye /></li>
                      <li><AiOutlineHeart/></li>
                    </div>
                  </div>
                  <div className="detail">
                    <p>{curElm.Cat}</p>
                    <h3>{curElm.Title}</h3>
                    <h4>{curElm.Price}</h4>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="banner">
        <div className="container">

        <div className="detail">
          <h4>LATEST TECHNOLOGY ADDED</h4>
          <h3>Apple iPad 10.2 9th Gen - 2011</h3>
          <p>$ 986</p>
          <Link to='/product' className="link">Shop Now  <BsArrowRight/></Link>
        </div>
        <div className="img_box">
          <img src="./img/slider-img.png"/>
        </div>
        </div>
      </div>
    </>
  )

}
import React from 'react';
import styles from "./OrderPage.module.scss";

import { BsChevronLeft, BsThreeDots, BsChevronRight } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDiscount } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { PiNotePencil } from 'react-icons/pi';
import { CgNotes } from "react-icons/cg";

import { useNavigate } from 'react-router-dom';

import api from '../../../api';

const OrderPage = ({ coffeeId }) => {
  const [coffee, setCoffee] = React.useState();

  const navigate = useNavigate();

  React.useEffect(() => {
    api.coffees.getById(coffeeId).then(data => setCoffee(data));
  }, []);

  return (
    coffee ? (
      <div className={styles.orderPage}>
        <div className={styles.mainContent}>
          <div className={styles.head}>
            <div className={styles.backIcon} onClick={() => navigate(-1)}><BsChevronLeft /></div>
            <h2 className={styles.title}>Order</h2>
          </div>
          <div className={styles.blockUpper}>
            <section className={styles.section}>
              <button className={`${styles.btnDeliver} ${styles.active}`}>Deliver</button>
              <button className={styles.btnPickUp}>Pick Up</button>
            </section>
            <h3 className={styles.subTitle}>Delivery Address</h3>
            <div className={styles.address}>
              <div className={styles.title}>Jl. Kpg Sutoyo</div>
              <div className={styles.fullAddress}>
                Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
              </div>
            </div>
            <div className={styles.btns}>
              <button className={styles.btnAddressEdit}><div><PiNotePencil /></div> Edit Address</button>
              <button className={styles.btnAddNote}><div><CgNotes /></div> Add Note</button>
            </div>
          </div>
          <div className={styles.blockCoffeeQuantity}>
            <div className={styles.boxInfo}>
              <img src={coffee.url} className={styles.image} alt="image" />
              <div className={styles.desc}>
                <div className={styles.title}>{coffee.title}</div>
                <div className={styles.ingredient}>with <span>{coffee.ingredient}</span></div>
              </div>
            </div>
            <div className={styles.boxQuantityCoffee}>
              <button className={coffee.quantity <= 1 ? styles.noActive : ""}><AiOutlineMinus /></button>
              <div className={styles.quantity}>{coffee.quantity}</div>
              <button><AiOutlinePlus /></button>
            </div>
          </div>
          <div className={styles.border}></div>
          <div className={styles.blockTotalPrice}>
            <div className={styles.discountProduct}>
              <div className={styles.discount}><span><MdDiscount /></span> 1 Discount is applied</div>
              <div className={styles.rightIcon}><BsChevronRight /></div>
            </div>
            <h3 className={styles.subTitle}>Payment Summary</h3>
            <table>
              <thead>
                <tr>
                  <th>Price</th>
                </tr>
                <tr>
                  <th>Delivery Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$ {coffee.price}</td>
                </tr>
                <tr>
                  <td><span>$ 2.0</span> $ 1.0</td>
                </tr>
              </tbody>
            </table>
            <table className={styles.totalPrice}>
              <thead>
                <tr>
                  <th>Total Payment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$ 5.53</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.blockOrder}>
          <div className={styles.headOrder}>
            <div className={styles.boxPrice}>
              <div className={styles.moneyIcon}><CiMoneyCheck1 /></div>
              <div className={styles.cash}><span>Cash</span> <span>$ 5.53</span></div>
            </div>
            <div className={styles.dotsIcon}><BsThreeDots /></div>
          </div>
          <button className={styles.btnOrder}>Order</button>
        </div>
      </div >
    ) : "Загрузка..."
  )
}

export default OrderPage
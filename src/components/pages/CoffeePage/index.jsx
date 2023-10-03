import React from 'react';
import styles from "./CoffeePage.module.scss";

import api from "../../../api";

import { BsChevronLeft, BsHeart } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BiSolidCoffeeBean } from "react-icons/bi"
import { GiMilkCarton } from "react-icons/gi"

import { Link, useNavigate } from 'react-router-dom';

const CoffeePage = ({ coffeeId }) => {
  const [coffee, setCoffee] = React.useState();

  const navigate = useNavigate();

  React.useEffect(() => {
    api.coffees.getById(coffeeId).then(data => setCoffee(data));
  }, []);

  return (
    coffee ? (
      <div className={styles.coffeePage}>
        <div className={styles.mainContent}>
          <div className={styles.head}>
            <div className={styles.backIcon} onClick={() => navigate(-1)}><BsChevronLeft /></div>
            <h2 className={styles.title}>Detail</h2>
            <div className={styles.likeIcon}><BsHeart /></div>
          </div>
          <img src={coffee.url} className={styles.image} />
          <div className={styles.content}>
            <div className={styles.mainHead}>
              <div className={styles.title}>{coffee.title}</div>
              <div className={styles.ingredient}>with {coffee.ingredient}</div>
              <div className={styles.mainSubBlock}>
                <div className={styles.rate}>
                  <span className={styles.star}><AiFillStar /></span>
                  {coffee.rate}
                  <span className={styles.quantity}>(230)</span>
                </div>
                <div className={styles.ingredients}>
                  <div><BiSolidCoffeeBean /></div>
                  <div><GiMilkCarton /></div>
                </div>
              </div>
            </div>
            <div className={styles.desc}>
              <h3 className={styles.subTitle}>Description</h3>
              <p className={styles.text}>
                A cappuccino is an approximately 150 ml (5 oz) beverage,
                with 25 ml of espresso coffee and 85ml of fresh
                milk the fo.. <span>Read More</span>
              </p>
            </div>
            <div className={styles.size}>
              <h3 className={styles.subTitle}>Size</h3>
              <div className={styles.sizes}>
                <div className={styles.sizeS}>S</div>
                <div className={`${styles.sizeM} ${styles.active}`}>M</div>
                <div className={styles.sizeL}>L</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blockBuy}>
          <div className={styles.priceBox}>
            <div className={styles.title}>Price</div>
            <div className={styles.price}>$ {coffee.price}</div>
          </div>
          <Link to={`/home/${coffee._id}/order`} className={styles.btnBuy}>
            <button>Buy Now</button>
          </Link>
        </div>
      </div>
    ) : "Загрузка..."
  )
}

export default CoffeePage
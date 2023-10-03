import React from 'react';
import styles from "./Home.module.scss";

import { useParams } from 'react-router-dom';

import api from "../../../../api";

import Content from './Content';
import HomeFilter from "./HomeFilter";
import HomeCoffees from './HomeCoffees';
import NavBar from '../../../ui/NavBar';
import CoffeePage from "../../../pages/CoffeePage";
import OrderPage from '../../../pages/OrderPage';

const Home = () => {
  const [coffees, setCoffees] = React.useState([]);
  const { coffeeId, order } = useParams();

  React.useEffect(() => {
    api.coffees.fetchAll().then(data => setCoffees(data));
  }, []);

  return (
    <div className={styles.home}>
      {coffeeId
        ? order
          ? <OrderPage coffeeId={coffeeId} />
          : <CoffeePage coffeeId={coffeeId} />
        : (
          <div className={styles.mainPage}>
            <Content />
            <HomeFilter />
            <HomeCoffees items={coffees} />
            <NavBar />
          </div>
        )}
    </div>
  )
}

export default Home
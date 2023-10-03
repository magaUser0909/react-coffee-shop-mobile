import image1 from "../../assets/home/coffees/image-1.png";
import image2 from "../../assets/home/coffees/image-2.png";
import image3 from "../../assets/home/coffees/image-3.png";
import image4 from "../../assets/home/coffees/image-4.png";

const coffees = [
    { _id: 1, type: "cappucino", title: "Cappucino", url: image1, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 2, type: "cappucino", title: "Cappucino", url: image1, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 3, type: "cappucino", title: "Cappucino", url: image1, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 4, type: "cappucino", title: "Cappucino", url: image1, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 5, type: "cappucino", title: "Cappucino", url: image1, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 6, type: "cappucino", title: "Cappucino", url: image1, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 7, type: "cappucino", title: "Cappucino", url: image1, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 8, type: "cappucino", title: "Cappucino", url: image1, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 9, type: "cappucino", title: "Cappucino", url: image1, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 10, type: "cappucino", title: "Cappucino", url: image1, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 11, type: "cappucino", title: "Cappucino", url: image1, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },

    { _id: 13, type: "machiato", title: "Machiato", url: image2, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 12, type: "machiato", title: "Machiato", url: image2, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 14, type: "machiato", title: "Machiato", url: image2, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 15, type: "machiato", title: "Machiato", url: image2, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 16, type: "machiato", title: "Machiato", url: image2, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 17, type: "machiato", title: "Machiato", url: image2, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 18, type: "machiato", title: "Machiato", url: image2, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 19, type: "machiato", title: "Machiato", url: image2, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 20, type: "machiato", title: "Machiato", url: image2, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 21, type: "machiato", title: "Machiato", url: image2, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 21, type: "machiato", title: "Machiato", url: image2, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },

    { _id: 23, type: "latte", title: "Latte", url: image3, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 24, type: "latte", title: "Latte", url: image3, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 25, type: "latte", title: "Latte", url: image3, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 26, type: "latte", title: "Latte", url: image3, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 27, type: "latte", title: "Latte", url: image3, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 28, type: "latte", title: "Latte", url: image3, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 29, type: "latte", title: "Latte", url: image3, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 30, type: "latte", title: "Latte", url: image3, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 31, type: "latte", title: "Latte", url: image3, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 32, type: "latte", title: "Latte", url: image3, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 33, type: "latte", title: "Latte", url: image3, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },

    { _id: 34, type: "americano", title: "Americano", url: image4, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 35, type: "americano", title: "Americano", url: image4, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 36, type: "americano", title: "Americano", url: image4, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 37, type: "americano", title: "Americano", url: image4, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 38, type: "americano", title: "Americano", url: image4, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 39, type: "americano", title: "Americano", url: image4, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 40, type: "americano", title: "Americano", url: image4, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 41, type: "americano", title: "Americano", url: image4, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 42, type: "americano", title: "Americano", url: image4, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 43, type: "americano", title: "Americano", url: image4, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
    { _id: 44, type: "americano", title: "Americano", url: image4, ingredient: "сhocolate", price: 4.53, rate: 4.8, quantity: 1 },
];

const coffees2 = {
    cappucino: [
        { _id: 1, title: "Cappucino", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 2, title: "Cappucino", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 3, title: "Cappucino", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 4, title: "Cappucino", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 5, title: "Cappucino", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 6, title: "Cappucino", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 7, title: "Cappucino", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 8, title: "Cappucino", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 9, title: "Cappucino", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 10, title: "Cappucino", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 11, title: "Cappucino", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
    ],

    machiato: [
        { _id: 1, title: "Machiato", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 2, title: "Machiato", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 3, title: "Machiato", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 4, title: "Machiato", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 5, title: "Machiato", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 6, title: "Machiato", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 7, title: "Machiato", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 8, title: "Machiato", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 9, title: "Machiato", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 10, title: "Machiato", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 11, title: "Machiato", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
    ],

    latte: [
        { _id: 1, title: "Latte", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 2, title: "Latte", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 3, title: "Latte", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 4, title: "Latte", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 5, title: "Latte", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 6, title: "Latte", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 7, title: "Latte", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 8, title: "Latte", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 9, title: "Latte", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 10, title: "Latte", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 11, title: "Latte", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
    ],

    americano: [
        { _id: 1, title: "Americano", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 2, title: "Americano", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 3, title: "Americano", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 4, title: "Americano", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 5, title: "Americano", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 6, title: "Americano", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 7, title: "Americano", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 8, title: "Americano", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 9, title: "Americano", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 10, title: "Americano", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
        { _id: 11, title: "Americano", url: "../../assets/home/coffees/image-1.png", ingredient: "сhocolate", price: 4.53, rate: 4.8 },
    ]
};

const fetchAll = () =>
    new Promise((resolve) =>
        window.setTimeout(() => {
            resolve(coffees);
        }, 500));

const getById = (id) =>
    new Promise((resolve) =>
        window.setTimeout(() => {
            resolve(coffees.find(item => item._id.toString() === id.toString()));
        }, 500));

export default {
    fetchAll,
    getById,
}
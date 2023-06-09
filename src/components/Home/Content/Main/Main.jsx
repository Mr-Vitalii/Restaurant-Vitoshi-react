import "./Main.scss";
import React, { useState, useEffect } from "react";
// import axios from "axios";
import firebase from "../../../../utils/fb-config";
import { Banner } from "./Banner";
import { MainSwiper } from "./MainSwiper";
import { CategoryCard } from "./CategoryCard";

export const Main = () => {
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   axios("http://localhost:8080/categories").then(({ data }) => {
  //     setCategories(data);
  //   });
  // }, []);

   useEffect(() => {
     firebase
       .database()
       .ref()
       .child(`categories`)
       .once("value")
       .then((data) => setCategories(data.val()));
   }, []);

  return (
    <div className="main">
      <Banner />
      <ul className="main-menu__list list-style">
        {categories.map((category) => (
          <CategoryCard
            key={`${category.id}`}
            category={category}
            path={category.category}
          />
        ))}
      </ul>
      <MainSwiper />
    </div>
  );
};

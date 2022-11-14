import React, { useEffect, useState } from "react";
import { CategoryWrapper } from "./CustomStyled";

const Category = (props) => {
  const [itemActive, setItemActive] = useState("All");

  const handleSelected = (category) => {
    setItemActive(category === "All" ? "All" : category.slug);
    props.selected(category === "All" ? "All" : category.slug);
    localStorage.setItem(
      "selectedCategorySlug",
      JSON.stringify(category === "All" ? "All" : category.slug)
    );
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("selectedCategorySlug")) !== null)
      setItemActive(JSON.parse(localStorage.getItem("selectedCategorySlug")));
  }, [JSON.parse(localStorage.getItem("selectedCategorySlug"))]);

  return (
    <CategoryWrapper>
      <div className="category">
        <ul>
          <li
            className={itemActive === "All" ? "active" : ""}
            onClick={() => {
              handleSelected("All");
            }}
          >
            <span>All</span>
          </li>
          {props.categories.map((category) => {
            return (
              <React.Fragment key={category.id}>
                <li
                  className={itemActive === category.slug ? "active" : ""}
                  onClick={() => {
                    handleSelected(category);
                  }}
                >
                  <span>{category.name}</span>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </CategoryWrapper>
  );
};

export default Category;

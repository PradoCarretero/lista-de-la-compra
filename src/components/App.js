import "../styles/App.scss";
import originalData from "../data/ingredients.json";
import FilterIngredients from "./FilterIngredients";
import { useState } from "react";
import AddIngredient from "./AddIngredient";

function App() {
  const [data, setData] = useState(originalData);
  const [search, setSearch] = useState("");
  const [ingredientNew, setIngredientNew] = useState("");

  const handleSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  };

  const handleIngredientNew = (data) => {
    setIngredientNew(data);
  };

  const handleClickItem = (ev) => {
    ev.preventDefault();
  };

  const handleAddIngredient = (ev) => {
    ev.preventDefault();
    const newIngredientObject = {
      ingredient: ingredientNew,
      completed: false,
    };
    const newListData = [...data, newIngredientObject];
    setData(newListData);
    setIngredientNew("");
  };
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const filteredData = data.filter((dataItem) =>
    dataItem.ingredient.toLowerCase().includes(search.toLowerCase())
  );

  const html = filteredData.map((dataItem, index) => {
    return (
      <li
        onClick={handleClickItem}
        className={dataItem.completed ? "completed" : null}
        key={index}
      >
        {dataItem.ingredient}
      </li>
    );
  });

  return (
    <>
      <FilterIngredients
        handleForm={handleForm}
        search={search}
        handleSearch={handleSearch}
      />
      <ul>{html}</ul>
      <AddIngredient
        handleForm={handleForm}
        handleIngredientNew={handleIngredientNew}
        handleAddIngredient={handleAddIngredient}
        ingredientNew={ingredientNew}
      />
    </>
  );
}

export default App;

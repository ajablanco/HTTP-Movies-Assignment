import React, { useState } from "react";
import axios from "axios";

const initialItem = {
  id: "",
  title: "",
  director: "",
  metascore: "",
  stars: []
};

const ItemForm = props => {
  const [item, setItem] = useState(initialItem);

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === "movie") {
      value = parseInt(value, 10);
    }

    setItem({
      ...item,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/movies/", item)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="Enter Title"
          value={item.title}
        />
        <div className="baseline" />

        <input
          type="text"
          name="director"
          onChange={changeHandler}
          placeholder="Enter director"
          value={item.director}
        />
        <div className="baseline" />

        <input
          type="number"
          name="metascore"
          onChange={changeHandler}
          placeholder="Enter metascore"
          value={item.metascore}
        />
        <div className="baseline" />

        <input
          type="text"
          name="stars"
          onChange={changeHandler}
          placeholder="Enter Stars"
          value={item.stars}
        />
        <div className="baseline" />

        <button type="submit" className="md-button form-button">Add Movie</button>
      </form>
    </div>
  );
};

export default ItemForm;
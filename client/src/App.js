import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import MoviePutUpdate from "./Movies/UpdateForm"
import ItemForm from "./Movies/AddMovie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };


  return (
    <>
    
      <SavedList list={savedList} />
      <Route path="/add-movie" component={ItemForm}/>
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route
      path='/update-movies/:id'
      render={props => {
        return <MoviePutUpdate {...props} savedList={savedList} 
        setSavedList={setSavedList}/>
      }}
      />
    </>
  );
};
export default App;
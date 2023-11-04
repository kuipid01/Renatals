/* eslint-disable no-unused-vars */
import React, { useState } from "react";
  import "./search.scss";
import { AiOutlineSearch } from "react-icons/ai";



const SearchPage = () => {
 

  
  return (
    <div className="searchPage mt-[5rem]">
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Enter search term"
               />
        <select
          id="searchFilter"
          name="searchFilter"
          
        >
          <option value="">Search Filters</option>
          <option value="category">Category</option>
          <option value="top-stars">Top stars</option>
          <option value="name">Name</option>
        </select>
        <button >
          <AiOutlineSearch />
        </button>
      </div>
      <section className="products">
      
      </section>
    </div>
  );
};

export default SearchPage;

// Search.js
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Ruselt from "../Ruselt/Ruselt";
import "./search.css";


export default function Search() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=684e5784b0184b8ca8ca75da8ef075e1`
      );

      const results = response.data.results;
      setSearchResults(results);
      setNoResults(results.length === 0);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setNoResults(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="header">
        <div className="overlay">
          <div className="header-content flex flex-c text-center text-white">
            <h2 className="header-title text-capitalize">
              find your recipe of choice.
            </h2>
            <br />
            <p className="header-text fs-18 fw-3">Enter their recipe titles</p>
            <div className="search-form">
              <div className="container">
                <div className="search-form-content">
                  <form className="search-form" onSubmit={handleSearch}>
                    <div className="search-form-elem  bg-white">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter World ..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                      <button
                        style={{ all: "unset" }}
                        className="search"
                        type="submit"
                      >
                        <FaSearch className="faS searchIcon" size={32} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-center text-white font-weight-bold ">
        Search Result
      </h1>
      {loading ? (
        <p className="text-center text-white font-weight-bold">Loading...</p>
      ) : noResults ? (
        <p className="text-center text-white font-weight-bold">
          No results found. Please try another search term.
        </p>
      ) : (
        searchResults.length > 0 && <Ruselt searchResults={searchResults} />
      )}
    </>
  );
}

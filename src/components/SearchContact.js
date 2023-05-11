import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const SearchContact = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const GoSearchHandler = () => {
    dispatch({ type: "SEARCH_CONTACT", payload: search });
  };
  const clearSearchHandler = () => {
    setSearch("");
    dispatch({ type: "CLEAR_SEARCH" });
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="button" onClick={GoSearchHandler}>
        Go
      </button>
      {search !== "" && <button onClick={clearSearchHandler}>Clear </button>}
    </div>
  );
};

import React from "react";
import { useDispatch } from "react-redux";

export const SortContact = () => {
  const dispatch = useDispatch();

  const sortHandler = (e) => {
    dispatch({ type: "SORT_CONTACTS", payload: e.target.value });
  };

  return (
    <div>
      <div>
        <label style={{ padding: "6px" }} htmlFor="sort-by">
          Sort by :{" "}
        </label>
        <select
          id="sort-by"
          onChange={(e) => sortHandler(e)}
          className="dropdownSelect"
          style={{ width: "100px" }}
        >
          <option value="id">select</option>
          <option value="name">Name</option>
          <option value="id">Id</option>
          <option value="email">Email</option>
        </select>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contactList = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //if email present,we return contact which has that email,else undefined
    const checkEmail = contactList.contacts.find(
      (contact) => contact.email === email
    );
    //if number present,we return contact which has that number,else undefined
    const checkNumber = contactList.contacts.find(
      (contact) => contact.number === parseInt(number, 10)
    );

    //if email,name,num fields are empty, then giving warning
    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields!");
    }

    if (checkEmail) {
      return toast.error("This email already exists!");
    }

    if (checkNumber) {
      return toast.error("This number already exists!");
    }

    const data = {
      id:
        contactList.contacts.length === 0 ? 1 : contactList.contacts.length + 1,
      name,
      email,
      number
    };
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Student added successfully!");
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="display-3 text-center my-3">Add Student</h1>
      <div className="row">
        <div className="col-md-6 mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form=group">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Phone No"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="fomr-group">
              <input
                type="submit"
                value="Add Student"
                className="btn btn-block btn-success my-2 mx-2"
              />
              <button
                onClick={handleCancel}
                type="button"
                className="btn btn-block btn-danger my-2 mx-1"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;

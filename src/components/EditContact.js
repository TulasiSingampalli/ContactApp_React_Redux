import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const { id } = useParams();
  const contactList = useSelector((state) => state);

  const currentContact = contactList.contacts.find(
    (contact) => contact.id === parseInt(id, 10)
  );
  //return the contact you wishto edit
  // console.log('id ',currentContact)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //check if email exists in other ids, if so return that contact
    const checkEmail = contactList.contacts.find(
      (contact) => contact.id !== parseInt(id, 10) && contact.email === email
    );

    const checkNumber = contactList.contacts.find(
      (contact) =>
        contact.id !== parseInt(id, 10) &&
        contact.number === parseInt(number, 10)
    );

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
      id: parseInt(id, 10),
      name,
      email,
      number
    };

    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Student updated successfully!");
    navigate("/");
  };

  return (
    <div className="container">
      {currentContact ? (
        <>
          <h1 className="display-3 text-center my-3">Edit Student {id}</h1>
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
                <div className="form-group">
                  <input
                    type="submit"
                    value="Update Student"
                    className="btn btn-dark my-2"
                  />
                  <Link to="/" className="btn btn-danger my-2">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          Student Contact with id {id} does not exist
        </h1>
      )}
    </div>
  );
};

export default EditContact;

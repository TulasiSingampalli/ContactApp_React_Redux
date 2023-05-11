import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { SortContact } from "./SortContact";

const Home = () => {
  const contactList = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted successfully!");
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-12 my-5 text-right">
          <Link to="/add" className="btn btn-outline-primary">
            Add Contact
          </Link>
        </div>
        <div style={{ padding: "10px" }}>
          <SortContact />
        </div>

        <div className="col-md-6 mx-auto">
          <table className="table table-hover table-lg">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contactList.searchContacts.length === 0 ? (
                contactList.contacts.length > 0 && contactList.error === "" ? (
                  contactList.contacts.map((contact) => (
                    <tr key={contact.id}>
                      <td>{contact.id}</td>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.number}</td>
                      <td>
                        <Link
                          to={`/edit/${contact.id}`}
                          className="btn btn-small btn-primary mr-2 mx-2"
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          className="btn btn-small btn-danger mx-1"
                          onClick={() => deleteContact(contact.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No Contacts Found
                    </td>
                  </tr>
                )
              ) : (
                contactList.searchContacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.id}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-small btn-primary mr-2 mx-2"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        className="btn btn-small btn-danger mx-1"
                        onClick={() => deleteContact(contact.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

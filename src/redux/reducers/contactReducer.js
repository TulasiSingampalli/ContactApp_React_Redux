const initialState = {
  contacts: [
    {
      id: 1,
      name: "Sarosh",
      number: 123,
      email: "sar@test.com"
    },
    {
      id: 2,
      name: "Edward",
      number: 1234,
      email: "edw@test.com"
    },
    {
      id: 3,
      name: "Fatima",
      number: 12345,
      email: "fat@test.com"
    }
  ],
  highestId: 3,
  searchContacts: [],
  error: ""
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      const newContact = { ...action.payload, id: state.highestId + 1 };
      const addedContacts = [...state.contacts, newContact];
      return {
        ...state,
        contacts: addedContacts,
        highestId: state.highestId + 1
      };
    case "UPDATE_CONTACT":
      console.log("action :", action.payload);
      const updatedContacts = state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      return { ...state, contacts: updatedContacts };
    case "DELETE_CONTACT":
      //having remaining contacts expect that id
      console.log("action :", action.payload);
      const deletedContacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      return { ...state, contacts: deletedContacts };

    case "SEARCH_CONTACT":
      console.log("search search");

      const searchQuery = action.payload.toLowerCase().trim();
      if (!searchQuery) {
        // If search query is empty, return initial state
        return { ...state, searchContacts: [], error: "" };
      } else {
        const searchResult = state.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(searchQuery)
        );
        if (searchResult.length === 0) {
          // If search result is empty, return state with an error message
          return { ...state, searchContacts: [], error: "No results found." };
        } else {
          // If search result is not empty, return state with search result
          return { ...state, searchContacts: searchResult, error: "" };
        }
      }

    case "CLEAR_SEARCH":
      console.log("clear search");
      return { ...state, searchContacts: [], error: "" };

    case "SORT_CONTACTS":
      const sortedContacts = [...state.contacts].sort((a, b) => {
        if (a[action.payload] < b[action.payload]) {
          return -1;
        }
        if (a[action.payload] > b[action.payload]) {
          return 1;
        }
        return 0;
      });
      return { ...state, contacts: sortedContacts };
    default:
      return state;
  }
};

export default contactReducer;

# React Redux Contact App
This is a simple contact management application built using React and Redux. It allows users to add, edit, and delete contacts. The application includes features like searching contacts, sorting contacts, and displaying contact details.

![ContactApp](https://github.com/TulasiSingampalli/ContactApp_React_Redux/assets/128671828/41316895-6fb8-4d47-b318-0785a12b3bef)

## Features
The React Redux Contact App offers the following features:

- Add a new contact with name, email, and number
- Edit existing contacts
- Delete contacts
- Search for contacts by name
- Sort contacts by name, id, or email

## Project Structure
The project structure is as follows:

- **src**: Contains the source code files
   - **components**: Contains the React components used in the application
      - **Navbar.js**: Displays the navigation bar with search functionality <br/>
      - **Home.js**: Displays the list of contacts with search and sorting options <br/>
      - **AddContact.js**: Allows users to add a new contact <br/>
      - **EditContact.js**: Allows users to edit an existing contact <br/>
      - **SearchContact.js**: Provides the search functionality <br/>
      - **SortContact.js**: Provides the sorting functionality <br/>
   - **styles.css**: Contains the CSS styles for the application <br/>
   - **App.js**: Defines the main application component and sets up the routing <br/>
   - **contactReducer.js**: Defines the Redux reducer for managing contacts <br/>
- **public**: Contains the public files <br/>
   - **index.html**: The main HTML file for the application <br/>

## Redux Store
The Redux store manages the state of the application, including the list of contacts, search results, and error messages. The contactReducer.js file defines the reducer function that handles actions related to contacts, such as adding, updating, and deleting contacts.

## Dependencies
The project uses the following dependencies:

- **react**: The JavaScript library for building user interfaces <br/>
- **react-dom**: Provides DOM-specific methods for React components <br/>
- **react-router-dom**: Enables routing within the application <br/>
- **react-toastify**: Displays toast notifications for user feedback <br/>
- **redux**: A predictable state container for JavaScript applications <br/>
- **react-redux**: Provides Redux bindings for React <br/>
- **redux-thunk**: A middleware that allows asynchronous actions in Redux <br/>

## Try it on CodeSandbox

This App is a simple yet functional contact management application built using React and Redux as a learning project. It demonstrates the use of React components, Redux store, actions, and reducers to manage contacts and implement various features like searching and sorting. Feel free to explore and modify the code to suit your needs.This project is also available on CodeSandbox, allowing you to explore and interact with the application directly in your browser without having to set up a local development environment. Follow the steps below to access the project on CodeSandbox:

1. Visit the [Contact React App on CodeSandbox](https://codesandbox.io/s/contactapp-react-redux-j9ru8d) 

2. Once the CodeSandbox loads, you will see the project's file structure and code files.

3. To view the app in action, click the "▶️ Run" button located at the top of the CodeSandbox editor.

4. The application will be launched in a new tab, and you can interact with it just like you would in a local development environment.

Please note that any changes made on CodeSandbox will not affect the original project. If you wish to save your modifications, you can create a fork of the project on CodeSandbox or download the source code and run it locally.

## Contributing
Contributions are welcome! If you find any issues or want to contribute to the project, feel free to create a pull request or submit an issue in the GitHub repository.

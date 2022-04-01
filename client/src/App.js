import "./App.css";
import Navigation from "./Components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ContactList from "./Components/ContactList";
import AddContact from "./Components/AddContact";
import NotFound from "./Components/NotFound";
import EditContact from "./Components/EditContact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contacts" element={<ContactList></ContactList>}></Route>
        <Route path="/addcontact" element={<AddContact></AddContact>}></Route>
        <Route path="/edit/:id" element={<EditContact></EditContact>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

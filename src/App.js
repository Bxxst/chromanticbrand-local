import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Aboutus from "./pages/aboutus";
import Cart from "./pages/cart";
import { default as ItemDetails, default as Itemdetails } from "./pages/itemdetails";
import Item from "./pages/itemdiv";
import Mainpage from "./pages/mainpage";
import NotFound from "./pages/notfound";
import AdminPage from "./pages/adminpage";
import Additem from "./pages/additem";
import EditItem from "./pages/edititem";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="*" element={<NotFound/>}></Route>
              <Route path="/" element={<Mainpage/>}></Route>
              <Route path="/cart" element={<Cart/>}></Route>
              <Route path="/aboutus" element={<Aboutus/>}></Route>
              <Route path="/product"></Route>
              <Route path="/item/:id" element={<ItemDetails/>}/>
              <Route path="/adminpage" element={<AdminPage/>}/>
              <Route path="/adminpage/additem" element={<Additem/>}/>
              <Route path="/adminpage/edititem/:id" element={<EditItem/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

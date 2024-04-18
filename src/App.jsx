import ItemListContainer from "./components/page/itemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/page/itemDetail/ItemDetailContainer.jsx";
import Layout from "./components/layout/Layout.jsx";
import CartContainer from "./components/page/cart/CartContainer.jsx";
import ErrorPage from "./components/page/errorPage/ErrorPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

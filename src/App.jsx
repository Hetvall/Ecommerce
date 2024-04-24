import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/page/itemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/page/itemDetail/ItemDetailContainer.jsx";
import Layout from "./components/layout/Layout.jsx";
import CartContainer from "./components/page/cart/CartContainer.jsx";
import ErrorPage from "./components/page/errorPage/ErrorPage.jsx";
import CheckoutContainer from "./components/page/checkout/CheckoutContainer.jsx";
import CartContextProvider from "./context/CartContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

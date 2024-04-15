import { useState } from "react";
import ItemListContainer from "./components/page/itemListContainer/ItemListContainer.jsx";
import Layout from "./components/layout/Layout.jsx";
import Tables from "./components/page/pagination&fetchPractice/Tables.jsx";
// import JsonServer from "./components/page/pagination&fetchPractice/JsonServer.jsx";
// import Users from "./components/page/Users.jsx";
// import Todos from "./components/page/Todos.jsx";
// import Comments from "./components/page/Comments.jsx";
// import CreateUsers from "./components/page/cart/fetchingData/CreateUsers.jsx";
// import CounterContainer from "./components/common/counter/CounterContainer.jsx";
// import FetchingData from "./components/page/cart/fetchingData/FetchingData.jsx";

function App() {
  // const productos = [
  //   { id: 1, nombre: "Producto 1" },
  //   { id: 2, nombre: "Producto 2" },
  //   { id: 3, nombre: "Producto 3" },
  //   { id: 4, nombre: "Producto 4" },
  //   { id: 5, nombre: "Producto 5" },
  //   { id: 6, nombre: "Producto 6" },
  //   { id: 7, nombre: "Producto 7" },
  //   { id: 8, nombre: "Producto 8" },
  //   { id: 9, nombre: "Producto 9" },
  //   { id: 10, nombre: "Producto 10" },
  //   { id: 11, nombre: "Producto 11" },
  //   { id: 12, nombre: "Producto 12" },
  //   { id: 13, nombre: "Producto 13" },
  //   { id: 14, nombre: "Producto 14" },
  //   { id: 15, nombre: "Producto 15" },
  //   { id: 16, nombre: "Producto 16" },
  //   { id: 17, nombre: "Producto 17" },
  //   { id: 18, nombre: "Producto 18" },
  //   { id: 19, nombre: "Producto 19" },
  //   { id: 20, nombre: "Producto 20" },
  //   { id: 21, nombre: "Producto 21" },
  //   { id: 22, nombre: "Producto 22" },
  //   { id: 23, nombre: "Producto 23" },
  //   { id: 24, nombre: "Producto 24" },
  //   { id: 25, nombre: "Producto 25" },
  //   { id: 26, nombre: "Producto 26" },
  //   { id: 27, nombre: "Producto 27" },
  //   { id: 28, nombre: "Producto 28" },
  //   { id: 29, nombre: "Producto 29" },
  //   { id: 30, nombre: "Producto 30" },
  //   { id: 31, nombre: "Producto 31" },
  // ];

  const usuarios = [
    { id: 1, nombre: "Usuario 1" },
    { id: 2, nombre: "Usuario 2" },
    { id: 3, nombre: "Usuario 3" },
    { id: 4, nombre: "Usuario 4" },
    { id: 5, nombre: "Usuario 5" },
    { id: 6, nombre: "Usuario 6" },
    { id: 7, nombre: "Usuario 7" },
    { id: 8, nombre: "Usuario 8" },
    { id: 9, nombre: "Usuario 9" },
    { id: 10, nombre: "Usuario 10" },
    { id: 11, nombre: "Usuario 11" },
    { id: 12, nombre: "Usuario 12" },
    { id: 13, nombre: "Usuario 13" },
    { id: 14, nombre: "Usuario 14" },
    { id: 15, nombre: "Usuario 15" },
    { id: 16, nombre: "Usuario 16" },
    { id: 17, nombre: "Usuario 17" },
    { id: 18, nombre: "Usuario 18" },
    { id: 19, nombre: "Usuario 19" },
    { id: 20, nombre: "Usuario 20" },
    { id: 21, nombre: "Usuario 21" },
    { id: 22, nombre: "Usuario 22" },
    { id: 23, nombre: "Usuario 23" },
    { id: 24, nombre: "Usuario 24" },
    { id: 25, nombre: "Usuario 25" },
    { id: 26, nombre: "Usuario 26" },
    { id: 27, nombre: "Usuario 27" },
    { id: 28, nombre: "Usuario 28" },
    { id: 29, nombre: "Usuario 29" },
    { id: 30, nombre: "Usuario 30" },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(5);

  const changeItemsPerPage = (quantity) => {
    setItemsPerPage(quantity);
  };
  return (
    <div>
      <Layout>
        <ItemListContainer />
        {/* <CounterContainer /> */}
        {/* <FetchingData /> */}
        {/* <CreateUsers /> */}
      </Layout>
      {/* <Users /> */}
      {/* <Todos /> */}
      {/* <Comments /> */}
      {/* <JsonServer /> */}
      <Tables
        data={usuarios}
        itemsPerPage={itemsPerPage}
        changeItemsPerPage={changeItemsPerPage}
      />
    </div>
  );
}

export default App;

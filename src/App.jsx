import Footer from "./components/layout/footer/Footer";
import ItemListContainer from "./components/page/itemListContainer/ItemListContainer";
import Navbar from "./components/layout/navbar/Navbar";
// import Counter from "./components/common/counter/Counter";
import { useState } from "react";
// import ComponentsTest from "./components/common/componentsTest/ComponentsTest";

function App() {
  const [name, setName] = useState();
  const changeName = (newName) => {
    setName(newName);
  };

  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Footer />
      {/* <Counter /> */}
      {/* <ComponentsTest /> */}
      <h2>{name}</h2>
      <button
        onClick={() => {
          changeName("James");
        }}
      >
        Change Name
      </button>
    </div>
  );
}

export default App;

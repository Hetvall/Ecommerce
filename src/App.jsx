import ItemListContainer from "./components/page/itemListContainer/ItemListContainer";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <ItemListContainer greeting={"Welcome to my store!"} />
      </Layout>
    </div>
  );
}

export default App;

import ProductsList from "./components/ProductsList";
import Sidebar from "./components/Sidebar";

import products from "./data/data";

function App() {
  return (
    <main>
      <Sidebar />
      <ProductsList props={products} />
    </main>
  );
}

export default App;

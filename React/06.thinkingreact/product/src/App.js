import PRODUCTS from './Product';
import FilterableProductTable from './component/FilterableProductTable';

function App() {
  return (
    <FilterableProductTable products={PRODUCTS} />
  );
}

export default App;

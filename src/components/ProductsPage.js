import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchQuery, setSearchQuery] = useState('');
  const [inStock, setInStock] = useState(false);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        inStock={inStock}
        setInStock={setInStock}
      />
      <ProductTable
        products={products}
        searchQuery={searchQuery}
        inStock={inStock}
      />
    </div>
  );
}
export default ProductsPage;
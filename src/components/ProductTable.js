import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {

  const { products, searchQuery, inStock } = props;

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const isInStock = inStock ? product.inStock : true;

    return matchesSearch && isInStock;
  });

  return (
    <table>
      <tbody>
        {filteredProducts.map((product, index) => (
          <ProductRow key={index} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
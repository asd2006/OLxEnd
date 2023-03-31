import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { instance } from '../../API/Instance';
import Header from '../../Components/Header/Header';
import './SearchProduct.scss'

const SearchProducts = () => {
  const { searchtitle } = useParams();
  const [resultSearch, setResultSearch] = useState([]);
  useEffect(() => {
    instance.get(`products/?title=${searchtitle}`)
      .then(response => setResultSearch(response.data))
  }, []);
  return (
    <div>
      <Header />
      <div className="products">
        {
          resultSearch.map(product =>
            <article className='product-item' key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.images.at(0)} alt="" />
              </Link>
              <div>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <strong>${product.price}</strong>
              </div>
            </article>
          )
        }
      </div>
    </div>
  );
}

export default SearchProducts;

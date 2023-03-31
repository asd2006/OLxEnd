import React, {useEffect, useState} from 'react';
import { instance } from '../../API/Instance';
import { Container } from '../../Untils/Components';
import ProductCard from './ProductCard';
import './ProductCard.scss'

const ProductMain = () => {
  const [productData, setProductData] = useState([])
  
  useEffect(() => {
    instance.get('/products?offset=0&limit=20')
    .then(response=>setProductData(response.data))
    }, []);
  return (
    <section>
      <Container>
        <div className="product__mian-wrapper">
          {
            productData.map((item) => {
              return <ProductCard key={item.id} data={item} />
            })
          }
        </div>
      </Container>
    </section>
  );
}

export default ProductMain;

import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { instance } from '../../API/Instance';
import Header from '../../Components/Header/Header';
import { Container } from '../../Untils/Components';
import './SingleProduct.scss'

const SingleProduct = () => {
  const { id } = useParams()
  const [data, setData] = useState({})
  
  console.log(id);
  useEffect(() => {
    instance.get(`/products/${id}`)
    .then(response => setData(response.data))
  }, [id]);

  console.log(data)
  return (<>
    <Header />
    <Container>
      <div className='single-product__wrapper'>
        <div>
          <img className='single-product__img' src={data.images} alt="" />
        </div>
        <div className='single-product__info'>
          <h3 className='single-product__title'>{ data.title}</h3>
          <p className='single-product__desc'>{ data.description}</p>
          <strong className='single-product__price'>{ data.price}$</strong>
        </div>
      </div>
    </Container>
  </>
  );
}

export default SingleProduct;

import React, { useState, useEffect } from 'react';
import { instance } from '../../API/Instance';
import { Container } from '../../Untils/Components';
import CategoryItem from './Category-item';

const Categorieslist = () => {
  const [categoryData, setCategoryData] = useState([])
  useEffect(() => {
    instance.get("/categories")
      .then(response => setCategoryData(response.data))

  }, []);
  return (
    <section>
      <Container>
        <div className='category__item-wrapper'>
          {
            categoryData.map(item => <CategoryItem key={item.id} img={item.image} title={item.name} id={ item.id} />)
          }
        </div>
      </Container>
    </section>
  );
}

export default Categorieslist;

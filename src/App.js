import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; 
import './App.css'
import Demand from './components/create_demand/Demand';
import styled from 'styled-components';

const Main = styled.div`
  background-color: #F5F6FA;
  width: 100%;
  min-height: 100vh;
`;

function App() {

  const [products, setProducts] = useState()

  const getData=()=>{
    fetch('products.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(async response => {
      const result = await response.json()
      if (response.status === 201 || response.status === 200) {
          setProducts(result)
      } 
      else if (response.status === 403) {
          console.log("403")
      }
    })
    .catch((error) => {
        console.error('error message', error)
    })
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <Main>
      <Demand products={products} />
    </Main>
  );
}

export default App;

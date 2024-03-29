import React from 'react'
import { Container, Row, Col, Dropdown, DropdownButton} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/ssuminii/React-Shoppingmall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data--------->',data)
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  },[]);

  return (
    <div>
      <Container>
        <Row>
          <Col className='product-image'>
            <img src={product?.img} alt="product" />
          </Col>
          <Col className='product-info'>
            <div className='product-title'>{product?.title}</div>
            <div className='product-price'>₩{product?.price.toLocaleString()}</div>
            <div className='product-chocie'>{product?.choice === true ? 'Conscious choice' : ''}</div>
            <div className='product-new'>{product?.new === true ? '신제품' : ''}</div>
            <div>
              <DropdownButton id="dropdown-basic-button" title="사이즈">
                <Dropdown.Item href="#/action-1">{product?.size[0]}</Dropdown.Item>
                <Dropdown.Item href="#/action-2">{product?.size[1]}</Dropdown.Item>
                <Dropdown.Item href="#/action-3">{product?.size[2]}</Dropdown.Item>
              </DropdownButton>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail
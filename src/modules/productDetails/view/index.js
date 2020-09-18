import React, { useState, useEffect } from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {
    const [product, setProduct] = useState({});
    var { id } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            const apiCall = await fetch(`https://aveosoft-react-assignment.herokuapp.com/products/${id}`);
            const product = await apiCall.json();
            setProduct(product);
        }
        fetchUser();
    }, [id]);

    return (
        <Container>
            <Row>
                <Col>
                    <img src={require("../../../assets/image/productImg.png")} alt="productImage" />
                </Col>
                <Col>
                    <ListGroup>
                        <ListGroupItem>{product.name}</ListGroupItem>
                        <ListGroupItem>Model No :- {product.model}</ListGroupItem>
                        <ListGroupItem>Description :-{product.description}</ListGroupItem>
                        <ListGroupItem>Price :- {product.price}</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );

}
export default ProductDetails;
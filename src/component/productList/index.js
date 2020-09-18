import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

const ProductList = (props) => {
    let data = props.data;
    return (
        <React.Fragment>
            {
                data.map(((d, i) => {
                    return (
                        <Link to={"/productdetails/" + d.id} key={i}>
                            <div key={d.id}>
                                <Card key={i}>
                                    <CardImg top src={require("../../assets/image/productImg.png")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{d.name}</CardTitle>
                                        <CardSubtitle>{d.model}</CardSubtitle>
                                        <CardText>{d.price}</CardText>
                                        <Button color="primary">View</Button>
                                    </CardBody>
                                </Card>
                            </div>
                        </Link>
                    )
                }))
            }
        </React.Fragment >
    )
}

export default ProductList;
import React from 'react';
import { Container, Row } from 'reactstrap';
import ProductList from '../../../component/productList';

class ProductView extends React.Component {
    constructor() {
        super()
        this.state = {
            error: null,
            isLoaded: false,
            productDetails: [],
            category: [],
        }
    }
    componentDidMount() {
        this.fetchCategory();
        this.fetchProduct();
    }
    fetchProduct = () => {
        fetch("https://aveosoft-react-assignment.herokuapp.com/products/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        productDetails: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    fetchCategory = () => {
        fetch("https://aveosoft-react-assignment.herokuapp.com/categories")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        category: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    handleChange = (value) => {
        if (value !== "") {
            this.fetchProductWithCategory(value);
        } else {
            this.fetchProduct();
        }
    }

    fetchProductWithCategory = (value) => {
        fetch(`https://aveosoft-react-assignment.herokuapp.com/products/?categoryId=${value}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        productDetails: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, productDetails, category } = this.state;
        console.log("productDetails", productDetails);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Container>
                    <Row>
                        <h1 >Product List</h1>
                    </Row>
                    <Row>
                        <h5>Category Filter :-</h5>
                        <select onChange={(e) => this.handleChange(e.target.value)}>
                            <option value=""> Select Category</option>
                            {
                                category.map((d, i) => {
                                    return <option value={d.id}>{d.name}</option>;
                                })
                            }
                        </select>
                    </Row>
                    <Row>
                        <ProductList data={productDetails} />
                    </Row>
                </Container>
            )
        }

    }
}
export default ProductView;
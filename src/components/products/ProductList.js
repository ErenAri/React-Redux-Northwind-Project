import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";
import { bindActionCreators } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import  { Table } from 'reactstrap';

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">
            Products
            {this.props.currentCategory.categoryName}
          </Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>

          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity Per Unit</th>
                <th>Units In Stock</th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map(product=> (
                <tr key={product.id}>
                <th scope="row">(product.id)</th>
                <td>(product.productName)</td>
                <td>(product.unitPrice)</td>
                <td>(product.quantityPerUnit)</td>
                <td>(product.unitsInStock)</td>
              </tr>
              ))}
              
              
            </tbody>
          </Table>
        </h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispactch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

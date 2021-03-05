import React, { Component } from 'react';

class ProductCategoryRow extends Component {
    render() {
        const {category} = this.props;
        return (
            <tr colSpan="2">
               <th> {category} </th>
            </tr>
        );
    }
}

export default ProductCategoryRow;
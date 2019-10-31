import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
	fetchProduct,
} from '../../redux/actions';

import ProductsList from './ProductList';

class ProductPage extends Component {
	static propTypes = {
		products: PropTypes.object.isRequired,
	};

  componentDidMount() {
		this.props.fetchProduct();
	}

	render() {
		return (
			<div>
				<h2>Products</h2>
				<ProductsList products={this.props.products}/>
			</div>
		);
	}
}

const mapStateToProps = ({ products }) => {
	return {
		products
	}
};

const mapDispatchToProps = {
	fetchProduct
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);
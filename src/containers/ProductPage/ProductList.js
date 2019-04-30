import React from 'react';
import PropTypes from 'prop-types';

const ProductsList = ({ products }) => {
	const emptyMessage = (
		<p>There are no product yet.</p>
	);

	const productList = (
		<div>
			{
				products.error.response
					? <h3>Error retrieving data!</h3>
					:
					<ul>
						{
							products.productList.map((item, key) =>
								<li key={key}>{item.id} {item.title}</li>
							)
						}
					</ul>
			}
		</div>
	);

	return (
		<div>
			{ products.length === 0 ? emptyMessage : productList }
		</div>
	);
};

ProductsList.propTypes = {
	products: PropTypes.shape({
		productList: PropTypes.array.isRequired
	}).isRequired	
};

export default ProductsList;
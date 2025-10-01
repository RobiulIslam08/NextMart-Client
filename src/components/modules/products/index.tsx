import { IProduct } from '@/types';
import React from 'react';

const AllProducts = ({products}:{prducsts:IProduct[]}) => {
	return (
		<div className='flex'>
			<div>sidebar</div>
			<div>products</div>
		</div>
	);
};

export default AllProducts;
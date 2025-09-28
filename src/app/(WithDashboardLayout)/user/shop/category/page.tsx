import MangaeCategories from "@/components/modules/shop/category";
import { getAllCategories } from "@/services/category";


const ProductCategory = async() => {
	const {data} = await getAllCategories()
	
	return (
		<div>
<MangaeCategories categories={data}/>
		</div>
	);
};

export default ProductCategory;
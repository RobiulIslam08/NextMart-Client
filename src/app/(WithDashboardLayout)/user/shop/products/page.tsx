import ManageProducts from "@/components/modules/shop/product";
import { getAllProducts } from "@/services/Product";

// const ManageProductsPage = async () => {
//   const  data  = await getAllProducts();

//   console.log('from ManageProduct Pge' , data)
//   return (
//     <div>
//       <ManageProducts products={data} />
//     </div>
//   );
// };

// export default ManageProductsPage;
// src/app/(WithDashboardLayout)/user/shop/products/page.tsx

const ManageProductsPage = async ({searchParams}: {searchParams:Promise<{page:string}>}) => {
const {page} = await searchParams
  const {data, meta} = await getAllProducts(page,'3');

  return (
    <div>
       <ManageProducts products={data} meta={meta} />
    </div>
  );
};

export default ManageProductsPage;

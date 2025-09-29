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

const ManageProductsPage = async () => {
  // apiResponse এ { success: true, data: [...], ... } এই ফরম্যাটটি আসবে
  const apiResponse = await getAllProducts();
  console.log("from ManageProduct Pge", apiResponse); // নিশ্চিত করুন যে data প্রোপার্টিটি সফলভাবে destructure হচ্ছে এবং এটি একটি অ্যারে। // যদি success না থাকে বা data না থাকে, তবে একটি খালি অ্যারে ([]) ব্যবহার করুন।
  const productsData = apiResponse?.success ? apiResponse.data : [];
  return (
    <div>
            {/* productsData ব্যবহার করুন, যা একটি IProduct[] অ্যারে */}
            <ManageProducts products={productsData} />   {" "}
    </div>
  );
};

export default ManageProductsPage;

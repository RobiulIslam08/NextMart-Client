// "use client";
// import Category from "@/components/modules/home/Category";
// import HeroSection from "@/components/modules/home/HeroSection";
// import { useUser } from "@/context/UserContext";



// const HomePage = () => {
//  const user = useUser()
//   console.log('from home page',user)
//   return (
//     <div>
//       <HeroSection/>
//       <Category/>
//     </div>
//   );
// };

// export default HomePage;
// page.tsx
import HeroSection from "@/components/modules/home/HeroSection";
import Category from "@/components/modules/home/Category";
import { getAllCategories } from "@/services/category";
import { getAllProducts } from "@/services/Product";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";

const HomePage = async () => {
  const { data: categories } = await getAllCategories();
   const { data: products } = await getAllProducts();
  return (
    <div>
      <HeroSection />
      <Category categories={categories} />
      <FeaturedProducts products={products}/>
    </div>
  );
};

export default HomePage;

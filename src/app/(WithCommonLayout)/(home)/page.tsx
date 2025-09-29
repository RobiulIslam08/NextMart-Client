"use client"
import HeroSection from "@/components/modules/home/HeroSection";
import { useUser } from "@/context/UserContext";



const HomePage = () => {
 const user = useUser()
  console.log('from home page',user)
  return (
    <div>
      <HeroSection/>
    </div>
  );
};

export default HomePage;
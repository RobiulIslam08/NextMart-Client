"use client"
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";



const HomePage = () => {
 const user = useUser()
  console.log('from home page',user)
  return (
    <div>
      <Button>Click me </Button>
    </div>
  );
};

export default HomePage;
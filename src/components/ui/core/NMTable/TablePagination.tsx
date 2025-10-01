import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../button";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";


const TablePagination = ({totalPage}) => {
	
	const [currentPage, setCurrentPage] =useState(1)
	const router = useRouter()
	const pathname = usePathname()
	// console.log(currentPage)
	const handlePrev = () =>{
		if(currentPage > 1){
			 setCurrentPage(currentPage-1)
			 router.push(`${pathname}?page=${currentPage-1}`)
		}
	}
	const handleNext = () =>{
		if(currentPage < totalPage){
			 setCurrentPage(currentPage+1)
			 router.push(`${pathname}?page=${currentPage+1}`)
		}
	}
  return (
    <div className="flex items-center gap-2 my-5">
      <Button
	  onClick={handlePrev}
	  disabled={currentPage===1}
        variant="outline"
        size="sm"
        className="w-8 h-8 rounded-full flex items-center justify-center"
      >
        <ArrowLeft />
      </Button>
      {[...Array(totalPage)].map((_, index) => (
        <Button
		// onClick={()=>{ setCurrentPage(index+1)}}
		onClick={() => {
			   setCurrentPage(index + 1)
			 router.push(`${pathname}?page=${index + 1}`);
		}
         
			
            
          }
		  variant={currentPage === index+1 ?"default":"outline"}
          key={index}
          size="sm"
          className="w-8 h-8 rounded-full flex items-center justify-center"
        >
          {index + 1}
        </Button>
      ))}
      <Button
	  disabled={currentPage === totalPage}
	  onClick={handleNext}
        variant="outline"
        size="sm"
        className="w-8 h-8 rounded-full flex items-center justify-center"
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default TablePagination;

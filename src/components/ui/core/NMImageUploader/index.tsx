import { useState } from "react";
import { Input } from "../../input";



const  NMImageUploader= () => {
	const [imageFile, setImageFile] = useState<File[] | []>([])
	const handleImageChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files![0]
		setImageFile((prev)=> [...prev, file])
	}
	return (
		<div>
			<Input
			onChange={handleImageChange}
			 type="file" multiple accept="image/*"
			 className="hidden"
			 id="image-uploader"
			 />
			 <label   htmlFor="image-upload"
        className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition">Upload Logo</label>

		</div>
	);
};

export default NMImageUploader;
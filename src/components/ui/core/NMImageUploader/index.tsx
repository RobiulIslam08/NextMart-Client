import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../input";

type TImageUploaderProps = {
	imageFiles: File[] | [];
	setImageFiles:Dispatch<SetStateAction<[] | File[]>>
}

const  NMImageUploader= ({imageFiles, setImageFiles}:TImageUploaderProps) => {
	const [imagePreview, setImagePreview] = useState<string[] | []>([])
	const handleImageChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files![0]
		setImageFiles((prev)=> [...prev, file])
		if(file){
			const reader = new FileReader()
			reader.onloadend = () => {
				setImagePreview((prev) => [...prev,reader.result as string])
			}
			reader.readAsDataURL(file) // এই কাজ টা আগে হবে। তারপর onloadend  এর কাজ হবে কারণ async func. url টা হয়ে তারপর onloadend এর funcion এর setImagePreview state এ set হবে। 
		}
		event.target.value = ""
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
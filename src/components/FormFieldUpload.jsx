import { CloudDownload } from "lucide-react"


const FormFieldUpload = () => {
    return (
        <div className="mt-10 flex flex-col gap-2">
            <label htmlFor="" className="text-dark opacity-75 font-bold text-lg">
                Image/Cover
            </label>
            <div className="flex flex-col gap-1 py-16 items-center border border-hijau rounded-3xl">
                <CloudDownload className="text-dark opacity-50" strokeWidth={1} size={70} />
                <input type="text" placeholder="Upload your image from your device" />
            </div>
        </div>
    )
}

export default FormFieldUpload
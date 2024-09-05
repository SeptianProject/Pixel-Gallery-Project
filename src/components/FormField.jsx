import { formFieldItems } from "../assets/assets"

const FormField = () => {
    return (
        <div className="flex flex-wrap flex-col mx-auto gap-5 w-full lg:flex-row">
            {
                formFieldItems.map((item, index) => (
                    <div key={index} className="relative flex flex-col gap-2 lg:mx-auto">
                        <label htmlFor={item.id} className="text-dark opacity-75 font-bold text-lg">
                            {item.title}
                        </label>
                        <input
                            id={item.id}
                            name={item.id}
                            type="text"
                            placeholder={item.placeholder}
                            className="border border-hijau rounded-2xl pl-7 pr-16 lg:pr-72 py-4 placeholder:text-dark placeholder:opacity-70 placeholder:text-sm"
                        />
                        {/* <div className="absolute inset-y-1/2 my-auto right-5">
                            <select id={item.id} name={item.name} className="pt-3 mx-auto bg-transparent">
                                <option>{dropDown}{item.option}</option>
                            </select>
                        </div> */}
                    </div>
                ))
            }
        </div>
    )
}

export default FormField
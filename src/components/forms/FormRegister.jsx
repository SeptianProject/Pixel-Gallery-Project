import { formFieldRegis } from "../../assets/assets"

const FormRegister = () => {
    return (
        <div className="flex flex-col gap-y-5">
            {formFieldRegis.map((field, index) => (
                <input
                    key={index}
                    placeholder={`${field.placeholder}`}
                    className='border border-hijau text-base font-light
                    py-3 px-5 w-[400px] rounded-xl'
                >
                </input>
            ))}
        </div>
    )
}

export default FormRegister
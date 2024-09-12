import { BounceInLeft } from "../animations/BounceAnimate"

const FormAuthentication = ({ formData }) => {
    return (
        <BounceInLeft delayVal={0.5}>
            <div className="flex flex-col gap-y-5 mx-auto">
                {formData.map((field, index) => (
                    <input
                        key={index}
                        placeholder={`${field.placeholder}`}
                        className='border border-hijau text-base font-light
                    py-3 px-5 w-[300px] md:w-[400px] rounded-xl focus:outline-hijau outline-1
                    transition-all duration-500 ease-in-out'/>
                ))}
            </div>
        </BounceInLeft>
    )
}

export default FormAuthentication
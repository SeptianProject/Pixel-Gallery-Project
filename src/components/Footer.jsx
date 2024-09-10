import { footerLinkItems, footerIcons, assets, footerMoreItems } from "../assets/assets"

const Footer = () => {

    return (
        <footer className="container w-full my-20 mx-auto md:mb-60 lg:mb-10">
            <div className="flex flex-col md:items-center md:justify-center ">
                <div className="md:flex md:w-full md:justify-between md:items-center ">
                    <div className="select-none">
                        <img src={assets.pixel_logo} />
                    </div>
                    <div className="flex flex-col mt-4 gap-3 ml-4 md:flex-row md:gap-7 md:m-0 lg:gap-12">
                        {footerLinkItems.map((item, index) => (
                            <a key={index} href={item.href} className="text-dark text-base font-semibold">
                                {item.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex gap-4 mt-5 ml-4 md:m-0 select-none">
                        {footerIcons.map((item, index) => (
                            <a key={index} href={item.href} >
                                <img src={item.icon} className="h-5 w-auto" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex gap-4 mt-5 items-center mr-auto ml-5 md:mt-20 md:m-0">
                    {footerMoreItems.map((item, index) => (
                        <p key={index} className="text-secondary text-sm font-medium">
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
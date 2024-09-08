import { assets } from "../../assets/assets"
import XButton from "../../components/buttons/XButton"
import GroupGithub from "../../components/GroupGithub"
import DescriptionText from "../../components/text/DescriptionText"
import MainText from "../../components/text/MainText"
import SecondaryText from "../../components/text/SecondaryText"
import SingleDescText from "../../components/text/SingleDescText"

const DetailTask = () => {
    return (
        <>
            <div className="flex flex-col mx-auto px-8 md:px-16 lg:px-20 lg:mx-auto lg:max-w-full">
                <div> <XButton /> </div>
                <div className="mt-16 mb-10 pr-5">
                    <MainText
                        titleText='Creating login & register pages from flutter'
                        maxWDesk='max-w-2xl'
                    />
                </div>
                <GroupGithub />
                <div className='mt-20 mb-5 select-none'>
                    <div className='flex justify-center items-center'>
                        <img src={assets.detail_image}
                            className='max-w-6xl w-full h-full' />
                    </div>
                </div>
                <DescriptionText />
                <div className="mt-5">
                    <SingleDescText text='Assigned To' />
                    <SecondaryText
                        text='Kipli Saputra, Nera Keihaya Bila, Opik Septian' textMd='lg' fontMd='medium' />
                </div>
                <div className="mx-auto flex flex-col items-center gap-y-3 my-40">
                    <div>
                        <img src={assets.photo_profile} className="size-20" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-dark font-semibold text-2xl max-w-xs">Creating login & register pages from flutter</h2>
                        <h4 className="mt-2 text-secondary text-sm font-medium">Published on 19/08/2009</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailTask
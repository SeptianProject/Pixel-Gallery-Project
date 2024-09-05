import { BounceInLeft } from '../components/animations/BounceAnimate'
import ListCards from '../components/ListCards'
// import { useParams } from 'react-router-dom'
import MainText from '../components/text/MainText'
import SecondaryText from '../components/text/SecondaryText'

const ResultSearchPage = () => {
    // const { query } = useParams()
    return (
        <div className='flex flex-col mx-auto px-14 lg:px-20 lg:mx-auto lg:max-w-full'>
            <BounceInLeft delayVal={0.8}>
                <div className="mt-12 mx-auto flex flex-col text-center items-center md:px-20 lg:px-80">
                    <MainText
                        // titleText={`Looking for result : ${decodeURIComponent(query)}`}
                        titleText='Looking for result : Web Design'
                        maxWMob='[300px]'
                        maxWTab='lg'
                        maxWDesk='2xl'
                    />
                    <SecondaryText
                        // text={`Explore ${decodeURIComponent(query)} Project`}
                        text='Explore Web Design Project'
                    />
                </div>
            </BounceInLeft>
            <ListCards />
        </div>
    )
}

export default ResultSearchPage
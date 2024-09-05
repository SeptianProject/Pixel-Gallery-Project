import SingleDescText from './SingleDescText'
import SecondaryText from './SecondaryText'

const DescriptionText = () => {
  return (
    <div className='mt-10'>
      <div>
        <SingleDescText text='Description' />
        <p className='py-5 md:text-lg md:tracking-wide md:font-medium'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae fringilla purus, a iaculis risus. Cras a
          tortor id leo lacinia blandit. Praesent at dolor sit amet turpis luctus fringilla. Duis ac pharetra sapien. Nam
          vehicula orci in nulla placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae fringilla
          purus, a iaculis risus. Cras a tortor id leo lacinia blandit. Praesent at dolor sit amet turpis luctus fringilla.
          Duis ac pharetra sapien. Nam vehicula orci in nulla placerat Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Aenean vitae fringilla purus, a iaculis risus. Cras a tortor id leo lacinia blandit. Praesent at dolor sit
          amet turpis luctus fringilla. Duis ac pharetra sapien. Nam vehicula orci in nulla placerat. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Aenean vitae fringilla purus, a iaculis risus. Cras a tortor id leo lacinia
          blandit. Praesent at dolor sit amet turpis luctus fringilla. Duis ac pharetra sapien. Nam vehicula orci in nulla
          placerat
        </p>
        <SingleDescText text='Technology' />
        <SecondaryText
          text='React Tailwind CSS ' textMd='lg' fontMd='bold'
        />
      </div>
    </div >
  )
}

export default DescriptionText
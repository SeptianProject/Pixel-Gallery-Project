import SortButton from "./buttons/SortButton"

const ProjectList = () => {
    return (
        <div className="relative mt-16 md:flex justify-between lg:mt-24 md:pr-5 sm:mb-20 md:mb-0">
            <div>
                <h1 className='text-dark text-4xl font-extrabold leading-snug md:text-5xl'>Latest Projects</h1>
                <p className="text-secondary text-sm font-medium my-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div>
                <SortButton />
            </div>
        </div>
    )
}

export default ProjectList
import CardTask from '../cards/CardTask'

const ListCardTasks = () => {
    return (
        <div className="px-4 md:px-0 mt-28 grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">
            {/* <ListCardProject /> */}
            <CardTask />
            <CardTask />
            <CardTask />
            <CardTask />
            <CardTask />
            <CardTask />
        </div>
    )
}

export default ListCardTasks
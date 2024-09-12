
const ProfileText = ({ name, role, instance, date, gapCustom }) => {

    return (
        <div className={`flex flex-col ${gapCustom}`}>
            <h1 className="text-dark font-bold text-3xl">
                {name}
            </h1>
            <p className="text-dark font-normal text-xl">
                {role}
            </p>
            <p className="text-dark font-normal text-xl">
                {instance}
            </p>
            <p className="text-dark font-normal text-xl">
                {date}
            </p>
        </div>
    )
}

export default ProfileText
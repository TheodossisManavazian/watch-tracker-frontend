

export default function FeaturedWatch(props){

    console.log(props.watch)
    return (
        <div className="rounded-3xl p-6 bg-primary flex flex-col justify-between">
            <div className="w-3/4 m-auto h-auto">
                <img src={props.watch.image_path} alt={"Watch"+props.index} className="m-auto object-scale-down w-fit h-72 rounded-t-lg" />
            </div>
            <div>
                <h3 className="text-2xl font-semibold mt-4">{props.watch.brand}</h3>
                <h2 className="text-lg">{props.watch.model}</h2>
                <hr className="mt-2"></hr>
                <p className="mt-2 text-text-gray">{props.watch.description}</p>
            </div>
            <div className="mt-2 rounded-2xl bg-secondary py-1 px-4 w-fit max-w-full m-auto text-center text-balance">
                {props.watch.reference_number}
            </div>
        </div>
    )
}

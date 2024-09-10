

export default function FeaturedWatch(props){

    console.log(props.watch)
    return (
        <div className="w-full rounded-3xl p-6 bg-primary">
            <img src={props.watch.image_path} alt={"Watch"+props.index} className="m-auto w-fit h-64 object-cover object-center rounded-t-lg" />
            <h3 className="text-2xl font-semibold mt-4">{props.watch.brand}</h3>
            <h2 className="text-lg">{props.watch.model}</h2>
            <hr className="mt-2"></hr>
            <p className="mt-2 text-text-gray">{props.watch.description}</p>
            <div className="mt-2 rounded-2xl bg-secondary py-1 px-4 w-fit m-auto text-center">
                <p className="text-lg">{props.watch.reference_number}</p>
            </div>
        </div>
    )
}

function WatchDetails(props){
    const mappings = [
        ['Dial', props.dial],
        ['Bracelet Material', props.details.bracelet_material],
        ['Bracelet Color',props.details.bracelet_color],
    ];

    return (
        <div className="p-3">
            <div className="w-min">
                <h1 className="text-sm font-semibold text-accent-primary xl:text-xl">Details</h1>
            </div>                 
            {mappings.map((details) => (
                <div key={details[0]} className="flex justify-between">
                    <div className="text-sm xl:text-lg">{details[0]}</div>
                    <div className="text-sm xl:text-lg">{details[1]}</div>
                </div>
            ))}
        </div>
    )
};

export default WatchDetails;
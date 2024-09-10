
function WatchCaliber(props){
    const mappings = [
        ['Caliber', props.details.caliber],
        ['Movement',props.details.movement],
        ['Power Reserve',props.details.power_reserve],
    ];


    return (
        <div className="p-3">
            <div className="w-min">
                <h1 className="text-sm font-semibold text-accent-primary xl:text-xl">Caliber</h1>
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

export default WatchCaliber;


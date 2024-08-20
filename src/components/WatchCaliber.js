
function WatchCaliber(props){
    const mappings = [
        ['Caliber', props.details.caliber],
        ['Movement',props.details.movement],
        ['Power Reserve',props.details.power_reserve],
        ['Number Of Jewels',props.details.qty_jewels]
    ];


    return (
        <div className="p-3">
            <div className="w-min">
                <h1 className="text-xl font-semibold text-accent-primary">Caliber</h1>
            </div>
            {mappings.map((details) => (
                <div key={details[0]} className="flex justify-between">
                    <div>{details[0]}</div>
                    <div>{details[1]}</div>
                </div>
            ))}
        </div>

    )
};

export default WatchCaliber;


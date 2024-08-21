function WatchCase(props){
    const mappings = [
        ['Case Size', props.details.case_size],
        ['Case Material',props.details.case_material],
        ['Crystal',props.details.crystal],
        ['Water Resistance',props.details.water_resistance]
    ];

    return (
        <div className="p-3">
            <div className="w-min">
                <h1 className="text-sm font-semibold text-accent-primary">Case</h1>
            </div>       
            {mappings.map((details) => (
                <div key={details[0]} className="flex justify-between">
                    <div className="text-sm">{details[0]}</div>
                    <div className="text-sm">{details[1]}</div>
                </div>
            ))}
        </div>
    )
};

export default WatchCase;
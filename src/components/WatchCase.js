function WatchCase(props){
    const mappings = [
        ['Case Size', props.details.case_diameter],
        ['Case Material',props.details.case_material],
        ['Water Resistance',props.details.case_water_resistance]
    ];

    return (
        <div className="p-3">
            <div className="w-min">
                <h1 className="text-sm font-semibold text-accent-primary xl:text-xl">Case</h1>
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

export default WatchCase;
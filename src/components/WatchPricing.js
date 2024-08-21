import { currencyFormat, percentFormat} from "../utils";

function WatchPricing(props){    
    const mappings = [
        ['Retail Price', currencyFormat(props.details.retail_price)],
        ['Market Price',currencyFormat(props.details.market_price)],
        ['Change',currencyFormat(props.details.price_change)],
        ['% Change',percentFormat(props.details.percent_change)],
    ];


    return (
        <div className="p-3 grid gap-y-8 grid-cols-2 xl:grid-cols-4">
            {mappings.map((details) => (
                <div key={details[0]} className="flex flex-col">
                    <div className='text-xs text-accent-primary font-semibold text-center'>{details[0]}</div>
                    <div className='text-xs text-center'>{details[1]}</div>
                </div>
            ))}
        </div>
    )
};

export default WatchPricing;

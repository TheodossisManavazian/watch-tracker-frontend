import { currencyFormat, percentFormat} from "../utils";

function WatchPricing(props){    
    const mappings = [
        ['Retail Price', currencyFormat(props.details.retail_price)],
        ['Market Price',currencyFormat(props.details.market_price)],
        ['Change',currencyFormat(props.details.price_change)],
        ['% Change',percentFormat(props.details.percent_change)],
    ];


    return (
        <div className="p-3 flex flex-row h-full justify-between">
            {mappings.map((details) => (
                <div key={details[0]} className='flex flex-col m-auto'>
                    <div className='text-sm font-semibold text-center'>{details[0]}</div>
                    <div className='text-sm text-center'>{details[1]}</div>
                </div>
            ))}
        </div>
    )
};

export default WatchPricing;

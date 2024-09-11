import { currencyFormat, percentFormat} from "../utils";

function WatchPricing(props){    
    const mappings = [
        ['Retail Price', currencyFormat(props.details.retail_price)],
        ['Market Price',currencyFormat(props.details.market_price)],
        ['Change',currencyFormat(props.details.price_change)],
        ['% Change',percentFormat(props.details.percent_change)],
    ];


    return (
        <div className="p-3 grid gap-y-4 grid-cols-2 xl:grid-cols-4">
            {mappings.map((details, index) => (
                <div key={details[0]} className={index % 2 === 1 ? 'text-right xl:text-center' : 'text-left xl:text-center'}>
                    <div className='text-xs xl:text-lg text-accent-primary font-semibold'>{details[0]}</div>
                    <div className='text-xs xl:text-lg'>{details[1]}</div>
                </div>
            ))}
        </div>
    )
};

export default WatchPricing;

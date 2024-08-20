import Card from "./Card";
import { currencyFormat } from "../utils";


function CardLayout(props) { 
    let data = props.data;

    return (
        <div className="ml-20 mr-20 flex flex-wrap flex-row justify-space justify-center overflow-auto h-max">
            {data.length > 0 && data.map((d) => (
                <button key={d.watch.reference_number} className="w-1/5 h-auto ml-6 mr-6 mb-2 mt-2 grow" onClick={() => props.onClick(d)}>
                    <Card
                    brand={d.watch.brand}
                    name={d.watch.name}
                    marketPrice={currencyFormat(parseInt(d.watch.pricing.market_price))}
                    retailPrice={currencyFormat(parseInt(d.watch.pricing.retail_price))}
                    referenceNumber={d.watch.reference_number}
                    imageMapping={d.image_mapping.image_name}
                    />
                </button>
            ))}
        </div>
    )
};

export default CardLayout;
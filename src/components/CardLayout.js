import Card from "./Card";
import { currencyFormat } from "../utils";


function CardLayout(props) { 
    let data = props.data;

    return (
        <div className="w-full flex flex-row flex-wrap justify-evenly xl:px-40">
            {data.length > 0 && data.map((d) => (
                <button key={d.watch.reference_number} className="m-auto my-2 md:max-xl:mx-2" onClick={() => props.onClick(d)}>
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
import Card from './Card';
import { currencyFormat } from "../utils";
import { useState } from "react";

function CardLayout(props) { 
    let data = props.data;
    const [visibleWatches, setVisibleWatches] = useState(20);

    const loadMoreWatches = () => {
      setVisibleWatches(prevVisible => prevVisible + 20);
      console.log(visibleWatches);
    };

    return (
        <div className="main">
            <div className="w-full flex flex-row px-10 flex-wrap justify-evenly xl:px-40 mb-10">
                {data.length > 0 && data.slice(0, visibleWatches).map((d, index) => (
                    <button key={d.watch.reference_number} className="m-auto my-2 md:max-xl:mx-2 max-w-[90%] h-auto" onClick={() => props.onClick(d)}>
                        <Card
                        brand={d.watch.brand}
                        model={d.watch.model}
                        marketPrice={currencyFormat(parseInt(d.watch.pricing.market_price))}
                        retailPrice={currencyFormat(parseInt(d.watch.pricing.retail_price))}
                        referenceNumber={d.watch.reference_number}
                        imageMapping={d.image_mapping.image_path}
                        />
                    </button>
                ))}
            </div>
            {visibleWatches < data.length && (
                <div className="flex justify-center m-8">
                    <button
                        onClick={loadMoreWatches}
                        className="bg-gradient-to-l from-accent-primary-100 to-accent-primary-200 text-text font-bold py-2 px-12 rounded-3xl hover:from-accent-primary-200 hover:to-accent-primary"
                    >
                        View More
                    </button>
                </div>
            )}
        </div>
    )
};

export default CardLayout;
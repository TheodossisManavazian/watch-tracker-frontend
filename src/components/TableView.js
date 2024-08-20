import { currencyFormat } from "../utils";


function TableLayout(props) { 
    let data = props.data;
    const headings = ['Image', 'Reference No.', 'Brand', 'Model', 'Retail Price', 'Market Price', 'Price Change', 'Years Produced']

    return (
        <table className="table-auto mx-32 max-w-full border-collapse overflow-auto">
            <thead>
                <tr className="bg-primary border-b ">
                    {headings.map((heading) => (
                        <th className="w-64 text-accent-primary">{heading}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.length > 0 && data.map((d) => (
                    <tr key={d.watch.reference_number} className="w-full h-auto p-3 bg-primary text-l border-b">
                        <td className="px-4 cursor-pointer" onClick={() => props.onClick(d)} > <img className="m-auto h-32 p-3" src={require('../images/' + d.image_mapping.image_name)} alt={props.name}/></td>
                        <td> <span className="rounded-xl bg-accent-secondary px-2 py-1">{d.watch.reference_number}</span> </td>
                        <td className="px-4 py-2 text-accent-primary font-semibold">{d.watch.brand} </td>
                        <td className="px-4 py-2">{d.watch.model}</td>
                        <td className="px-4 py-2">{currencyFormat(d.watch.pricing.market_price)}</td>
                        <td className="px-4 py-2">{currencyFormat(d.watch.pricing.retail_price)}</td>
                        <td className="px-4 py-2">{currencyFormat(d.watch.pricing.price_change)}</td>
                        <td className="px-4 py-2">{d.watch.years_produced}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default TableLayout;
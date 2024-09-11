import Tilt from "react-parallax-tilt";


function Card(props){
    const imagePath = '/images/' + props.imageMapping;

    return(
        <Tilt tiltMaxAngleX={10}
            tiltMaxAngleY={10} perspective={1000} scale={1.05}>
            <div className="bg-primary rounded-2xl p-3">
                <div className="p-6 rounded-2xl bg-background w-auto">
                    <img className="m-auto object-scale-down h-auto w-64 max-h-[16rem]" loading='lazy' src={imagePath} alt={props.name}/>
                </div>
                <div className="m-auto flex flex-col grow">
                    <div className="my-3 justify-center">
                        <h1 className="text-accent-primary text-2xl font-semibold">{props.brand}</h1>
                        <h2 className="text-xl">{props.model}</h2>
                    </div>
                    <div className="m-auto justify-center flex flex-col">
                        <h3 >{props.marketPrice}</h3>
                        <a target='_blank' className='bg-secondary rounded-xl max-w-fit m-auto px-3' href={"https://www.chrono24.com/search/index.htm?query=" + props.referenceNumber + "&dosearch=true&searchexplain=1&watchTypes=&accessoryTypes="}>{props.referenceNumber}</a>
                    </div>
                </div>
            </div>
        </Tilt>
    )
};

export default Card;

export default function WatchTitleInfo(props){

    return (
        <div className="p-3 h-full flex flex-col justify-between">
            <div className='flex flex-row justify-between'>
                <div className='text-accent-primary font-semibold text-sm xl:text-xl'>{props.watch.brand}</div>
                <div className='text-xs font-bold bg-accent-secondary rounded-2xl my-auto px-2 xl:text-lg'>{props.watch.reference_number}</div>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='text-xs xl:text-lg font-semibold'>{props.watch.model + " " + props.watch.nickname}</div>
                <div className='text-xs xl:text-lg font-semibold'>{props.watch.years_produced}</div>
            </div>
        </div>
    )
}
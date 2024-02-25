import { Lobster_Two } from "next/font/google";
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const LB2 = Lobster_Two({
    subsets: ['latin'],
    weight: ["400", "700"]
});

interface IProps {
    imageUrl: string
    name: string
    content: string
}

export default function CustomerCard(props: IProps) {
    return(
        <div className='p-5 w-full bg-violet-950 shadow-violet-300 shadow-2xl rounded-lg flex flex-col items-center'>
            <div style={{backgroundImage:`url("/${props.imageUrl}")`}} className='w-[75px] h-[75px] bg-cover rounded-full'>

            </div>
            <h6 className='font-bold text-amber-300 text-xl py-3'> {props.name} </h6>
            <p className={`text-lg text-violet-200 px-3 `}>
                <RiDoubleQuotesL style={{position:'relative', display:'inline'}}/> &nbsp;
                {props.content} &nbsp;
                <RiDoubleQuotesR style={{display:'inline'}}/>
            </p>
        </div>
    );
}
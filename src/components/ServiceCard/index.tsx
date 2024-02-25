import { RiVidicon2Line } from "react-icons/ri";
import { IconType } from 'react-icons';

interface IProps {
    icon: IconType
    title: string
    content: string
}

export default function ServiceCard(props: IProps) {

    return(
        <div className='rounded-lg shadow-lg'>
            <div className='p-5 flex flex-col items-center gap-3'>
                <div className='w-[50px] h-[50px] flex items-center bg-violet-600 shadow-violet-300 justify-center text-2xl text-violet-50 rounded-full'>
                    { <props.icon/> }
                </div>
                <h4 className='font-bold text-xl'>{props.title}</h4>
            </div>
            <div className='pt-0 p-10'>
                <p>{props.content}</p>
            </div>
        </div>
    )
}
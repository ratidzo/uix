import { URL } from "url";
import { Nunito_Sans } from "next/font/google";


const nunito_sans_semibold = Nunito_Sans({
    subsets: ['latin'], 
    weight: '600'
})

export default function Destination(
    {city, state, description, image_url}:{
        city: string,
        state: string,
        description: string,
        image_url: string
    }

) {
    return (
        <div className="w-[25vw] rounded-lg shadow">
            <img alt={city} src={image_url} className="w-full rounded-t-lg " />
            <div className="flex px-4 pb-8 pt-2 gap-2 flex-wrap">
                <div className={`${nunito_sans_semibold.className}
                 text-gray-500 `}>
                    <h1> {city}, {state} </h1>
                </div>
               
                <div className="text-gray-800">
                    <h1>{ description } </h1>
                </div>
             
            </div>
        </div>
    )
}
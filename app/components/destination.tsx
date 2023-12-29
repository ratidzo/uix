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
        <div className="border w-[30vw]">
            <img alt={city} src={image_url} className="w-full" />
            <div className="flex gap-2 flex-wrap">
                <div className={`${nunito_sans_semibold.className}
                `}>
                    <h1> {city},{state} </h1>
                </div>
               
                <h1>{ description } </h1>
             
            </div>
        </div>
    )
}
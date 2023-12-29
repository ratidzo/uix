import { URL } from "url";
import Image from "next/image";
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
        <div className="border">
            <Image alt={city} width={128} height={128} src={image_url} />
            <div className="flex gap-2">
                <h1 className={`${nunito_sans_semibold.className}
                `}>
                    {city}, {state}
                </h1>
                <span>
                    { description }
                </span>
            </div>
        </div>
    )
}
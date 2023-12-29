import { URL } from "url";
import Image from "next/image";

export default function Destination(
    {city, state, description, image_url}:{
        city: string,
        state: string,
        description: string,
        image_url: string
    }

) {
    return (
        <div>
            <Image alt={city} width={128} height={128} src={image_url} />
            <div>
                <h1>
                    {city}, {state}
                </h1>
                <span>
                    { description }
                </span>
            </div>
        </div>
    )
}
import { Nunito_Sans } from "next/font/google"


const nunito_sans_semibold = Nunito_Sans({
    subsets: ['latin'],
    weight: '500'
})

export default function Button ({label}: {label: string}) {

    return (
        <button className={`bg-primary-purple-blue text-gray-100
         ${nunito_sans_semibold.className} text-[1.1rem] px-8 py-1 rounded
         hover:bg-blue-700 hover:shadow`}>
            { label }
        </button>
    )
}
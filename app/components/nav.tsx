import { Nunito_Sans } from "next/font/google"
import Image from "next/image"

const nunito_sans_bold = Nunito_Sans({
    subsets: ['latin'],
    weight: '700'
})


const nunito_sans = Nunito_Sans({
    subsets: ['latin'],
    weight: '400'
})

export default function Nav() {
    const links = [
        {
            name: 'Bookings',
            url: '/'
        },
        {
            name: 'Flights',
            url: '/'
        },
        {
            name: 'Company',
            url: '/'
        },
        {
            name: 'FAQs',
            url: '/'
        }
    ]

    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-accent-purple-extralight">
            <div className={`flex items-center gap-1 ${nunito_sans_bold.className} text-primary-purple-blue
            text-4xl`}>
                <h1>
                    Fleit
                </h1>
                <Image alt="Brand Icon" src={'plane.svg'}
                width={32} height={32}/>
            </div>
            <div>
                
            </div>
            <div>
                Button
            </div>
        </nav>
    )
}
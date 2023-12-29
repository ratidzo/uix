import { Nunito_Sans } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const nunito_sans_bold = Nunito_Sans({
    subsets: ['latin'],
    weight: '700'
})

const nunito_sans_semibold = Nunito_Sans({
    subsets: ['latin'],
    weight: '500'
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
                <ul className={`flex gap-12 ${nunito_sans_semibold.className}
                 text-primary-purple-dark text-[1.1rem]`}>
                    {
                        links.map(link => (
                            <Link href={link.url} className="hover:text-primary-purple-blue ">
                                <li key={link.name}>
                                    { link.name }
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div>
                Button
            </div>
        </nav>
    )
}
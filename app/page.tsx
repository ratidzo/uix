import Image from 'next/image'
import Destination from './components/destination';

export default async function Home() {
  const destinations = await getDestinations()
  return (
    <div className='flex justify-center w-full py-8 px-8'>
      <ul className='flex justify-center flex-wrap gap-6'>
        {
          destinations.map((destination: any) => (
            <li key={destination.id}>
              {
                <Destination 
                city={destination.city} 
                state={destination.state}
                description={destination.description}
                image_url={destination.picture} />
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}


async function getDestinations() {
  const data = await fetch('http://127.0.0.1:8000/destinations/',
    {
      method: 'GET',
      
      next: {
        revalidate: 10
      }
    },
   
  );
  return data.json()
}
import Image from 'next/image'


export default async function Home() {
  const destinations = await getDestinations()
  return (
    <div>
      <ul>
        {
          destinations.map((destination: any) => (
            <li key={destination.id}>
              {
                
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
        revalidate: 5
      }
    },
   
  );
  return data.json()
}
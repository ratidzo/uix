import Image from 'next/image'

export default async function Home() {
  const destinations = await getDestinations()
  return (
    <div>
      <Image alt='city' width={64} height={64} src={'http://127.0.0.1:8000/media/destination_images/Sydney_wFs4nre.png'}/>
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
"use client";
import { makeQueryClient } from '@/services/QueryClientCreator';
import Image from 'next/image';
import { use, useState } from 'react';

type bike = { id: string, name: string };
const queryClient = makeQueryClient();

export default function Home() {  
  const [selectedBike, setSelectedBike] = useState<bike>();  

  const data = use(
    queryClient('bikes', () => fetch('http://localhost:3000/api/bikes').then(res => res.json()) as Promise<bike[]>)
  );

  const bikeDetail = selectedBike ? 
    use(queryClient(
      `bike-${selectedBike?.id}`, 
      () => fetch(`http://localhost:3000/api/bikes/${selectedBike?.id}`).then(res => res.json()) as Promise<bike>
    )) 
    : null;
  
  return (
    <div>
      {
        bikeDetail && (<><Image src={bikeDetail?.image} width={300} height={200}/><p>{JSON.stringify(bikeDetail)}</p></>)
      }
      {data.map((bike) => (
        <button onClick={() => setSelectedBike(bike)}key={bike.id}>{bike.name}</button>
      ))}
    </div>
    )
}
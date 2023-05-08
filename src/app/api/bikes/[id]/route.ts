import bikes from '../../../../../data/bikes.json' ;
import { NextResponse } from 'next/server';

export async function GET(_: Request, context: { params: { id: string } }) {
  const id = context.params.id;  
  return NextResponse.json(bikes.find(bike => bike.id === id));
}
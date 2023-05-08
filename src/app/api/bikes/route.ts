import { NextApiRequest } from 'next';
import bikes from '../../../../data/bikes.json' ;
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(bikes);
}
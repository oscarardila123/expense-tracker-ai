// Endpoint temporal para diagnóstico de variables de entorno en Next.js
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      DATABASE_URL: process.env.DATABASE_URL,
    // Puedes agregar aquí otras variables que quieras revisar
    // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    // ...Object.fromEntries(Object.entries(process.env).filter(([k]) => k.startsWith('NEXT_'))),
  });
}


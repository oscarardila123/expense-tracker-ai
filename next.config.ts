import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    EMAIL_FROM: process.env.EMAIL_FROM,
    IVA_RATE: process.env.IVA_RATE,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    PRISMA_GENERATE_DATAPROXY_ONLY: process.env.PRISMA_GENERATE_DATAPROXY_ONLY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    WOMPI_ENVIRONMENT: process.env.WOMPI_ENVIRONMENT,
    WOMPI_EVENTS_SECRET: process.env.WOMPI_EVENTS_SECRET,
    WOMPI_INTEGRITY_SECRET: process.env.WOMPI_INTEGRITY_SECRET,
    WOMPI_PRIVATE_KEY: process.env.WOMPI_PRIVATE_KEY,
    WOMPI_PUBLIC_KEY: process.env.WOMPI_PUBLIC_KEY,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://accounts.google.com https://apis.google.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://api.anthropic.com https://accounts.google.com https://www.googleapis.com",
              "frame-src 'self' https://drive.google.com https://docs.google.com https://accounts.google.com https://finkargo.storylane.io",
              "frame-ancestors 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'"
            ].join('; ')
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};

export default nextConfig;

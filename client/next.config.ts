import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "pm-s3-images-prod.s3.af-south-1.amazonaws.com", 
        port: "",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;

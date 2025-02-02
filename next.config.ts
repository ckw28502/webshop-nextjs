import type { NextConfig } from "next";
import "./envConfig";
import createNextIntlPlugin from 'next-intl/plugin';


const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);

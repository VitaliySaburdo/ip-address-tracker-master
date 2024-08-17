export interface GeoData {
  ip: string;
  location: {
    city: string;
    country: string;
    postalCode: string;
    timezone: string;
  };
  isp: string;
}
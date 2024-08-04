import { CountryResponse } from ".";
import { Region } from "./region.interface";


export interface CacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
}

interface TermCountries {
  term: string;
  countries: CountryResponse[];
}

interface RegionCountries {
  region:      Region;
  countries: CountryResponse[];
}

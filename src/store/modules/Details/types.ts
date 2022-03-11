export interface ICountry {
  name: string;
  alpha2Code: string;
  subregion: string;
}
export interface ISettingsState {
  countries: ICountry[];
  selectedCountry: ICountry;
  error: boolean;
}

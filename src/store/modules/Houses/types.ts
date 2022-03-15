export interface ISearchHouses {
  id: String,
  address: {
    formattedAddress: String,
    geolocation: {
      lat: Number,
      lng: Number
    }
  },
  images: String[],
  price: Number,
  bathrooms: Number,
  bedrooms: Number,
  parkingSpaces: Number,
  usableArea: Number,
  publish: Boolean
}

export interface IFilter {
  group: String
  value: String | Number[]
}

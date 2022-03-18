export interface IServiceResponsex {
  id: string
  address: {
    formattedAddress: string
    geolocation: {
      lat: number
      lng: number
    }
  }
  images: string[]
  price: number
  bathrooms: number
  bedrooms: number
  parkingSpaces: number
  usableArea: number
  publish: boolean
}

export interface IService {
  search: <T>(url: string) => Promise<T[]>
}

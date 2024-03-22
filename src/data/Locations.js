export const locations = [
  {
    city: 'Rio de Janeiro',
    state: '',
    country: 'BR',
    isDefault: true,
  },
  {
    city: 'Beijing',
    state: '',
    country: 'CN',
    isDefault: false,
  },
  {
    city: 'Los Angeles',
    state: 'CA',
    country: 'US',
    isDefault: false,
  },
]

export const defaultLocation = locations.find((location) => location.isDefault)

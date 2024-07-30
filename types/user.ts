export interface CustomerListType {
  ID: number;
  PRESENTCODE: string;
  PRESENTTITLE: string;
  PRESENTAUTHORNAME: string;
  COUNTRY: null;
  CITY: null;
  SAVEDATE: null;
  communication: null;
}


export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}
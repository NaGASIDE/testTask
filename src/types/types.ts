export interface IInitialState {
  users: IUser[] | undefined;
  isFetching:boolean;
  isError: boolean;
  errorTitle: null | string | undefined
}

export type UsersAction = UsersGetSuccess | UsersGetRequest | UsersGetFailure

export interface UsersGetSuccess {
  type: string;
  payload?: IUser[] | undefined
}

export interface UsersGetRequest {
  type: string;
}

export interface UsersGetFailure {
  type: string;
  payload?: string | null | undefined
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  }
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  company: ICompany
}
export interface IInitialState {
  users: IUser[] | undefined;
  selectedIds: number[] | undefined;
  isFetching:boolean;
  isError: boolean;
  errorTitle: null | string | undefined
}

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

export interface DeleteUser {
  type: string;
  payload?: number
}

export interface SelectId {
  type: string;
  payload?: number | undefined
}

export interface UnSelectId {
  type: string;
  payload?: number | undefined
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

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany
}
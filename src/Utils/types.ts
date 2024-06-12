export type BoxProps = {
  id: string;
  name: string;
};

export type CategoryProps = {
  id: string;
  name: string;
};
export type UserProps = {
  id: string;
  name: string;
  created_at: string;
  updatedAt: string;
};

export type AnimalProps = {
  id: string;
  name: string;
  created_at: string;
  arrival: string;
  departure: string;
  image: string;
  boxId: string;
  ownerId: string;
  categoryId: string;
  category: CategoryProps;
  user: UserProps;
  box: BoxProps;
};

export type CryptoProps = {
  name: string;
  value: string;
  quantity: string;
  image: string;
};

export type OfferProps = {
  id: string;
  name: string;
  value: number;
  image: string;
  quantity: number;
  created_at: string;
  updated_at: string;
};

export type CreateCryptoProps = {
  name: string;
  value: string;
  quantity: string;
  image: string;
};

export type AuthUpdateProps = {
  email: string;
  password: string;
  pseudo?: string;
  age: number;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  city: string;
  promoCode: string;
};

export type AuthProps = {
  email: string;
  password: string;
  pseudo?: string;
  firstName: string;
  age: number;
  lastName: string;
  city: string;
  promocode?: string;
};

export type RoleListProps = {
  name: string;
  id: string;
};

export type UserSProps = {
  id: string;
  firstName: string;
  lastName: string;
  pseudo: string;
  UserHasCrypto?: string;
  dollarAvailables: number;
};

export type AnimalUpdateOrInsertProps = {
  id: string;
  name: string;
  created_at: string;
  arrival: string;
  departure: string;
  image: string;
  boxId: string;
  ownerId: string;
  categoryId: string;
};

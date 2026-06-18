export type User = {
  id: string;
  email: string;
  name: string;
  role?: string;
};

export type Profile = {
  id: string;
  userId: string;
  bio?: string;
  avatar?: string;
  phone?: string;
};

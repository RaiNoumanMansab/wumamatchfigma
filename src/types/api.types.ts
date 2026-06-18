import type { User, Profile } from './user.types';

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  email: string;
  password: string;
  name: string;
};

export type ForgotPasswordPayload = {
  email: string;
};

export type AuthResponse = {
  user: User;
};

export type UpdateProfilePayload = Partial<Profile>;

export type SendMessagePayload = {
  recipientId: string;
  content: string;
};

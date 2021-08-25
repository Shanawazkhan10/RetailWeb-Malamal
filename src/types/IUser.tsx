export interface IUser {
  isPasswordCheked: boolean;
  isAuthenticated: boolean;
  isError: boolean;
  UserId: string;
  user: any | null;
}

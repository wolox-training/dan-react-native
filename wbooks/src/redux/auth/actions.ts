export enum TypeAuth {
  LOGIN = 'Login'
}

interface login {
  user: string;
  password: string;
}

export const loginAuth = ({ user, password }: login) => ({
  type: TypeAuth.LOGIN,
  payload: { user, password }
});

export enum TypeAuth {
  LOGIN = 'Login'
}

interface login {
  user: string;
  password: string;
}

export const loginAuth = ({ user, password }: login) => {
  return {
    type: TypeAuth.LOGIN,
    payload: { user, password }
  };
};

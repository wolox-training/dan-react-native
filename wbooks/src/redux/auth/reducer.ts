import { Action } from '@interfaces/action';

import { TypeAuth } from './actions';

const initialState = () => ({
  logged: false
});

function reducer(state = initialState(), { type, payload }: Action<TypeAuth, any>) {
  switch (type) {
    case TypeAuth.LOGIN: {
      const { user, password } = payload;
      // verification on the corresponding endpoint
      const logged = !!(user === 'admin' && password === '123456');
      return { logged };
    }
    default:
      return state;
  }
}

export default reducer;

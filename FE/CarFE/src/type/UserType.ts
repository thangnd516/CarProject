// userTypes.ts
export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    image: string;
  }
  
  export interface UserState {
    account: {
      access_token: string;
      refresh_token: string;
      username: string;
      image: string;
      role: string;
    };
    isAuthenticated: boolean;
  }
  
  export const SET_USER = 'SET_USER';
  export const LOGOUT_USER = 'LOGOUT_USER';
  
  // Định nghĩa kiểu cho các actions
  export type UserActionTypes =
    | { type: typeof SET_USER; payload: { account: UserState['account'] } }
    | { type: typeof LOGOUT_USER };
  
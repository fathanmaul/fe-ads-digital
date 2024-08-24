import 'next-auth';

declare module 'next-auth' {
  interface User {
    username?: string;
    phone?: string;
    country_code?: string;
  }

  interface Session {
    user: User;
  }
}

enum Theme {
  Light = "light",
  Dark = "dark"
}

export {
  Theme
};
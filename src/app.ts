interface UserInfo {
  name: string;
  email: string;
  role: string;
  password: string;
  phone: number;
}

type orderInfo = Omit<UserInfo, "role" | "password" | "phone">;

type Iorder<T> = {
  [P in keyof T]: T[P];
};

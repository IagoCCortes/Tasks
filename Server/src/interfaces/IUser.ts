export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  salt: string;
  birthday: Date;
  profilePicUrl: string;
}

export interface IUserInputDTO {
  name: string;
  email: string;
  password: string;
}

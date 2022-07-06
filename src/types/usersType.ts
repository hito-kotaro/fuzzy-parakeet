export type userType = {
  id: number;
  name: string;
  roleId: number;
  roleName: string;
  teamId: number;
  teamName: string;
  description: string;
  point: number;
  penalty: number;
  created_at: string;
  updated_at: string;
};

export type createUserType = {
  name: string;
  email: string;
  roleId: number;
  teamId: number;
  password: string;
};

export type updateUserPasswordType = {
  id: number;
  password: string;
};

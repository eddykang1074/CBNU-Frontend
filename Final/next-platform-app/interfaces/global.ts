export interface IGlobalData {
  token: string;
  member: ILoginMember;
}

export interface ILoginMember {
  member_id: number;
  name: string;
  email: string;
}

export interface IProfile {
  title: string;
  text: string;
}

export interface Imain {
  profile: number;
  personalInformation?: IProfile[];
}

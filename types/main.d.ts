export interface IProfile {
  title: string;
  text: string;
  icon: string;
  url?: string;
}

export interface Imain {
  profile: number;
  personalInformation?: IProfile[];
}

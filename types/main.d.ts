export interface IProfile {
  information: string;
  history: string;
}

export interface Imain {
  profile: number;
  personalInformation?: IProfile[];
}

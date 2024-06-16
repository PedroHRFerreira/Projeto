export interface IProfile {
  information: string;
  history: string;
  url_image: string;
}

export interface Imain {
  profile: number;
  personalInformation?: IProfile[];
}

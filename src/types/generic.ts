export interface Subtitle {
  [key: string]: string;
}

export interface TitleData {
  [key: string]: Subtitle[] | string;
}

export interface JSONData {
  [key: string]: TitleData | string;
}

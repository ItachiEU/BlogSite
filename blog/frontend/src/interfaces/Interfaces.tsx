export interface IFormInput {
    image: MediaSource;
    message: string;
    tag: string;
    title: string;
}

export interface ITag {
  id: number,
  tag: string
}

export interface IPost {
  description: string;
  id: number;
  image: string;
  likesNum: number;
  tag: string;
  textContent: string;
}
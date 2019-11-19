import { EdgeNode } from './EdgeNode.interface';
import { ChildImageSharp } from './SharpImage.interface';

interface Post {
  path: string;
  title: string;
  subtitle?: string;
  date: string;
  image?: ChildImageSharp;
  releaseDate?: Date;
}

export interface PostsQueryData {
  allMdx: {
    edges?: [EdgeNode<Post>];
  };
}

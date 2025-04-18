export interface APIResponse<T> {
  error: null;
  data: T[];
  count: null;
  status: number;
  statusText: string;
}

export interface IPostResponse {
  id: number;
  description: string;
  title: string;
  category_id: number;
}

export interface ICategoryResponse {
  id: number;
  title: string;
}

export type ListResponse<T> = {
  data: T[];
  meta: Meta;
};

export type Meta = {
  count: number;
};

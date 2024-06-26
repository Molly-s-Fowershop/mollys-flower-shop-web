export type ProfileImage = {
  id: number;
  title?: string;
  description?: string;
  s3Name: string;
  url: string;
  type: string;
  context: string;
  productDetailsId?: number;
  updatedAt: Date;
  createdAt: Date;
};

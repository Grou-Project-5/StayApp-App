export interface getHomepageRoom {
  id?: string;
  room_picture?: string;
  user_id?: string;
  room_name?: string;
  price?: string;
  description?: string;
  location?: string;
}

export interface getProfile {
  id?: number;
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  gender?: string;
  pictures?: any;
}

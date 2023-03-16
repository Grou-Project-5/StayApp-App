export interface getHomepageRoom {
  id?: string;
  room_picture?: any;
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

export interface EditProfileUser {
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  pictures?: any;
}

export interface getFeedback {
  id?: number;
  rating?: number;
  feedback?: string;
}

export interface getHistory{
  id?: number;
  name?: string;
  tanggal?: number;
  status?: string;
  ulasan?:  string;
}
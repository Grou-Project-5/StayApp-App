export interface getHomepageRoom {
  id?: string;
  pictures?: string;
  user_id?: string;
  name?: string;
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

export interface Submit {
  id?: number;
  pictures?: any;
  name?: string;
  price?: number;
  location?: number;
  description?: string;
  max_visitors?: number;
  special_access?: string;
  bedroom?: string;
  room_total?: number;
  kitchen?: string;
  wifi?: string;
  garage?: string;
  excellent_features?: string;
  cleaning_fee?: number;
  service_fee?: number;
  bring_animal?: string;
  check_in?: string;
  user_phone?: string;
  check_out?: string;
  take_photo?: string;
  other?: string;
}

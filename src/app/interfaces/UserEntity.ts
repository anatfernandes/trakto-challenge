export interface UserEntity {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  can_authenticate: boolean;
  approved_terms_use: boolean;
  avatar: {
    extension: string;
    filename: string;
    provider: string;
    directory: string;
    uuid: string;
    url: string;
  };
  created_at: string;
  updated_at: string;
  subscription_plan_name: string;
  firebase_token: string;
  access_token: string;
  refresh_token: string;
}

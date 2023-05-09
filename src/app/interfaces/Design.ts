export interface Design {
  id: string;
  title: string;
  is_template: boolean;
  is_deleted: boolean;
  is_premium: boolean;
  is_renamed: boolean;
  products: string[];
  tags: string[];
  created_at: string;
  updated_at: string;
  user_reference: {
    id: string;
  };
  theme_reference: {
    id: string;
  };
  app_reference: {
    id: string;
  };
  cover?: {
    raw: string;
    medium: string;
    high: string;
    low: string;
  };
  thumbs: {
    raw: string;
    medium: string;
    high: string;
    low: string;
  };
  pages?: Page[][];
}

interface Page {
  page_index: number;
  page_format_id: string | null;
}

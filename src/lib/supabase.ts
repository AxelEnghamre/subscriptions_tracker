export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      services: {
        Row: {
          created_at: string | null
          icon_url: string | null
          id: number
          name: string | null
          public: boolean | null
          website_url: string | null
        }
        Insert: {
          created_at?: string | null
          icon_url?: string | null
          id?: number
          name?: string | null
          public?: boolean | null
          website_url?: string | null
        }
        Update: {
          created_at?: string | null
          icon_url?: string | null
          id?: number
          name?: string | null
          public?: boolean | null
          website_url?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

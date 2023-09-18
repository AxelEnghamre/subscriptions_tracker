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
      households: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      households_users: {
        Row: {
          household_id: number | null
          id: number
          is_owner: boolean | null
          user_id: string | null
        }
        Insert: {
          household_id?: number | null
          id?: number
          is_owner?: boolean | null
          user_id?: string | null
        }
        Update: {
          household_id?: number | null
          id?: number
          is_owner?: boolean | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "households_users_household_id_fkey"
            columns: ["household_id"]
            referencedRelation: "households"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "households_users_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          icon_url: string | null
          id: string
          name: string | null
        }
        Insert: {
          icon_url?: string | null
          id: string
          name?: string | null
        }
        Update: {
          icon_url?: string | null
          id?: string
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      services: {
        Row: {
          category: string | null
          icon_url: string | null
          id: number
          is_public: boolean | null
          name: string | null
          owner_id: string | null
          website_url: string | null
        }
        Insert: {
          category?: string | null
          icon_url?: string | null
          id?: number
          is_public?: boolean | null
          name?: string | null
          owner_id?: string | null
          website_url?: string | null
        }
        Update: {
          category?: string | null
          icon_url?: string | null
          id?: number
          is_public?: boolean | null
          name?: string | null
          owner_id?: string | null
          website_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "services_owner_id_fkey"
            columns: ["owner_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      subcriptions_discounts: {
        Row: {
          discount: number | null
          end_date: string | null
          id: number
          start_date: string
          subscription_id: number | null
          user_id: string | null
        }
        Insert: {
          discount?: number | null
          end_date?: string | null
          id?: number
          start_date?: string
          subscription_id?: number | null
          user_id?: string | null
        }
        Update: {
          discount?: number | null
          end_date?: string | null
          id?: number
          start_date?: string
          subscription_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subcriptions_discounts_subscription_id_fkey"
            columns: ["subscription_id"]
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subcriptions_discounts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      subscriptions: {
        Row: {
          created_at: string
          id: number
          is_public: boolean | null
          owner_id: string | null
          plan: string | null
          service_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          is_public?: boolean | null
          owner_id?: string | null
          plan?: string | null
          service_id?: number
        }
        Update: {
          created_at?: string
          id?: number
          is_public?: boolean | null
          owner_id?: string | null
          plan?: string | null
          service_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_owner_id_fkey"
            columns: ["owner_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_service_id_fkey"
            columns: ["service_id"]
            referencedRelation: "services"
            referencedColumns: ["id"]
          }
        ]
      }
      subscriptions_prices: {
        Row: {
          created_at: string
          id: number
          price_per_month: number | null
          subscription_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          price_per_month?: number | null
          subscription_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          price_per_month?: number | null
          subscription_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_prices_subscription_id_fkey"
            columns: ["subscription_id"]
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          }
        ]
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

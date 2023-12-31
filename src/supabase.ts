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
      networks: {
        Row: {
          created_at: string | null
          global_stats_view: number
          id: number
          network_name: string
          network_url: string
          updated_at: string | null
          user_content_creator_id: number | null
        }
        Insert: {
          created_at?: string | null
          global_stats_view: number
          id?: number
          network_name: string
          network_url: string
          updated_at?: string | null
          user_content_creator_id?: number | null
        }
        Update: {
          created_at?: string | null
          global_stats_view?: number
          id?: number
          network_name?: string
          network_url?: string
          updated_at?: string | null
          user_content_creator_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "networks_user_content_creator_id_fkey"
            columns: ["user_content_creator_id"]
            referencedRelation: "user_content_creator"
            referencedColumns: ["id"]
          }
        ]
      }
      niche_network: {
        Row: {
          created_at: string | null
          id: number
          network_id: number | null
          niche_id: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          network_id?: number | null
          niche_id?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          network_id?: number | null
          niche_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "niche_network_network_id_fkey"
            columns: ["network_id"]
            referencedRelation: "networks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "niche_network_niche_id_fkey"
            columns: ["niche_id"]
            referencedRelation: "niches"
            referencedColumns: ["id"]
          }
        ]
      }
      niches: {
        Row: {
          id: number
          niche_name: string
        }
        Insert: {
          id?: number
          niche_name: string
        }
        Update: {
          id?: number
          niche_name?: string
        }
        Relationships: []
      }
      payment_name_content_creator: {
        Row: {
          created_at: string | null
          id: number
          payment_name_id: number | null
          updated_at: string | null
          user_content_creator_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          payment_name_id?: number | null
          updated_at?: string | null
          user_content_creator_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          payment_name_id?: number | null
          updated_at?: string | null
          user_content_creator_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_name_content_creator_payment_name_id_fkey"
            columns: ["payment_name_id"]
            referencedRelation: "payment_names"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_name_content_creator_user_content_creator_id_fkey"
            columns: ["user_content_creator_id"]
            referencedRelation: "user_content_creator"
            referencedColumns: ["id"]
          }
        ]
      }
      payment_names: {
        Row: {
          id: number
          payment_name: string
        }
        Insert: {
          id?: number
          payment_name: string
        }
        Update: {
          id?: number
          payment_name?: string
        }
        Relationships: []
      }
      user_content_creator: {
        Row: {
          created_at: string | null
          email: string
          firstname: string
          id: number
          phonenumber: string | null
          pic_url: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          firstname: string
          id?: number
          phonenumber?: string | null
          pic_url: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          firstname?: string
          id?: number
          phonenumber?: string | null
          pic_url?: string
          updated_at?: string | null
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

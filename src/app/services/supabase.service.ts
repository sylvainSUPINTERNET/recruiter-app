import { Injectable } from '@angular/core';

import {
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  
  private supabase: SupabaseClient|null = null;

  constructor() {
    this.supabase = createClient(environment.supabase.url, environment.supabase.public_key)
  }

  public getSupabaseClient(): SupabaseClient {
    if (this.supabase === null) {
      throw new Error('Supabase is null');
    }
    return this.supabase;
  }
  

}

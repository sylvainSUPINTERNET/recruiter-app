import { Injectable } from '@angular/core';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { SupabaseService } from './supabase.service';
import { TABLE_NICHES } from '../constants/constants';
import { INiche } from '../models/INiche';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private readonly supabase: SupabaseService) { }

  public async getProfile() : Promise<any> {
    let nichesList: PostgrestSingleResponse<any[]>= await this.supabase.getSupabaseClient().from(TABLE_NICHES).select("*");

    console.log(nichesList);
  }
}

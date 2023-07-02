import { Injectable } from '@angular/core';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { SupabaseService } from './supabase.service';
import { TABLE_NICHES, TABLE_PROFILE } from '../constants/constants';
import { IProfile } from '../models/IProfil';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private readonly supabase: SupabaseService) { }

  public async getProfile(offset: number= 0, limit:number = 8) : Promise<IProfile[] | null> {

    const { data, error } = await this.supabase.getSupabaseClient().rpc('get_user_content_creator_details', { offset_val: offset, page_size: limit });
    console.log(data, error);

    let profilesList: PostgrestSingleResponse<any[]>= await this.supabase.getSupabaseClient().from(TABLE_PROFILE).select("*").range(offset, limit - 1);
    return profilesList.data as unknown as IProfile[];
  }
}

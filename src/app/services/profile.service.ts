import { Injectable } from '@angular/core';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { SupabaseService } from './supabase.service';
import { get_user_content_creator_details } from '../constants/constants';
import { IProfile } from '../models/IProfil';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private readonly supabase: SupabaseService) { }

  public async getProfile(offset: number= 0, limit:number = 8) : Promise<IProfile[] | null> {
    
    const { data, error } = await this.supabase.getSupabaseClient().rpc(get_user_content_creator_details.name, { [get_user_content_creator_details.params.offset_val]: offset, [get_user_content_creator_details.params.page_size]: limit });
    
    if ( error ) return null;

    return data as unknown as IProfile[];
  }
}

import {Injectable} from '@angular/core';
import {createClient, SupabaseClient} from '@supabase/supabase-js';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  readonly #supabase: SupabaseClient;

  constructor() {
    this.#supabase = createClient(environment.supabaseUrl, environment.supabaseKey, {
      db: {schema: 'public'}
    });
  }

  get supabase(): SupabaseClient {
    return this.#supabase;
  }
}

import { Database } from "./types/supabase";

declare global {
	type Supabase = Database;
}

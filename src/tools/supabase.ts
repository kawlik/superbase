// @next
import { cookies } from "next/headers";

// @node
import {
	createClientComponentClient,
	createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";

export function getSupabaseClient() {
	return createClientComponentClient<Supabase>();
}

export function getSupabaseServer() {
	return createServerComponentClient<Supabase>({ cookies });
}

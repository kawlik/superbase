// @next
import { cookies } from "next/headers";

// @node
import {
	createClientComponentClient,
	createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";

export function getSupabaseClient() {
	return createClientComponentClient();
}

export function getSupabaseServer() {
	return createServerComponentClient({ cookies });
}

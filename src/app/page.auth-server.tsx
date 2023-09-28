// @root
import { getSupabaseServer } from "@/tools/supabase";

// @view
import AuthClient from "./page.auth-client";

export default async function AuthServer() {
	// component hooks
	const supabase = getSupabaseServer();

	// component logic
	const session = await supabase.auth.getSession();

	// component layout
	return <AuthClient hasSession={!!session} />;
}

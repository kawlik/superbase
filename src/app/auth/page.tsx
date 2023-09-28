// @next
import { redirect } from "next/navigation";

// @root
import { getSupabaseServer } from "@/tools/supabase";

// @view
import AuthClient from "../page.auth-client";

export default async function () {
	// component hooks
	const supabase = getSupabaseServer();

	// component logic
	if (!!(await supabase.auth.getSession()).data.session) {
		return redirect("/");
	}

	// component layout
	return <AuthClient hasSession={false} />;
}

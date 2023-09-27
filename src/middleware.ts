// @next
import { NextRequest, NextResponse } from "next/server";

// @node
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(request: NextRequest) {
	const response = NextResponse.next();
	const supabase = createMiddlewareClient({
		req: request,
		res: response,
	});

	// refresh session
	await supabase.auth.getSession();

	return response;
}

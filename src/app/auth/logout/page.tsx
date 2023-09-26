"use client";

// @next
import { redirect } from "next/navigation";

// @root
import { useAuthContext } from "@/contexts/auth";

export default function () {
	// component hooks
	const authCtx = useAuthContext();

	// component logic
	authCtx.auth.signOut();

	// component layout
	return redirect("/auth/sign-in");
}

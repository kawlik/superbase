"use client";

// @node
import { redirect } from "next/navigation";

// @root
import { useAuthContext } from "@/contexts/auth";

export default function () {
	// component hooks
	const authCtx = useAuthContext();

	// component layout
	if (!!authCtx) {
		return redirect("/home/ledgers");
	} else {
		return redirect("/auth/sign-in");
	}
}

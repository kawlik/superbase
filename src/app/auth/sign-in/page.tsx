"use client";

// @next
import { redirect } from "next/navigation";

// @node
import { useState } from "react";

// @root
import { useAuthContext } from "@/contexts/auth";

// @view
import { AlertFailure } from "./page.alert-failure";
import { AlertSuccess } from "./page.alert-success";
import { Banner } from "./page.banner";
import { Login } from "./page.login";

export default function () {
	// component hooks
	const authCtx = useAuthContext();

	// component logic
	const [promptFailure, setPromptFailure] = useState(false);
	const [promptSuccess, setPromptSuccess] = useState(false);

	const dismissFailure = () => setPromptFailure(false);
	const dismissSuccess = () => setPromptSuccess(false);

	const signInWithEmail = async (email: string) => {
		await authCtx.auth.signInWithOtp({ email }).then(({ error }) => {
			if (error === null) {
				setPromptSuccess(true);
			} else {
				setPromptFailure(true);
			}
		});
	};

	// auto redirect
	if (!!authCtx.user) return redirect("/home/ledgers");

	// component layout
	return (
		<div className="hero flex-1 overflow-y-auto">
			<AlertFailure dismiss={dismissFailure} isVisible={promptFailure} />
			<AlertSuccess dismiss={dismissSuccess} isVisible={promptSuccess} />
			<div className="hero-content flex-col gap-6">
				<Banner />
				<div className="text-center">
					<h1 className="text-4xl font-bold">Hello, Stranger!</h1>
					<p className="text-lg font-thin">Maybe you want to log in?</p>
				</div>
				<Login signInWithEmail={signInWithEmail} />
			</div>
		</div>
	);
}

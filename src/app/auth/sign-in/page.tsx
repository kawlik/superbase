"use client";

// @root
import { useAuthContext } from "@/contexts/auth";

// @view
import { Banner } from "./page.banner";
import { Login } from "./page.login";

export default function () {
	// component hooks
	const authCtx = useAuthContext();

	// component logic
	const signInWithEmail = async (email: string) => {
		await authCtx.auth.signInWithOtp({ email }).then((res) => {
			console.log(res);
		});
	};

	// component layout
	return (
		<div className="hero flex-1 overflow-y-auto">
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

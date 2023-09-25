// @next
import Image from "next/image";

export function AlertFailure(props: { dismiss(): void; isVisible: boolean }) {
	// component logic

	// component layout
	return (
		<dialog className="modal backdrop-blur" open={props.isVisible}>
			<div className="modal-box flex max-w-sm flex-col items-center gap-6">
				<Image alt="Failure" src="/failure.svg" width={240} height={240} />
				<div>
					<h3 className="text-2xl font-bold">Failure!</h3>
					<p className="text-justify text-lg font-thin">
						Sorry, something went wrong. Make sure that none of the following
						situations occurred, and then try to sign in again.
					</p>
				</div>
				<div className="join join-vertical w-full">
					<Accordion
						name="Invalid email address"
						text="The email address may appear to be valid for your browser, but to ensure maximum security, it is also validated by our system. If the email address comes from an untrusted source, it may be rejected by the system."
					/>
					<Accordion
						name="No internet connection"
						text="Make sure your device has internet access. Without it, we cannot verify you and synchronize your data."
					/>
					<Accordion
						name="Too many failed attempts"
						text="If you make too many failed attempts, you will be temporarily disconnected from this ability. This is necessary to protect our users from malicious bots."
					/>
				</div>
				<ButtonClose dismiss={props.dismiss} />
			</div>
		</dialog>
	);
}

function Accordion(props: { name: string; text: string }) {
	// component logic

	// component layout
	return (
		<div className="collapse join-item collapse-arrow border">
			<input type="radio" name="page-alert-failure-accordion" />
			<div className="collapse-title text-lg">{props.name}</div>
			<div className="collapse-content">
				<p className="text-justify">{props.text}</p>
			</div>
		</div>
	);
}

function ButtonClose(props: { dismiss(): void }) {
	// component logic

	// component layout
	return (
		<button
			className="btn btn-warning m-auto block w-2/3 rounded-full normal-case text-base-100"
			onClick={props.dismiss}
			type="button"
		>
			Got it!
		</button>
	);
}

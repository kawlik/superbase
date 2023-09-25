// @next
import Image from "next/image";
import Link from "next/link";

// @icon
import { IconType } from "react-icons";
import { FaApple, FaGoogle, FaMicrosoft, FaYahoo } from "react-icons/fa";

export function AlertSuccess(props: { dismiss(): void; isVisible: boolean }) {
	// component logic

	// component layout
	return (
		<dialog className="modal backdrop-blur" open={props.isVisible}>
			<div className="modal-box flex max-w-sm flex-col items-center gap-6">
				<Image alt="Success" src="/success.svg" width={240} height={240} />
				<div>
					<h3 className="text-2xl font-bold">Success!</h3>
					<p className="text-justify text-lg font-thin">
						Open your email address and click the magic link to continue. If you
						don't see your email client on the list below, just use a browser.
					</p>
				</div>
				<div className="flex flex-row gap-2">
					<ButtonEmail href="https://icloud.com/" icon={FaApple} />
					<ButtonEmail href="https://gmail.com/" icon={FaGoogle} />
					<ButtonEmail href="https://outlook.office365.com/" icon={FaMicrosoft} />
					<ButtonEmail href="https://mail.yahoo.com/" icon={FaYahoo} />
				</div>
				<ButtonClose dismiss={props.dismiss} />
			</div>
		</dialog>
	);
}

function ButtonClose(props: { dismiss(): void }) {
	// component logic

	// component layout
	return (
		<button
			className="btn btn-success m-auto block w-2/3 rounded-full normal-case text-base-100"
			onClick={props.dismiss}
			type="button"
		>
			Got it!
		</button>
	);
}

function ButtonEmail(props: { href: string; icon: IconType }) {
	// component logic

	// component layout
	return (
		<Link className="btn btn-circle btn-outline" href={props.href} target="_blank">
			<props.icon className="text-xl" />
		</Link>
	);
}

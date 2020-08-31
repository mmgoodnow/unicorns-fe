import React, { CSSProperties, ReactNode } from "react";

interface ICenteredProps {
	children: ReactNode;
	style?: CSSProperties;
}

export function Centered({ children, style }: ICenteredProps) {
	return (
		<div
			className="d-flex flex-column align-items-center justify-content-center"
			style={{ minWidth: "100%", minHeight: "100%" }}
		>
			<div style={{ flexGrow: 1 }} />
			<div style={style}>{children}</div>
			<div style={{ flexGrow: 3 }} />
		</div>
	);
}

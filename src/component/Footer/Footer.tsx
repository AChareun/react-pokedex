import React from "react";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
	return (
		<footer className={styles["Footer"]}>
			<p>
				Made with ❤ by{" "}
				<a
					href="https://github.com/AChareun"
					target="_blank"
					rel="noopener noreferrer"
				>
					AChareun
				</a>
			</p>
		</footer>
	);
};

export default Footer;

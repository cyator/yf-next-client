import { ReactNode } from 'react';
import Navbar from './Navbar';
// import Footer from './Footer'
interface Props {
	children: ReactNode;
}
function Layout({ children }: Props) {
	return (
		<>
			<Navbar />
			<div className="container">
				<main>{children}</main>
			</div>
			{/* <Footer /> */}
		</>
	);
}

export default Layout;

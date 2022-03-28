import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Banner from './Banner';
interface Props {
	children: ReactNode;
}
function Layout({ children }: Props) {
	return (
		<>
			<Banner />
			<Navbar />
			<div className="container">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}

export default Layout;

/**
 *  Project: fast-react-pizza
 *  File: AppLayout.jsx
 *  Created: 2:58 CH, 19/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import Header                    from './Header.jsx';
import CartOverview              from '../features/cart/CartOverview.jsx';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader                    from './Loader.jsx';


function AppLayout() {
	const { state } = useNavigation();
	const isLoading = state === 'loading';
	
	return <div className="layout">
		{isLoading && <Loader />}
		<Header />
		
		<main>
			<Outlet />
		</main>
		
		<CartOverview />
	</div>;
}

export default AppLayout;

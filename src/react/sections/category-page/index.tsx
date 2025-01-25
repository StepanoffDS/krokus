import { useParams } from 'react-router';
import ListingContainer from '@@/react/components/containers/listing-container';

import CategoryParams from './category-params';
import CategoryListing from './category-listing';
import QuickSelection from './quick-selection';
import styles from './category-main.module.scss';

const CategoryMain = () => {
	const params = useParams();

	console.log(params);

	return (
		<div>
			<div className='container'>
				<ListingContainer>
					<CategoryParams />
					<CategoryListing />
					<QuickSelection className={styles['quick-selection']} />
				</ListingContainer>
			</div>
		</div>
	);
};

export default CategoryMain;

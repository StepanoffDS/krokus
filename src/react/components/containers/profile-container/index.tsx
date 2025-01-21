import ProfileNavigate from '@@/react/sections/profile-page/profile-navigate';
import { Navigate, Outlet } from 'react-router';
import ListingContainer from '../listing-container';

interface Props {
  className?: string;
}

const val = true;

const ProfileContainer = ({ className }: Props) => {
  if (val) {
    return (
      <div className={className}>
        <div className="container">
          <ListingContainer>
            <ProfileNavigate />
            <Outlet />
          </ListingContainer>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default ProfileContainer;

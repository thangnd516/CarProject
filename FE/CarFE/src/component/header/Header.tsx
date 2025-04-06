import "./header.scss";
import fordLogo from "../../assets/fordLogo.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Navigate, useNavigate } from "react-router-dom";

import { Menu, MenuItem, IconButton } from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

library.add(faGlobe, faUser);

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const account = useSelector((state: RootState) => state.user.account);
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div className="header-wrap">
      <div className="left-content">
        <div className="product-header">Sản Phẩm</div>
        <div className="buy-product--header">Mua xe</div>
        <div className="service-support">Dịch vụ & Hỗ trợ</div>
      </div>

      <div className="image-header-center">
        <a href="/" className="logoImg">
          <img src={fordLogo} alt="Ford Logo" />
        </a>
      </div>


      <div className="header-right">
        <div className="user-icon">
          <IconButton onClick={handleClick}>
            <FontAwesomeIcon className="fa-regular" icon={faUser} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: '200px',
              },
            }}
          >
            {
              isAuthenticated === false ?
                <>
                  <MenuItem onClick={handleClose}>
                    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Sign up
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Sign up
                    </Link>
                  </MenuItem>
                </>
                :
                <MenuItem onClick={undefined}>
                  <button style={{ width: '100%' }}>Logout</button>
                </MenuItem>
            }

          </Menu>
        </div>

        {/* Globe Icon */}
        <FontAwesomeIcon icon={faGlobe} />
      </div>
    </div>
  );
};

export default Header;

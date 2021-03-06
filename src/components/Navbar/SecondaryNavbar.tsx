import React, { useState, useEffect, useCallback } from "react";
import { useLocation, Link as NavLink } from "react-router-dom";
import { useAuthContext } from "context/AuthContext";
import classnames from "classnames";

// Components
import { Menu, Link, AppBar, Button, Hidden, Toolbar, MenuItem, Container, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

// Helpers
import { PATHS } from "utils/appConstants";
import { NavItems } from "utils/navigation";

import OceanBitesLogo from "assets/images/logo/ocean-bites-logo.png";
import { useStyles } from "./styles/SecondaryNavbar.styles";

const SecondaryNavbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuthContext();
  const [activeTab, setActiveTab] = useState<NavItems | string>(NavItems.home);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const getActiveTab = useCallback((loc: string) => {
    if (loc.includes("menu")) return NavItems.menu;

    switch (loc) {
      case "/home":
        return NavItems.home;
      case "/contact-us":
        return NavItems.contact;
      default:
        return "";
    }
  }, []);

  useEffect(() => {
    const tab = getActiveTab(location.pathname);
    setActiveTab(tab);
  }, [location.pathname, getActiveTab]);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      classes={{ paper: classes.menuPaper }}
    >
      <MenuItem>
        <Link component={NavLink} to={PATHS.home}>
          <Button variant="text" className={classnames(activeTab === NavItems.home && classes.active)}>
            Home
          </Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link component={NavLink} to={PATHS.menu}>
          <Button variant="text" className={classnames(activeTab === NavItems.menu && classes.active)}>
            Menu
          </Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link component={NavLink} to={PATHS.contact}>
          <Button variant="text" className={classnames(activeTab === NavItems.contact && classes.active)}>
            Contact Us
          </Button>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root} id="back-to-top-anchor">
      <AppBar position="fixed" classes={{ root: classes.appBar }}>
        <Toolbar className={classes.toolbarRoot}>
          <Container maxWidth="md">
            <div className={classes.nav}>
              <Link className={classes.title} component={NavLink} to={PATHS.home}>
                <img src={OceanBitesLogo} alt="Ocean Bites Logo" />
              </Link>
              <div className={classes.logoWrapper} />
              <Hidden smUp>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              {renderMobileMenu}
              <Hidden xsDown>
                <div className={classes.navMenu}>
                  <Link component={NavLink} to={PATHS.home}>
                    <Button variant="text" className={classnames(activeTab === NavItems.home && classes.active)}>
                      Home
                    </Button>
                  </Link>
                  <Link component={NavLink} to={PATHS.menu}>
                    <Button variant="text" className={classnames(activeTab === NavItems.menu && classes.active)}>
                      Menu
                    </Button>
                  </Link>
                  <Link component={NavLink} to={PATHS.contact}>
                    <Button variant="text" className={classnames(activeTab === NavItems.contact && classes.active)}>
                      Contact Us
                    </Button>
                  </Link>
                  {isAuthenticated && (
                    <Button variant="text" className={classes.logoutButton} onClick={() => logout()}>
                      Logout <ExitToAppIcon />
                    </Button>
                  )}
                </div>
              </Hidden>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SecondaryNavbar;

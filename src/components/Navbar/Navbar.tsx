import React, { useState, useEffect, useCallback } from "react";
import { useLocation, Link as NavLink } from "react-router-dom";
import { Link, AppBar, Hidden, Button, Toolbar, IconButton, Typography, Menu, MenuItem } from "@material-ui/core";
import { NavItems } from "utils/navigation";
import { PATHS } from "utils/appConstants";
import classnames from "classnames";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./styles/Navbar.styles";

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<NavItems | string>(NavItems.home);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const getActiveTab = useCallback((loc: string) => {
    switch (loc) {
      case "/home":
        return NavItems.home;
      case "/contact-us":
        return NavItems.contact;
      case "/menu":
        return NavItems.menu;
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

  const mobileMenuId = "menu-mobile-main";
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
    <div className={classes.root}>
      <AppBar position="fixed" classes={{ root: classes.appBar }}>
        <Toolbar className={classes.toolbarRoot}>
          <div className={classes.nav}>
            <Link className={classes.title} component={NavLink} to={PATHS.home}>
              <Typography variant="h6">Ocean Bites</Typography>
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
                <Link className={classes.link} component={NavLink} to={PATHS.home}>
                  <Button variant="text" className={classnames(activeTab === NavItems.home && classes.active)}>
                    Home
                  </Button>
                </Link>
                <Link className={classes.link} component={NavLink} to={PATHS.menu}>
                  <Button variant="text" className={classnames(activeTab === NavItems.menu && classes.active)}>
                    Menu
                  </Button>
                </Link>
                <Link className={classes.link} component={NavLink} to={PATHS.contact}>
                  <Button variant="text" className={classnames(activeTab === NavItems.contact && classes.active)}>
                    Contact Us
                  </Button>
                </Link>
              </div>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

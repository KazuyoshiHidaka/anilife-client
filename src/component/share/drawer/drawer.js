import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {PropTypes} from 'prop-types';

export default function SwipeableTemporaryDrawer(props) {
  const {position, contents, drawerOpen, setDrawerOpen} = props;
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      anchor={position}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      onOpen={() => setDrawerOpen(true)}
    >
      {contents}
    </SwipeableDrawer>
  );
}

SwipeableTemporaryDrawer.propTypes = {
  position: PropTypes.string,
  contents: PropTypes.object,
  drawerOpen: PropTypes.bool,
  setDrawerOpen: PropTypes.func,
};

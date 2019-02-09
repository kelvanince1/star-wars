import React from 'react';

import { Drawer, List, ListItem } from '@material-ui/core';

const SideDrawer = props => {
  const { onClose, open } = props;

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => onClose(false)}
    >
      <List component="nav">
        <ListItem button>
          <a
            href="https://github.com/kelvanince1/star-wars"
            target="_blank"
            style={{ textDecoration: 'none', color: '#000' }}
            rel="noopener noreferrer"
          >
            Github
          </a>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer;

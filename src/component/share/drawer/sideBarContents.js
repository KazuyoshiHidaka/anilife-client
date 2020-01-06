import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ProgramIcon from '@material-ui/icons/EventNoteRounded';
import NoticeIcon from '@material-ui/icons/NotificationsNoneRounded';
import {
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  drawerContents: {
    width: 250,
  },
  currentPathButton: {
    color: theme.palette.primary['200'],
  },
}));

export default function SideBarContents() {
  const classes = useStyles();
  const history = useHistory();
  const pathname = history.location.pathname;
  const listItems = [
    {
      name: 'ホーム',
      url: '/',
      icon: <HomeIcon />,
    },
    {
      name: '番組表',
      url: '/timetable',
      icon: <ProgramIcon />,
    },
    {
      name: '通知予定',
      url: '/notices',
      icon: <NoticeIcon />,
    },
  ];

  const linkButtonOrDisabled = (listItem) => {
    let props;
    if (listItem.url === pathname) {
      props = {
        className: classes.currentPathButton,
      };
    } else {
      props = {
        button: true,
        onClick: () => history.push(listItem.url),
      };
    }
    return props;
  };

  return (
    <List className={classes.drawerContents}>
      <ListItem>
        <ListItemText primary="AniLife"></ListItemText>
      </ListItem>
      <Divider />
      {listItems.map((listItem) => (
        <ListItem key={listItem.name} {...linkButtonOrDisabled(listItem)}>
          <ListItemIcon>{listItem.icon}</ListItemIcon>
          <ListItemText color="primary" primary={listItem.name} />
        </ListItem>
      ))}
    </List>
  );
}

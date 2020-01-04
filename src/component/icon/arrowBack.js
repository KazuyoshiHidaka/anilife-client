import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from 'react-router-dom';

export default function ArrowBack() {
  const history = useHistory();
  return <ArrowBackIcon onClick={history.goBack} />;
}

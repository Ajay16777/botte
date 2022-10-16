import React from 'react';
import { Box, Typography } from '@material-ui/core';
// import { PointSpreadLoading } from 'react-loadingg';
// import { useTheme } from '@material-ui/styles';
import ReactLoading from 'react-loading';

const Loading = ({ noTitle }) => {
  // const theme = useTheme();

  return (
    <Box>
      <Box
        className='cPhARM'
        style={{
          margin: 'auto',
          position: 'absolute',
          minWidth: 'fit-content',
          top: '41%',
          transform: 'translate(-50%,-50%)',
          left: '50%',
        }}
      >
        {/* {!noTitle && ( */}
        <Typography variant='h3' style={{ color: '#e0760b' }}>
          {/* BOTTE */}
        </Typography>
        {/* )} */}
        <ReactLoading type={'bars'} color='#e0760b' />
      </Box>
    </Box>
  );
};

export default Loading;

/* eslint-disable no-unused-vars */
import React, { memo, useMemo } from 'react';
import {
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  Paper,
  Divider,
  Card,
  CardActionArea,
  Link,
} from '@material-ui/core';
import globalStyles from 'styles/commonStyles';
import styles from './CardStyles';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { calculateCountdown } from 'utils/dateFunctions';
// import Search from 'components/common/Search/Search';

const Post = memo((props) => {

  
  const { post } = props;

  const classes = styles();
  const classes_g = globalStyles();
  const timeLeft = useMemo(() => {
    if (!post) return;
    let countdown = calculateCountdown(post.deliveryDate);

    if (countdown.days > 0) return `${countdown.days} days`;
    else return `${countdown.hours} hours `;
    // else return `${countdown.hours} hours ${countdown.min} mins`;
  }, [post]);


  return (
    <>
      {/* <Search /> */}
      <Link
        // to={`/posts/${post._id}`}
        color='inherit'
        underline='none'
        component={RouterLink}
      >
        <CardActionArea>
          <Card className={classes.root}>
            <Box className={classes_g.flexs}>
              <Typography variant='body2' className={classes.body2}>
                {/* {new Date(post.deliveryDate).toDateString()} */}
                In {timeLeft}
              </Typography>
              {/* {post.urgent && post.urgent === 'high' && ( */}
                <Paper className={classes.paper}>URGENT</Paper>
              {/* )} */}
            </Box>
            <Box
              m={1}
              style={{
                padding: '0px 5px 1px 5px',
              }}
            >
              <Box>
                <Box className={classes.textBox}>
                  <Typography
                    variant='caption'
                    style={{
                      color: '#292929',
                      overflowWrap: 'break-word',
                    }}
                  >
                    {/* {post.description.slice(0, 100)} */}
                    {/* thi si sthe test */}
                   </Typography>
                </Box>
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                    columnGap: 15,
                  }}
                  mb={1}
                >
                  <Paper className={classes.paper2}>
                    <Typography variant='caption'>
                      {/* {post.from} */} iinfai
                    </Typography>
                  </Paper>
                  <Typography
                    style={{ color: '#5CBCC9', fontSize: '35px' }}
                  >
                    -
                  </Typography>
                  <Paper className={classes.paper2}>
                    <Typography variant='caption'>
                      {/* {post.to} */}sikart
                    </Typography>
                  </Paper>
                  <ArrowForwardIosSharpIcon
                    style={{
                      color: '#5CBCC9',
                      fontSize: '20px',
                    }}
                  />
                </Box>
                <Divider />
              </Box>
              <Box className={classes.cardBottom} mt={0.5}>
                {/* <Box>
                  <Typography variant='caption'>
                    Product Category
                  </Typography>
                  <Typography
                    variant='h6'
                    style={{ fontWeight: 'bold' }}
                  >
                    {post?.categories[0].name}
                  </Typography>
                </Box> */}
                <Box>
                  <Typography
                    variant='caption'
                    style={{
                      color: '#292929',
                    }}
                  >
                    Weight
                  </Typography>
                  {/* {post.isDeliveryRequest ? ( */}
                    <Typography
                      variant='h6'
                      style={{ fontWeight: 'bold' }}
                    >
                      {/* {post.weight} kg */}43
                    </Typography>
                  {/* ) : ( */}
                    <Typography
                      variant='h6'
                      style={{ fontWeight: 'bold' }}
                    >
                      {/* {post.weightFrom} - {post.weightTo} kg */}
                      433
                    </Typography>
                  {/* )} */}
                </Box>
                <Box>
                  <Typography
                    variant='caption'
                    style={{
                      color: '#292929',
                    }}
                  >
                    Payment
                  </Typography>
                  <Typography
                    variant='h6'
                    style={{ fontWeight: 'bold' }}
                  >
                    {/* ${post.amountFrom} */}
                    53
                    {/* {post.amountTo} */}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        </CardActionArea>
      </Link>
    </>
  );
});

export default Post;

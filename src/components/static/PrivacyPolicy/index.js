import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import styles from './Styles';

const PrivacyPolicy = () => {
  const classes = styles();

  return (
    <Container className={classes.root}>
      <Box>
        <Typography variant='h6'>Privacy Policy</Typography>
      </Box>
      <Box>
        <Typography variant='body2'>
          Your privacy is important to us. It is Botte policy to
          respect your privacy regarding any information we may
          collect from you across our website, https://www.Botte.com/,
          and other sites we own and operate.
          <br /> We only ask for personal information when we truly
          need it to provide a service to you. We collect it by fair
          and lawful means, with your knowledge and consent. We also
          let you know why we’re collecting it and how it will be
          used. <br />
          Through our online registration form, we collect your email,
          last and first name and you may optionally fill in your
          phone number and regional location. Except for your first
          name and regional location, this information is not shared
          publicly.
        </Typography>
      </Box>
      <Box>
        <Typography variant='body2'>
          We only retain collected information for as long as
          necessary to provide you with your requested service. What
          data we store, we’ll protect within commercially acceptable
          means to prevent loss and theft, as well as unauthorized
          access, disclosure, copying, use or modification. <br />
          We don’t share any personally identifying information
          publicly or with third parties, except when required to by
          law. <br />
          Our website may link to external sites that are not operated
          by us. Please be aware that we have no control over the
          content and practices of these sites and cannot accept
          responsibility or liability for their respective privacy
          policies.
          <br /> You are free to refuse our request for your personal
          information, with the understanding that we may be unable to
          provide you with some of your desired services.
          <br /> Your continued use of our website will be regarded as
          acceptance of our practices around privacy and personal
          information. If you have any questions about how we handle
          user data and personal information, feel free to contact us.
        </Typography>
      </Box>
      <Box>
        <Typography variant='body2'>
          Data deletion request - GDPR Under the General Data
          Protection Regulation (GDPR), you have the right to have
          your data deleted and removed from our systems. Please send
          us an email to hello@Botte.com to request that your data be
          deleted. This website uses cookies We use cookies to
          personalise content and ads, to provide social media
          features and to analyse our traffic. We also share
          information about your use of our site with our social
          media, advertising and analytics partners who may combined
          it with other information that you’ve provided to them or
          that they’ve collected from your use of their services.
        </Typography>
      </Box>
      <Box>
        <Typography variant='body2'>
          This policy is effective as of 16 January 2022.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;

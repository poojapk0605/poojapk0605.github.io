import React, { useEffect, useState, useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

function Social() {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.social, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div className="social">
      {data &&
        data.social.map((social) => {
          if (social.network === 'bluesky') {
            return (
              <a
                key="bluesky"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/about/images.png"
                  alt="Bluesky"
                  style={{
                    width: 40,
                    height: 40,
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 10,
                    borderRadius: '50%',
                  }}
                />
              </a>
            );
          }

          return (
            <SocialIcon
              key={social.network}
              style={styles.iconStyle}
              url={social.href}
              network={social.network}
              bgColor={theme.socialIconBgColor}
              target="_blank"
              rel="noopener"
            />
          );
        })}
    </div>
  );
}

export default Social;

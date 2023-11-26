import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DevIcon from '@mui/icons-material/Code';
import FacebookIcon from '@mui/icons-material/Facebook';
import GlobeIcon from '@mui/icons-material/Language';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const isCompanyMention = (company) => {
  return company.startsWith('@') && !company.includes(' ');
};

const companyLink = (company) => {
  return `https://github.com/${company.substring(1)}`;
};

const getFormattedMastodonValue = (mastodonValue, isLink) => {
  const [username, server] = mastodonValue.split('@');

  if (isLink) {
    return `https://${server}/@${username}`;
  } else {
    return `${username}@${server}`;
  }
};

const ListItem = ({ icon, title, value, link, skeleton = false }) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="flex justify-start py-2 px-1 items-center"
      >
        <div className="flex-grow font-medium gap-2 flex items-center my-1">
          {icon} {title}
        </div>
        <div
          className={`${
            skeleton ? 'flex-grow' : ''
          } text-sm font-normal text-right mr-2 ml-3 ${link ? 'truncate' : ''}`}
          style={{
            wordBreak: 'break-word',
          }}
        >
          {value}
        </div>
      </a>
    </>
  );
};

const Details = ({ profile, loading, social, github }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <ListItem
          key={index}
          skeleton={true}
          icon={skeleton({ width: 'w-4', height: 'h-4' })}
          title={skeleton({ width: 'w-24', height: 'h-4' })}
          value={skeleton({ width: 'w-full', height: 'h-4' })}
        />
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="text-base-content text-opacity-60">
          {loading || !profile ? (
            renderSkeleton()
          ) : (
            <Fragment>
              {profile.location && (
                <ListItem
                  icon={<LocationOnIcon />}
                  title="Based in:"
                  value={profile.location}
                />
              )}
              <ListItem
                icon={<GitHubIcon />}
                title="GitHub:"
                value={github.username}
                link={`https://github.com/${github.username}`}
              />
              {social?.twitter && (
                <ListItem
                  icon={<TwitterIcon />}
                  title="Twitter:"
                  value={social.twitter}
                  link={`https://twitter.com/${social.twitter}`}
                />
              )}
              {social?.linkedin && (
                <ListItem
                  icon={<LinkedInIcon />}
                  title="LinkedIn:"
                  value={social.linkedin}
                  link={`https://www.linkedin.com/in/${social.linkedin}`}
                />
              )}
              {social?.facebook && (
                <ListItem
                  icon={<FacebookIcon />}
                  title="Facebook:"
                  value={social.facebook}
                  link={`https://www.facebook.com/${social.facebook}`}
                />
              )}
              {social?.instagram && (
                <ListItem
                  icon={<InstagramIcon />}
                  title="Instagram:"
                  value={social.instagram}
                  link={`https://www.instagram.com/${social.instagram}`}
                />
              )}
              {social?.youtube && (
                <ListItem
                  icon={<YouTubeIcon />}
                  title="YouTube:"
                  value={`@${social.youtube}`}
                  link={`https://www.youtube.com/@${social.youtube}`}
                />
              )}
              {social?.dev && (
                <ListItem
                  icon={<DevIcon />}
                  title="Dev:"
                  value={social.dev}
                  link={`https://dev.to/${social.dev}`}
                />
              )}
              {social?.website && (
                <ListItem
                  icon={<GlobeIcon />}
                  title="Website:"
                  value={social.website}
                  link={social.website}
                />
              )}
              {social?.telegram && (
                <ListItem
                  icon={<TelegramIcon />}
                  title="Telegram"
                  value={social.telegram}
                  link={`https://t.me/${social.telegram}`}
                />
              )}

              {social?.phone && (
                <ListItem
                  icon={<PhoneIcon />}
                  title="Phone:"
                  value={social.phone}
                  link={`tel:${social.phone}`}
                />
              )}
              {social?.email && (
                <ListItem
                  icon={<EmailIcon />}
                  title="Email:"
                  value={social.email}
                  link={`mailto:${social.email}`}
                />
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  social: PropTypes.object.isRequired,
  github: PropTypes.object.isRequired,
};

ListItem.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.node,
  value: PropTypes.node,
  link: PropTypes.string,
  skeleton: PropTypes.bool,
};

export default Details;

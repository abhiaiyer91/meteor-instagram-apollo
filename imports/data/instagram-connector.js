import rp from 'request-promise';

const Instagram = {
  getRecent(keyword) {
    const options = {
      uri: `https://api.instagram.com/v1/tags/${keyword}/media/recent`,
      qs: {
        client_id: '01255dd21bfe4e4cabdf5660f74a7a7d'
      },
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response
    };
    return rp(options).then((res) => {
      const data = res && res.data;
      return _.map(data, (item) => {
        return {
          link: item && item.link,
          images: item && item.images && item.images.low_resolution && item.images.low_resolution.url,
          caption: item && item.caption && item.caption.text
        }
      });
  });
  }
};

export default Instagram;

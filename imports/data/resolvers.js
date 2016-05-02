import Instagram from '/imports/data/instagram-connector';

const resolvers = {
  Query: {
    async data(root, { keywords }) {
      return Instagram.getRecent(keywords);
    }
  }
};

export default resolvers;

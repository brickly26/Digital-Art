const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async () => {
      return await User.find();
    },
  },

  Mutation: {
    addUser: async (parent, { user, email, password }) => {
      const user = await User.create( { username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect email and password");
      }

      const correctPw = user.isCorrectPassword(password)

      if(!correctPw) {
        throw new AuthenticationError("Incorrect email or password");
      }

      const token = signToken(user);
      return { token, user };
    }
  }
};

module.exports = resolvers;

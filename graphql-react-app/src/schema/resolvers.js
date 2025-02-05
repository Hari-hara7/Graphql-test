const users = [
    { id: "1", name: "Hari", email: "hariharanath247@gmail.com" },
    { id: "2", name: "John", email: "vinay247@gmail.com" }
  ];
  
  const resolvers = {
    Query: {
      users: () => users,
    },
  };
  
  module.exports = resolvers;
  
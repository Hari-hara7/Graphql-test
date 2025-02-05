

import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import UserList from "./components/UserList";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="bg-black min-h-screen text-white flex items-center justify-center p-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-8">
            GraphQL + React + Node
          </h1>
          <UserList />
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;

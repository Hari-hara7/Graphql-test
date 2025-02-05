import { useQuery, gql } from "@apollo/client";
import { User } from "../types/User";

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

const UserList: React.FC = () => {
  const { loading, error, data } = useQuery<{ users: User[] }>(GET_USERS);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-white">Error: {error.message}</p>;

  return (
    <div className="mt-6">
      <h2 className="text-2xl sm:text-3xl text-white mb-4">Users</h2>
      <ul className="space-y-4">
        {data?.users.map((user) => (
          <li
            key={user.id}
            className="bg-gray-800 p-4 rounded-lg text-white flex justify-between items-center"
          >
            <span>{user.name}</span>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

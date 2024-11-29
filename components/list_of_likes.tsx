import { getUsers } from "@/actions/get_user";
import OpportunityOptions from "./opportunity";

export default async function OpportunityPeople({
  filter,
}: {
  filter: string;
}) {
  // Call the server action using the `use` hook
  const users = await getUsers(filter, "yanga");

  if (!users) {
    return <p>No users found</p>;
  }

  return (
    <>
      <OpportunityOptions />
      {users.map((user: any) => (
        <div key={user.id} className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-cyan-500"></div>
          <div className="flex flex-col">
            <h5>{user.name}</h5>
            <p className="text-gray-500 text-xs">{user.village}</p>
          </div>
        </div>
      ))}
    </>
  );
}

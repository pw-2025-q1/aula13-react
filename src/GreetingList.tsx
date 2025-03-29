import { Greeting } from "./Greeting";
import { User } from "./App";

interface GreetingListProps {
    users: User[];
}

export function GreetingList( {users} : GreetingListProps) {
    // structured style
    // const greetings = [];
    
    // for (const [key, user] of users.entries()) {
    //     greetings.push(<Greeting title={user.title} name={user.name} key={key} />);
    // }
    // return <div>{greetings}</div>;

    // functional style
    return (
        <div>
            {users.map((user, key) => (
                <Greeting title={user.title} name={user.name} key={key} />
            ))}
        </div>
    );
}

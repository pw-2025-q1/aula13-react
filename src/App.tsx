import { GreetingList } from "./GreetingList";
import './App.css';

export interface User {
  title: string;
  name: string;
}

export function App() {
  const users: User[] = [
    { title: "Mr.", name: "John Doe" },
    { title: "Ms.", name: "Jane Smith" },
    { title: "Dr.", name: "Alice Johnson" },
  ];

  return (
    <div className="app-body">
      <h1 className="app-title">My first React App!</h1>
      <p className="app-paragraph">Welcome to the world of React.</p>
      <GreetingList users={users} />
    </div>
  );
}

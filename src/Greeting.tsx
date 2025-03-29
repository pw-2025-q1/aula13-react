import styles from './Greeting.module.css';

interface GreetingProps {
    title: string;
    name: string;
}

export function Greeting(props: GreetingProps) {
    return (
        <p className={styles.greeting}>
            Hello, {props.title} {props.name}!
        </p>
    );
}
import './App.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {TodoList} from "./TodoList";

export default () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <TodoList/>
            </div>
        </QueryClientProvider>
    );
}

import { QueryClient, QueryClientProvider } from "react-query";
import Characters from "../../components/Characters";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Characters />
    </QueryClientProvider>
  );
}

export default App;

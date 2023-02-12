import Routing from './router/routes';
import {BrowserRouter} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routing/>
        </BrowserRouter>
    );
}

export default App;
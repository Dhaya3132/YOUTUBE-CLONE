import App from '../App';

import Home from '../pages/home/Home';
import Video from '../pages/video/Video';
import Channel from '../pages/channel/Channel';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:"/videos",
                element:<Video />
            },
            {
                path:"/channel",
                element:<Channel />
            }
        ]
    }
])

export default router;
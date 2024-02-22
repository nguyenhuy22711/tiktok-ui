// Layouts
import { HeaderOnly } from '~/compoments/Layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', compoment: Home },
    { path: '/following', compoment: Following },
    { path: '/profile', compoment: Profile },
    { path: '/upload', compoment: Upload, layout: HeaderOnly },
    { path: '/search', compoment: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

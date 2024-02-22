import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: '/', compoment: Home },
    { path: '/following', compoment: Following },
    { path: '/profile', compoment: Profile },
    { path: '/upload', compoment: Upload, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

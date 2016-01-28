import adminRouter from './admin-router';
import homeRouter from './home-router';
import movieRouter from './movie-router';
import personRouter from './person-router';
import searchRouter from './search-router';
import testRouter from './test-router';

export const registerRoutes = () => {
    new adminRouter();
    new homeRouter();
    new movieRouter();
    new personRouter();
    new searchRouter();
    new testRouter();
};

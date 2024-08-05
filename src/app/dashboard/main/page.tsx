import {SimpleWidget} from '@/components';
import {WidgetsGrid} from '@/components/dashboard/WidgetsGrid';

const MainPage = () => {
    return (
        <div className="text-black p-2">
            <h1 className="mt-2 text-3xl">Dashboard</h1>
            <span className="text-xl">General info</span>
            <WidgetsGrid/>
        </div>
    );
};

export default MainPage;

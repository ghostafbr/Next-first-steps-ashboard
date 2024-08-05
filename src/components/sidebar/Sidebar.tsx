import {SidebarMenuItem} from '@/components/sidebar/SidebarMenuItem';
import Image from 'next/image';
import {IoMdHeartEmpty} from 'react-icons/io';
import {IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact} from 'react-icons/io5';

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40}/>,
        title: 'Dashboard',
        subtitle: 'Data Overview',
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40}/>,
        title: 'Counter',
        subtitle: 'Client side counter',
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={40}/>,
        title: 'Pokemons',
        subtitle: 'Pokemon Static Generation',
    },
    {
        path: '/dashboard/favorites',
        icon: <IoMdHeartEmpty size={40}/>,
        title: 'Favorites',
        subtitle: 'Global State',
    }
];

export const Sidebar = () => {
    return (
        <div
            id="menu"
            style={{width: '400px'}}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
        >
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className="inline-block text-blue-500" size={30}/>
                    <span>Dash</span>
                    <span className="text-blue-500">8</span>.
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                            alt="User avatar"
                            width={50}
                            height={50}
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">Andrés F. Bolaños</span>
                </a>
            </div>

            <div id="nav" className="w-full px-6">

                {
                    menuItems.map((item, index) => (
                        <SidebarMenuItem
                            key={index}
                            path={item.path}
                            icon={item.icon}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    ))
                }
            </div>
        </div>
    );
};

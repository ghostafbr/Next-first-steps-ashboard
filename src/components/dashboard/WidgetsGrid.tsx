'use client';

import {SimpleWidget} from '@/components';
import {useAppSelector} from '@/store';
import {IoCafeOutline} from 'react-icons/io5';

export const WidgetsGrid = () => {

    const isCart = useAppSelector( state => state.counter.count );

    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget
                title={`${isCart}`}
                subtitle="Added pokemones"
                label="Contador"
                icon={<IoCafeOutline size={70} className="text-blue-500"/>}
            />
            {/*<SimpleWidget title="Contador" subtitle="Subtitulo" icon={<IoCafeOutline size={50} className="text-blue-500"/>}/>*/}
        </div>
    );
};

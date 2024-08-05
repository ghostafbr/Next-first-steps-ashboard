'use client';
import {useAppDispatch, useAppSelector} from '@/store';
import {addOne, initCounterState, resetCounter, subtractOne} from '@/store/counter/counterSlice';
import {useEffect, useState} from 'react';

interface Props {
    value?: number;
}

export interface CounterResponse {
    method: string;
    count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
    return await fetch('/api/counter').then((res: Response) => res.json());
}

export const CartCounter = ({value = 0}: Props) => {

    const count: number = useAppSelector((state) => state.counter.count);
    const dispatch = useAppDispatch();

    /*useEffect(() => {
        dispatch(resetCounter(value));
    }, [dispatch, value]);*/

    useEffect(() => {
        getApiCounter().then(({count}) => dispatch(initCounterState(count)));
    }, [dispatch]);

    return (
        <>
            <span className="text-9xl">{count}</span>
            <div className="flex">
                <button
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 trasition-all w-[100px] mr-2"
                    onClick={() => dispatch(addOne())}>+1
                </button>
                <button
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 trasition-all w-[100px] mr-2"
                    onClick={() => dispatch(subtractOne())}>-1
                </button>
            </div>
        </>
    );
};

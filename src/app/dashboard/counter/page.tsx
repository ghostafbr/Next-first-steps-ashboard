import {CartCounter} from '@/shopping-cart';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Shopping Cart',
    description: 'Client side counter',
};

const CounterPage = () => {

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Products in the cart</span>
            <CartCounter value={10}/>
        </div>
    );
};

export default CounterPage;
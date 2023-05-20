import { Inter, Lato, Lora, Crimson_Text } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lora = Lora({ subsets: ['latin'] });

export const lato = Lato({ subsets: ['latin'], weight: '400' });

export const crimson = Crimson_Text({
    subsets: ['latin', 'vietnamese'],
    weight: '400',
});

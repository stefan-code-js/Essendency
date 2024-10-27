import '../styles/globals.css';
import '../styles/fonts.css'; // Import the font-face definitions
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${playfair.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;

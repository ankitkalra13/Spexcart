import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
import 'swiper/css/pagination';
import './globals.css';

export const metadata = {
  title: 'Specscart - Welcome',
  description: 'Welcome to Specscart platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
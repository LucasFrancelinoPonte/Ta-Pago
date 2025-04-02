import './globals.css';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  title: 'TÁ PAGO',
  description: 'Sistema de pagamentos TÁ PAGO',
  icons: {
    icon: '/img/Logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
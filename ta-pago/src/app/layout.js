export const metadata = {
  title: 'TÁ PAGO',
  description: 'Gerenciador de Tarefas TÁ PAGO',
  icons: {
    icon: '/img/Logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
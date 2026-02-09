import './globals.css';

export const metadata = {
  title: 'ClearDocs AI',
  description: 'Explain any document simply',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

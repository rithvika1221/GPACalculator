import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import {Providers} from "./providers";

 // Component for teh root layout of the GPA Calcualtor
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
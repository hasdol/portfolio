import "./globals.css";
import { Quicksand } from 'next/font/google'

const zain = Quicksand({ subsets: ['latin'] })


export const metadata = {
  title: "Håkon Asdøl",
  description: "Håkon Asdøl Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${zain.className} antialiased text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}

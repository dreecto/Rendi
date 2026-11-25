export const metadata = {
  title: 'RENDI – AI can run your back office. We set it up for you.',
  description: 'Done-for-you AI setup for owner-operators in food, services, and trades.',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}

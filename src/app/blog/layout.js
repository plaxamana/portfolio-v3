import { VisualEditing } from 'next-sanity';
import { draftMode } from 'next/headers';
import Container from '@/app/components/Container';

export const metadata = {
  title: 'The Blog',
};

export default function Layout({ children }) {
  return (
    <Container>
      {draftMode().isEnabled && (
        <a
          className="fixed bottom-0 right-0 p-4 m-4 text-white bg-blue-500"
          href="/api/draft-mode/disable"
        >
          Disable preview mode
        </a>
      )}
      {children}
      {draftMode().isEnabled && <VisualEditing />}
    </Container>
  );
}

export const Komponent = ({ title, description, bleh }: { title: string; description: string; bleh: () => void }) => {
  return null;
};

const props = {
  title: 'string',
  description: 'test',
};

const bleh = (title: string) => {
  return <p>Hello</p>;
  console.log('Hello');
};

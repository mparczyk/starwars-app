import { Button, ConfigProvider } from 'antd';

export const HomePage = (): JSX.Element => (
  <ConfigProvider
    theme={{
      components: {
        Button: {
          colorPrimary: 'yellow',
          colorBgBase: 'blue',
          controlHeight: 400,
          algorithm: true, // Enable algorithm
        },
      },
    }}
  >
    <Button>Hello</Button>
  </ConfigProvider>
);

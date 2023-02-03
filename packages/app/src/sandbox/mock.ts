// react
const files = {
  '/index.tsx': {
    code: `
import React from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './demo';
console.log(1111)
createRoot(document.getElementById('container')).render(<Demo />);

`,
  },
  '/index.html': {
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
  </head>
  <body>
    <div id="container" style="padding: 24px" />
    <script>const mountNode = document.getElementById('container');</script>
  </body>
</html>`,
  },
  '/index.css': { code: '' },
  '/demo.tsx': {
    code: `import React from 'react';
  import './index.css';
  import { Space, Table, Tag } from 'antd';
  // import {Button} from '@wemo-ui/klein';
  // import type { ColumnsType } from 'antd/es/table';

  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  const App: React.FC = () => {
    return (
      <div>
        <h1>这是一个React渲染的antd组件</h1> 
        <Table columns={columns} dataSource={data} />
      </div>
    )
  };

  export default App;`,
  },
  '/package.json': {
    code: `{
    "browserslist": [
      ">0.2%",
      "not dead"
    ],
    "dependencies": {
      "@types/react": "^18.0.0",
      "@types/react-dom": "^18.0.0",
      "antd": "5.1.2",
      "react": "~18.2.0",
      "react-dom": "^18.0.0",
      "react-scripts": "^4.0.0"

    },
    "devDependencies": {
      "typescript": "^4.0.5"
    },
    "main": "index.js",
    "scripts": {
      "build": "react-scripts build",
      "eject": "react-scripts eject",
      "start": "react-scripts start",
      "test": "react-scripts test --env=jsdom"
    },
    "title": "基本用法 - antd@5.1.2"
  }`,
  },
};

// antd
const files2 = {
  '/App.js': {
    code: `
    import {Button} from 'antd';
    import 'antd/dist/antd.css'
    import './index.less';
    export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button>button</Button>
    </div>
  );
}`,
  },
  '/index.less': {
    code: `.App{
      background-color:#000000;
    }`,
  },
  '/index.js': {
    code: `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
`,
  },
  '/package.json': {
    code: `{
  "name": "react",
  "version": "1.0.0",
  "description": "React example starter project",
  "keywords": ["react", "starter"],
  "main": "src/index.js",
  "dependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-scripts": "4.0.0",
    "antd":"4.1.3",
    "dayjs":"1.11.7"
  },
  "devDependencies": {
    "@babel/runtime": "7.13.8",
    "typescript": "4.1.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "browserslist": [">0.2%", "not dead", "not ie <= 11", "not op_mini all"]
}`,
  },
};

// klein
const files3 = {
  '/App.js': {
    code: `
    import {Button} from '@wemo-ui/klein';
    import '@wemo-ui/klein/dist/@wemo-ui/klein.min.css';
    export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button>button</Button>
    </div>
  );
}`,
  },
  '/index.less': {
    code: `
    .App{
      background-color:#000000;
    }`,
  },
  '/temp.less': {
    code: `.App{
      background-color:#000000;
    }`,
  },
  '/index.js': {
    code: `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
`,
  },
  '/package.json': {
    code: `{
  "name": "react",
  "version": "1.0.0",
  "description": "React example starter project",
  "keywords": ["react", "starter"],
  "main": "src/index.js",
  "dependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-scripts": "4.0.0",
    "@wemo-ui/klein":"1.0.85",
    "react-is":"18.2.0"
  },
  "devDependencies": {
    "@babel/runtime": "7.13.8",
    "typescript": "4.1.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "browserslist": [">0.2%", "not dead", "not ie <= 11", "not op_mini all"]
}`,
  }
};

const modules = {};

Object.keys(files3).map(k => {
  const item = files3[k];
  modules[k] = {
    code: item.code,
    path: k,
  };
});

const data = {
  template: 'create-react-app',
  modules,
  //   disableDependencyPreprocessing:true,
  //   entry: '/App.js',
  dependencies: [],
  customNpmRegistries: [],
  externalResources: [
    // 'https://assets.weimob.com/@wemo-ui/klein@1.0.85/dist/@wemo-ui/klein.min.js',
  ],
  // hasActions: false,
};

export default data;

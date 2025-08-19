import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TableViewer from './enchants/components/TableViewer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="checker-root">
      <header className="checker-header">
        <h1 className="checker-title">エンチャント本チェッカー</h1>
        <p className="checker-desc">
          このツールはマインクラフトのエンチャント本の所持状況を管理できるチェッカーです。<br />
          テーブルの本アイコンをクリックすると「所持済み」としてマークされ、一覧が自動で並び替わります。<br />
          各エンチャントの日本語名・ローマ数字・理論値も一目で確認できます。<br />
          <span className="checker-note">※データはブラウザ上のみで管理されます。リロードで状態はリセットされます。</span>
        </p>
      </header>
      <TableViewer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

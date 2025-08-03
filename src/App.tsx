import './App.css';
import "../src/styles/UserCard.module.css"
import { FormInput } from './components/formInput';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <FormInput name={"テストユーザ"} email={"example@persol.co.jp"} about={"この行は3行目までしか表示されません。これはテストユーザの自己紹介カードです。誕生日、趣味、特技など自己紹介に必要な情報は記載しておりません。作成日は2025年8月3日（日）です。この日はとても暑く、息苦しさを感じるほど暑い日でした。"} />
      <Footer />
    </div>
  );
}

export default App;

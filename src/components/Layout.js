//import {useState} from 'react'
//import styles from './Layout.module.css'
import '../SCSS/_layout.scss';
import '../SCSS/_components.scss';
import Header from './Header';
import Navigation from './Navigation';
import View from './View';

const Layout = props => {
  return (
    <div className="container">
      {props.children}
      <header className="header">
        <Header />
      </header>
      <div className="content">
        <nav className="sidebar">
          <Navigation />
        </nav>
        <main className="hotel-view">
          <View />
        </main>
      </div>
    </div>
  );
};
export default Layout;

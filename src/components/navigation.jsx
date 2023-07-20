
import { Button } from 'antd';
import logoTitle from "../assets/images/logoTitle.png"

export const Navigation = ({ onClickConnectWallet, onClickDisconnectWallet, walletAddress }) => {
  const menu = () => {
    let links = document.querySelector('.links')
    links.classList.toggle('active')
}
  return (
    <header>
    <div className="containerheader">
        <img className="logoTitle" src={logoTitle}></img>
        <div className="links">
            <a className='navigate_link' href="/" onClick={menu}>Home</a>
            <a className='navigate_link' href="/upload" >Upload</a>
            <a className='navigate_link' href="/chat" >Chats</a>
            <Button className="defult-btn" onClick={onClickConnectWallet} ghost shape='round'>Sign In</Button>
            <Button className="defult-btn-next" onClick={onClickConnectWallet} shape='round'>Get Started Today</Button>
        </div>
        <div className="bar" onClick={menu}>
        <span></span>
        <span></span>
        <span></span>
        </div>
    </div>
    </header>
  )
}

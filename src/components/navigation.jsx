
import { Button } from 'antd';
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from 'react-router-dom';
import logoTitle from "../assets/images/logoTitle.png"

export const Navigation = ({ onClickConnectWallet, onClickDisconnectWallet, walletAddress }) => {
  const { isAuthenticated, loginWithRedirect, user, logout } = useAuth0();
  const history = useHistory();

  console.log("user", user, isAuthenticated)
  const menu = () => {
    let links = document.querySelector('.links')
    links.classList.toggle('active')
  }

  return (
    <header>
    <div className="containerheader">
        <img className="logoTitle" src={logoTitle}></img>
        <div className="links">
            <a className='navigate_link' href='/'>Home</a>
            <a className='navigate_link' href='/upload'>Upload</a>
            <a className='navigate_link' href='/chat'>Chats</a>
            {/* <Button className="defult-btn" onClick={() => loginWithRedirect()} ghost shape='round'>Sign In</Button> */}
            {
              isAuthenticated ? <Button className="defult-btn-next signin_btn" onClick={() => logout()} shape='round' size='large'>{user.nickname}</Button>
                : <Button className="defult-btn-next signin_btn" onClick={() => loginWithRedirect()} shape='round' size='large'>Sign In</Button>
            }
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

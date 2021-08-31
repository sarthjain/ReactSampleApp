import './Header.css';
import logo from './logo.svg';

export default function Header(props) {
    const { userSelected } = props;
    return (
        <div className="App-header">
            <div style={{ display: "flex" }}>
                <img src={logo} className="App-logo" alt="logo" />
                <h3>Social Media</h3>
            </div>
            <p className="user-name">{userSelected ?? ''}</p> 
        </div>
    );
}
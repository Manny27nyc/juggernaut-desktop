/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import { useHistory } from 'react-router-dom';
import routes from '../../constants/routes.json';
import JuggernautLogo from '../images/JuggernautLogo';

const Home = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push(routes.WALLETS);
  }, 2500);

  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <JuggernautLogo width="550px" height="550px" />
    </div>
  );
};

export default Home;

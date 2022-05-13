import Logo from '../../img/Logo.svg'
import './Footer.scss'

const Footer = () => {
  return (
    <section>
      <div className='wrapperFooter'>
        <div>
          <div>
              <div className='LogoAndSearch'>
                  <img src={Logo} alt="#"/>
                  <h3>NFT ART</h3>
              </div>
              <p>Get the lastes Updates</p>
          </div>
          <div>
            <h3>NFT ART</h3>
            <ul>
              <li>Explore</li>
              <li>How it Works</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3>My Account</h3>
            <ul>
              <li>Profile</li>
              <li>Favorites</li>
              <li>My Collections</li>
              <li>Settings</li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Footer
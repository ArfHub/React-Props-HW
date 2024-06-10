import './Footer.css'
import discord from "../assets/discord-icon..png"
import linkedin from "../assets/linkedin-icon.png"
import logo from "../assets/logo-tu.png"
import logoscy from "../assets/logoscy.png"
import twitter from "../assets/twitter-icon.png"
import youtube from "../assets/youtube-icon.png"
import snapchat from "../assets/snapchat-icon.png"


function Footer() {

  return (
    <>
<footer class="footer">
        <div dir="rtl" class="container2">
            <div class="footer-logo">
                <img src={logo} alt="شعار أكاديمية طويق"/>
            </div>
            <div class="footer-section">
                <ul>
                    <li><a href="#">شارك كمدرب</a></li>
                    <li><a href="#">حول الأكاديمية</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <ul>
                    <li><a href="#">الشروط والأحكام</a></li>
                    <li><a href="#">سياسة الخصوصية</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <ul class="social-links">
                    <li><a href="https://www.linkedin.com"><img src={linkedin} alt="LinkedIn"/></a></li>
                    <li><a href="https://www.snapchat.com"><img src={snapchat} alt="Snapchat"/></a></li>
                    <li><a href="https://www.youtube.com"><img src={youtube} alt="YouTube"/></a></li>
                    <li><a href="https://www.twitter.com"><img src={twitter} alt="Twitter"/></a></li>
                    <li><a href="https://www.discord.com"><img src={discord} alt="Discord"/></a></li>
                </ul>
                <h1 dir="ltr" class="TuwaiqAcademy">@TuwaiqAcademy</h1>
            </div>
            <div class="footer-section">
            <div class="LOGO-CY">
                <img src={logoscy}/>
            </div>
            </div>
            </div>  
    </footer>
    </>
  )
}

export default Footer
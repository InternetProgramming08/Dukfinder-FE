import * as F from './FooterStyle';
import React from "react"
import { Link} from 'react-router-dom';
import './Footer.css'
import * as U from '../Upload/UploadStyle';


const Front = ['윤소은', '조예영', '최유리'];
const Back = ['김나영', '여현정'];


export default function Footer() {
    return (
        <>
            <F.FooterWrapper>
                <table>
                <tr>
                <td>
                <F.DevWrapper>
                    <F.Dev>Front-end</F.Dev>
                    <F.Names>
                        {Front.map((developer, index) => (
                            <F.NameEach key={index}>{developer} &nbsp;</F.NameEach>
                        ))}</F.Names>
                </F.DevWrapper>
                <F.DevWrapper>
                    <F.Dev>Back-end</F.Dev>
                    <F.Names>
                        {Back.map((developer, index) => (
                            <F.NameEach key={index}>{developer} &nbsp;</F.NameEach>
                        ))}</F.Names>
                </F.DevWrapper></td><td>
                <F.DevWrapper>
                <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div></F.DevWrapper></td><td>
            <F.DevWrapper>
            <section className="social-media">
                    
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/"
                        target = "_blank"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram" to="/"
                        target = "_blank"
                        aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link class='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                        <i class='fab fa-youtube' />
                        </Link>
                        <Link
                        class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i class='fab fa-twitter' />
                        </Link>
                        <Link
                        class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                        <i class='fab fa-linkedin' />
                        </Link>

                </div>
            </section></F.DevWrapper></td></tr></table>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
            </F.FooterWrapper>
        </>
    )
}

// export default function Footer() {
//     return (
//         <>
//             <F.FooterWrapper>
//                 <F.DevWrapper>
//                     <F.Dev>Front-end</F.Dev>
//                     <F.Names>
//                     {Front.map((developer, index) => (
//                     <F.NameEach key={index}>{developer} &nbsp;</F.NameEach>
//                     ))}</F.Names>
//                 </F.DevWrapper>
//                 <F.DevWrapper>
//                     <F.Dev>Back-end</F.Dev>
//                     <F.Names>
//                     {Back.map((developer, index) => (
//                     <F.NameEach key={index}>{developer} &nbsp;</F.NameEach>
//                     ))}</F.Names>
//                 </F.DevWrapper>
//             </F.FooterWrapper>
//         </>
//     )
// }
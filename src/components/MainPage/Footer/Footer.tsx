import React from 'react'
import '../../../styles/MainPage/Footer.css'
import map from '../../../assets/harita.png'

function Footer() {
  return (
    <div className='footerContainer'>
        <div className='footerWrapper'>
            <div className='leftSide'>
                <div className='imageSide'>
                    <img src={map} alt='alt'/>
                </div>
                <div className='content'>
                    <h4>İletişim</h4>
                    <p>Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad.<br />
                     Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No:<br />
                      2B03 Esenler/İstanbul</p>
                     <h4>Email:bilgi@tesodev.com</h4> 
                </div>
            </div>
            <div className='rightSide'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12041.118984277!2d28.8909481!3d41.0191353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1664014353528!5m2!1str!2str" width="468" height="223" style={{border:0}}  loading="lazy"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Footer
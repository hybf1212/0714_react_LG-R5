import React from 'react';

const Header = () => {
  const supportname = [
    {link : "#", name : "지구본"},
    {link : "#", name : "고객지원"},
    {link : "#", name : "TEL - 00000000"}
  ]
  const gnbname = [
    {link : "#event", name : "이벤트"},
    {link : "#", name : "제품소개"},
    {link : "#", name : "상세스펙"},
    {link : "#", name : "스토어"}
  ]
  return (
    <>
      <section id='hd' className='d-flex justify-content-between fixed-top'>
        <div className='toplogo'>
          <a href="#"><img src="./LG-logo.png" alt="logo" /></a>
        </div>
        <div className='d-flex flex-column align-items-end'>
          <ul className='support d-flex'>
            {
              supportname.map( (v, x) =>{
                  return <li className='ms-4'><a href={v.link}>{v.name}</a></li>
                }
              )
            }              
          </ul>                   
          <ul className='gnb d-flex'>
            {
              gnbname.map( (v, x) =>{
                return <li><a href={v.link}>{v.name}</a></li>
              })
            }        
          </ul>    
        </div>
      </section>
      <div className='mainbanner'>
        <img src="./img/R5-mainbanner.png" alt="mainbanner" />
      </div>
      <a className='kakao-link' href="#"><img src="./img/kakao-img.png" alt="kakaotalk" /></a>
    </>
  );
};

export default Header;
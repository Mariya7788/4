import React, { useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import imgProfile from '../image/profile.png';
import '../profile/profilr.css';
function Profile() {
  let data = JSON.parse(sessionStorage.getItem('user'));
  let profile = JSON.parse(sessionStorage.getItem('profile'));

  const [company, setCompany] = useState(profile?.company || "");
  const [phone, setPhone] = useState(profile?.phone || "");
  const [inputErr, setinputErr] = useState(false);
  const [address, setAddress] = useState(profile?.address || "");

  function Saveprofile() {
    sessionStorage.setItem(
      'profile',
      JSON.stringify({
        name: data.name,
        address: address,
        phone: phone,
        company: company,
      })
    );
  }

  return (
    <div className="progile-bg">
      <Header />
      <div className="profile-main">
        <img src={imgProfile} className="imge"></img> <br />
        <label> Имя: </label> <p> {data.name}</p>
        <br />
        <label> Телефон: </label>
        <input
          onChange={(e) => {
            console.log(e, 'e');
            setPhone(e.target.value);
          }}
          value={phone}
        />
        <label> Компания: </label>
        <input
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          value={company}
        />
        <label>Адрес: </label>
        <div style={{ marginLeft: '200px', marginTop: '-32PX' }}>
          <textarea
            rows="4"
            cols="55"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Введите Свой адрес..."
          ></textarea>
          {inputErr && (
            <small style={{ display: 'block' }}>
              Ты должен что-нибудь написать
            </small>
          )}

          <button
            onClick={(e) => Saveprofile(e.target.value)}
            className="savebutton"
          >
            Сохранить
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;

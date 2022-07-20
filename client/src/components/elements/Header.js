import React, { useState } from 'react';

import NavBar from './NavBar';
import styled from 'styled-components';
import UserDetail from './UserDetails';


const HeaderBox = styled.header`
  width: 100%;
  min-height: 8vw;
  margin-bottom: 2rem;
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: rgba(0,0,0, 0.5);
  `;

const UserBox = styled.div`
  height: 100%;
  padding: 0 0rem;
  padding-right: 3rem;

  & select{
    width: 100%;
    margin-bottom: 1rem;;
    font-size: 2.2rem;
    background-color: rgba(255,255,255, .2);
    color: currentColor;
  }
  `;

const BrandBox = styled.div`
  padding: 0 3rem;
  `;

const NavBox = styled.div`
  flex-grow: 2;
  padding: 0 3rem;
`;


const Header = ({ users }) => {

  const userOptions = users.map((user) => (
    < option key={user._id} > {user.name} </option >
  ));

  const [selectedUser, setSelectedUser] = useState("");
  const handleSelect = (event) => {
    setSelectedUser(event.target.value)
    console.log(selectedUser)
  }

  return (
    <HeaderBox>
      <BrandBox>
        <h1>SpaceClan Discover</h1>
      </BrandBox>

      <NavBox>
        <NavBar />
      </NavBox>

      <UserBox>
        <select onChange={handleSelect}>
          {userOptions}
        </select>
        <UserDetail currentUser={selectedUser} users={users} />
      </UserBox>
    </HeaderBox>
  )
}

export default Header;
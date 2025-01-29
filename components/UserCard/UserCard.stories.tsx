import React from 'react';
import { UserCard } from './UserCard';

export default {
  title: 'Components/UserCard', 
  component: UserCard,
};

export const MyUserCard = () => (
  <UserCard
    name="Jane Doe"
    email="jane.doe@example.com"
    avatarUrl="https://via.placeholder.com/150"
  />
);




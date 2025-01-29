import React from "react";
import styles from "./UserCard.module.css"
import Image from 'next/image';
import profilePic from '../../public/profile_pic.png';

type UserCardProps = {
  name: string;
  email: string;
  avatarUrl?: string;
};

export function UserCard({ name, email, avatarUrl }: UserCardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={profilePic}
        alt="Picture of the user"
        width={100} 
        height={100}
      />
      <div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.email}>{email}</p>
      </div>
    </div>
  );
}



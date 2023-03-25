import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useStatStyles } from '@chakra-ui/react'
import { auth } from 'config/firebase'
import { firebase } from '@/config/firebase'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export function DashBoard() {
  const currentUser = firebase.auth().currentUser
  const userName = currentUser ? currentUser.displayName : null
  return (
    <>
      <Head>
        <title>User Dashboard</title>
        <div>
          <h1>Hello, {userName}</h1>
        </div>
      </Head>

    </>
  );
}
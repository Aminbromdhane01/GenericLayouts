'use client'
import React from 'react';
import SearchAppBar from "@/layouts/AppBar/AppBar";
import styles from './page.module.css'
import PageLayout from '@/layouts/PageLayout';
import BookBody from '@/pages/Bookbody/BookBody';
import books from '../book.json'
import SideBar from '@/layouts/SidebarV2/SideBar';
import FieldAppbar from '@/layouts/AppBarV2/AppBar';
import { useGetBooksQuery } from '@/features/book/api/apiSlice';

export default function Home() {
  

  return (
    <main className={styles.content} >
      <SearchAppBar />
      <FieldAppbar />
      <PageLayout RightLayout={<BookBody  />} />
    </main>
  );
}

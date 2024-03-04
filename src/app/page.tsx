'use client'
import React from 'react';
import SearchAppBar from "@/layouts/AppBar/AppBar";

import PageLayout from '@/layouts/PageLayout';
import BookBody from '@/pages/Bookbody/BookBody';
import books from '../book.json'
import SideBar from '@/layouts/SidebarV2/SideBar';

export default function Home() {
  return (
    <main>
      <SearchAppBar />
      <PageLayout LeftLayout={<SideBar />} RightLayout={<BookBody books={books} />} />
    </main>
  );
}

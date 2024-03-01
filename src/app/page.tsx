'use client'
import React from 'react';
import SearchAppBar from "@/layouts/AppBar/AppBar";
import Sidebar from "@/layouts/Sidebar/Sidebar";
import PageLayout from '@/layouts/PageLayout';
import BookBody from '@/pages/Bookbody/BookBody';
import books from '../book.json'

export default function Home() {
  return (
    <main>
      <SearchAppBar />
      <PageLayout LeftLayout={<Sidebar />} RightLayout={<BookBody books={books} />} />
    </main>
  );
}

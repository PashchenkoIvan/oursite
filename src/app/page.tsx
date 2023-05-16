import Image from 'next/image'
import Header from "@/Components/Header/Header";
import MainBlock from "@/Components/MainBlock/MainBlock";
import AboutBlock from "@/Components/AboutBlock/AboutBlock";

export default function Home() {
  return (
    <>
        <Header/>
        <MainBlock/>
        <section id="about">
            <AboutBlock/>
        </section>
    </>
  )
}

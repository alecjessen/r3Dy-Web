import Image from 'next/image'
import React from 'react'
import Footer from '../../../components/Footer'
import Contributor from '../../../components/Contributor'
import BryanPic from 'public/headshot-bryan.png'
import NickPic from 'public/headshot-nick.png'
import AlecPic from 'public/headshot-alec.png'
import CorsoPic from 'public/headshot-corso.png'

export default function About() {
  return (
    <>
    <section className='basic-transition py-16 md:py-28 px-8 flex justify-center dark:darkmode-backround'> 
      {/* HERO */}
      <div className='flex justify-center flex-col max-w-screen-lg'>
      <h1 id='project-contributors' className='basic-transition text-5xl mb-8 text-center' >Just about R3DY</h1>
        <p id='landing-text' className='text-center dark:text-white'>Learn how we started and meet the developers that have contributed to R3DY UI’s <br/> growing library of components.</p>
      </div>
    </section>

    {/* STORY */}
    <section className='basic-transition py-16 md:py-28 px-8 flex justify-center border-t dark:border-slate-700 dark:darkmode-backround'>
      <div className='flex md:flex-row flex-col max-w-3xl content-center w-full text-center md:text-left'>
        <div className='md:pr-8'>
          <h2 className='basic-transition text-indigo-700 text-2xl font-extrabold mb-4 dark:text-white'>Our Story</h2>
          <h3 id='landing-text' className='basic-transition mb-8 dark:text-white'>R3DY UI was started on June 2023 by a team of remote engineers.</h3>
          <p className='basic-transition dark:text-white'>With the rise of VR/AR platforms and applications, we saw the need to further extend the capabilities of the already powerful Three.js and React to incorporate interactive and easy-to-implement 3D components. 
          <br/>
          <br/>
          R3DY UI allows any engineer to efficiently develop their 3D applications.
          </p>
          <div className="flex justify-center md:justify-start mt-8">
            <iframe className='block' src="https://ghbtns.com/github-btn.html?user=oslabs-beta/r3Dy-Web&type=follow&count=true&size=large" width="300" height="30" title="GitHub"></iframe>
          </div>
        </div>
        <div className='flex justify-center w-full'>
          <Image className='mt-16 md:mt-0' src='../r3dy-logo-ring.svg' width={232} height={232} alt='About Us Logo'/>
        </div>
      </div>
    </section>

      {/* CONTRIBUTORS */}
    <section className='basic-transition flex justify-center pb-20 border-t py-16 md:py-28 dark:border-slate-700 dark:darkmode-backround'>
      <div className='md:flex md:flex-wrap md:justify-center block max-w-5xl'>
        <Contributor src={BryanPic} name='Bryan Trang' title='Software Engineer' githubUrl='https://github.com/bryanltrang' linkedinUrl='https://www.linkedin.com/in/bryanltrang/' />
        <Contributor name='Garrett Woo' title='Software Engineer' githubUrl='https://github.com/18gwoo' linkedinUrl='https://www.linkedin.com/in/garrett-woo/' />
        <Contributor src={NickPic} name='Nick King' title='Software Engineer' githubUrl='https://github.com/nrking913' linkedinUrl='http://www.linkedin.com/in/nick-king88' />
        <Contributor src={AlecPic} name='Alec Jessen' title='Software Engineer' githubUrl='https://github.com/alecjessen' linkedinUrl='https://www.linkedin.com/in/alecjessen/' />
        <Contributor src={CorsoPic} name='Corso Rosati' title='Software Engineer' githubUrl='https://github.com/corsodr' linkedinUrl='https://www.linkedin.com/in/bryanltrang/' />
      </div>
    </section>

    <Footer />
    </>
  )
}

import { Button } from '@mantine/core';
import { IconArrowRight, IconAward, IconBriefcase, IconChartArrowsVertical, IconTarget, IconUser } from '@tabler/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const stats = [
    { value: '1M+', label: 'Active Users', IconUser},
    { value: '50K+', label: 'Companies', IconBriefcase },
    { value: '100K+', label: 'Job Placements', IconTarget },
    { value: '200+', label: 'Countries', IconAward },
  ];

  const executives = [
    {
      name: "Ram Dagar",
      role: "Chief Executive Officer",
      image: "/teamImg/RamDagar.jpg",
      quote: "Empowering talent, transforming careers.",
    },
    {
      name: "Hemesh Vasa",
      role: "Chief Technology Officer",
      image: "/teamImg/Hemesh.jpg",
      quote: "Where opportunities meet potential.",
    },
    {
      name: "Mahesh Gore",
      role: "Chief Strategy Officer",
      image: "/teamImg/Mahesh Gore.jpg",
      quote: "Pioneering innovation for a better future.",
    },
    {
      name: "Omkar Bhesar",
      role: "Chief Financial Officer",
      image: "/teamImg/Omkar Bhesar.jpg",
      quote: "Sustaining growth through financial precision.",
    },
    {
      name: "Amulya",
      role: "Chief Marketing Officer",
      image: "/teamImg/Amulya.jpg",
      quote: "Building careers, one connection at a time.",
    },
    {
      name: "Revathi",
      role: "Chief Operations Officer",
      image: "/teamImg/Revathi.jpg",
      quote: "Your career, our commitment.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-20 overflow-hidden items-center ">
        <div className="container mx-auto px-6 ">
          <div >
            <h1 className="text-5xl font-bold mb-6 item-center">
              Transforming the <span className="text-[#FFB800]">Job Search</span> Journey
            </h1>
            <p className="text-xl text-gray-400">
              At Workfolio, we're on a mission to redefine how people navigate their careers. 
              Inspired by the challenges and successes of job seekers and employers alike, 
              our goal is to empower professionals to find not just a job but the right job.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-20 bg-[#2A2A2A] gap-2 !items-center px-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Vision and Mission</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Our vision is to create a world where job seekers and employers connect seamlessly 
            to achieve mutual growth and success. We strive to foster a transparent and empowering 
            environment that redefines career navigation.
          </p>
          <p className="text-xl text-gray-400 mt-6 max-w-4xl mx-auto">
            Our mission is to simplify the job search journey, provide actionable insights, and 
            build a thriving community of professionals who can discover, connect, and grow 
            in their careers with confidence.
          </p>
        </div>
        <div className='flex items-center justify-center mt-10'>
          <Link  to="/contact">
        <Button   color="brightsun.5" variant="filled">Contact Us</Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#2A2A2A] p-6 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                  <IconChartArrowsVertical className="text-[#FFB800]" size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Team Section */}
      <section className="py-20 bg-[#2A2A2A]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership</h2>
          <div className="grid grid-cols-3 gap-12 max-w-6xl mx-auto">
            {executives.map((exec, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-[#FFB800]">
                  <img 
                    src={exec.image} 
                    alt={exec.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{exec.name}</h3>
                <p className="text-[#FFB800] mb-4">{exec.role}</p>
                <p className="text-gray-400 italic">"{exec.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Join the thousands of professionals discovering smarter job opportunities every day. 
            Let's build your future together at Workfolio.
          </p>
          <button className="btn-primary flex items-center gap-2 mx-auto">
            Get Started <IconArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

// IMPORTS
import React from 'react';
import AccordionCard from '../../atoms/cards/AccordionCard'

// CREATE FUNCTION
export default function CV() {
    // STATE VARIABLES
    
    // HTML
    return (
        <>
            <head></head>
            <body>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='space-y-4'>
                    <AccordionCard
  description="This program combines advanced mechanical engineering concepts with business strategies, providing a comprehensive understanding that bridges technical and commercial domains."
  gpa="3.68"
  grade="1:1"
  institution="University College Dublin"
  subtitle="Mechanical Engineering With Business"
  title="ME"
/>
<AccordionCard
  description="This program combines advanced mechanical engineering concepts with business strategies, providing a comprehensive understanding that bridges technical and commercial domains."
  gpa="3.72"
  grade="1:1"
  institution="University College Dublin"
  subtitle="Mechanical Engineering With Business"
  title="BSc"
/>
<AccordionCard
  description="Focused on AI development, covering machine learning, neural networks, and advanced algorithms. Completed a capstone project on reinforcement learning applied to robotics."
  gpa="4.0"
  grade="Summa Cum Laude"
  icon={() => {}}
  institution="Massachusetts Institute of Technology"
  subtitle="Leaving Certificate"
  title=""
/>

                    </div>
                    <div>
                    <AccordionCard
  description="A two-year program focused on leadership, strategy, and innovation in the business world."
  gpa="3.9"
  grade="Distinction"
  institution="Harvard Business School"
  subtitle="MBA"
  title="Business Administration"
/>
                    </div>
                </div>
            </body>
        </>
    )
}
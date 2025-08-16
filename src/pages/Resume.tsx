import React from 'react';
import PageTitle from '../components/sections/PageTitle';
import ResumeSection from '../components/sections/Resume';

const Resume: React.FC = () => {
  return (
    <>
      <PageTitle 
        title="Resume"
        description={`"Hard work outweighs talent — every time."\n\n                    ~ Kobe Bryant`}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Resume' }
        ]}
      />
      <ResumeSection />
    </>
  );
};

export default Resume; 
import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionPublication = ({ publication }) => {
  if (!publication.length) return null;

  return (
    <Section title="Publication">
      {publication.map((publication) => (
        <SummaryItem
          key={publication.name}
          name={publication.name}
          description={publication.description}
          link={publication.link}
        />
      ))}
    </Section>
  );
};

export default SectionPublication;

import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import { questionsAndAnswers } from '../../data/accordion-data';

function Accordion() {
  const [content, setContent] = useState(questionsAndAnswers);
  const toggleItem = (index) => {
    setContent(
      content.map((item, i) => {
        if (i === index) {
          item.expanded = !item.expanded;
        } else {
          item.expanded = false;
        }

        return item;
      }),
    );
  };
  return (
    <div className="skills-container">
      <div className="accordion">
        {content.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            index={index}
            toggleItem={toggleItem}
          />
        ))}
      </div>
      <img
        className="skills-image"
        src="dogpatchcircuit.png"
        alt="Dog Patch Circuit"
      />
    </div>
  );
}

export default Accordion;

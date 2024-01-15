import React from 'react';

const HtmlComponent = ({ html }) => {
 return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
 );
};

export default HtmlComponent;
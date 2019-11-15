import React from 'react';
import '../assets/styles/components/PortfolioItem.scss';

const PortfolioItem = props => {
  const { title, company, description, technologies, link, width, image } = props;

  return (
    <article className='portfolio__project'>
      <div className='portfolio__project--details'>
        <div>
          {title !== '' && link !== '' ? (
            <h3 className='portfolio__project--title'>
              <a href={link} target='blank'>
                {title}
              </a>
            </h3>
          ) : (
            <h3 className='portfolio__project--title'>{title}</h3>
          )}
          {company !== '' && <h6 className='portfolio__project--course'>{company}</h6>}
        </div>
        {/* {link !== '' && (
          <p className='portfolio__project--url'>
            <small>
              <strong> Puedes verlo en: </strong>
              {link}
            </small>
          </p>
        )} */}
        {description !== '' && <p className='portfolio__project--description'>{description}</p>}
        <ul>
          {technologies.length > 0 &&
            technologies.map(technology => (
              <li className='portfolio__project--item'>{technology}</li>
            ))}
        </ul>
      </div>
      <figure className='portfolio__project--image-container'>
        <img className='portfolio__project--image' src={image} alt={title} width={width || '500'} />
      </figure>
    </article>
  );
};

export default PortfolioItem;

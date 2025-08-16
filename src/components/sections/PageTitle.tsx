import React from 'react';
import { Link } from 'react-router-dom';

interface PageTitleProps {
  title: string;
  description: string;
  breadcrumbs: Array<{ name: string; path?: string }>;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, description, breadcrumbs }) => {
  return (
    <div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>{title}</h1>
              <p className="mb-0" style={{whiteSpace: 'pre-line'}}>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className={index === breadcrumbs.length - 1 ? 'current' : ''}>
                {breadcrumb.path ? (
                  <Link to={breadcrumb.path}>{breadcrumb.name}</Link>
                ) : (
                  breadcrumb.name
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default PageTitle; 
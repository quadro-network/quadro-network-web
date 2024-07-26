import Link from "next/link";

const DropdownBtn = () => (
  <div className="dropdown-btn">
    <span className="fas fa-chevron-down" />
  </div>
);
const MultiMenu = () => {
  return (
    <ul className="navigation clearfix">
      <li className="dropdown">
        <a href="/">Home</a>
       
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
      <li>
        <Link target="_blank" href="https://cosmos.directory/">directory</Link>
      </li>
      <li className="dropdown">
        <a href="/projects">projects</a>
        {/* <ul>
          <li>
            <Link href="/projects">project Grid</Link>
          </li>
          <li>
            <Link href="/projects-masonry">projects masonry</Link>
          </li>
          <li>
            <Link href="/project-details">projects details</Link>
          </li>
        </ul> */}
        {/* <DropdownBtn /> */}
      </li>
      <li className="dropdown">
        <a href="#">blog</a>
        <ul>
          {/* <li>
            <Link href="/blog">blog standard</Link>
          </li>
          <li>
            <Link href="/blog-details">blog details</Link>
          </li> */}
        </ul>
        {/* <DropdownBtn /> */}
      </li>
      {/* <li className="dropdown">
        <a href="#">pages</a>
        <ul>
          <li>
            <Link href="/404">Error Page</Link>
          </li>
        </ul>
        <DropdownBtn />
      </li> */}
      <li>
        <Link href="contact">Contact</Link>
      </li>
    </ul>
  );
};
export default MultiMenu;

export const OnePageMenu = () => {
  return (
    <ul className="navigation onepage clearfix">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#about">about</a>
      </li>
      <li>
        <a href="#resume">Resume</a>
      </li>
      <li>
        <a target="_blank" href="https://cosmos.directory/">services</a>
      </li>
 
      <li>
        <a href="#portfolio">projects</a>
      </li>
      <li>
        <a href="#blog">blog</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

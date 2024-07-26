"use client";

import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import axios from "axios";

const ProjectMasonryIsotop = () => {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isInputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/chains`, {
          headers: {
            "x-secret-key": process.env.NEXT_PUBLIC_SECRET_KEY,
          },
        });
        console.log("Fetched projects data:", response.data);
        setProjects(response.data);
        setFilteredProjects(response.data); // Initially show all projects
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        setError("Failed to load projects data.");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (!loading && !error && filteredProjects.length > 0) {
      setTimeout(() => {
        if (isotope.current) {
          isotope.current.destroy();
        }
        isotope.current = new Isotope(".project-masonry-active", {
          itemSelector: ".item",
          percentPosition: true,
          masonry: {
            columnWidth: ".item",
          },
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
      }, 500);
    }
  }, [loading, error, filteredProjects]);

  useEffect(() => {
    if (isotope.current) {
      console.log(`Filtering projects with key: ${filterKey}`);
      isotope.current.arrange({
        filter: filterKey === "*" ? "*" : `.${filterKey}`,
      });
    }
  }, [filterKey]);

  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [searchQuery, projects]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    if (key === "*") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category.toLowerCase() === key.toLowerCase()
      );
      console.log("Filtered projects:", filtered);
      setFilteredProjects(filtered);
    }
  };

  const activeBtn = (value) => (value === filterKey ? "current" : "");

  if (loading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Fragment>
      <ul className="project-filter filter-btns-one justify-content-center pb-35 wow fadeInUp delay-0-2s">
        <li
          className={`c-pointer ${activeBtn("*")}`}
          onClick={handleFilterKeyChange("*")}
        >
        AllNets
        </li>
        <li
          className={`c-pointer ${activeBtn("testnet")}`}
          onClick={handleFilterKeyChange("testnet")}
        >
          TestNets
        </li>
        <li
          className={`c-pointer ${activeBtn("mainnet")}`}
          onClick={handleFilterKeyChange("mainnet")}
        >
          MainNets
        </li>
      </ul>
   <div className="search-container">
        <input
          type="text"
          placeholder={isInputFocused ? '' : 'Search by name...'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
      </div> 

      <div className="row project-masonry-active">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`col-xl-4 col-md-6 item ${project.category.toLowerCase()}`}
          >
            <div
              className={`project-item style-three wow fadeInUp delay-0-${
                index * 2 + 2
              }s`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.name} className="image-filter" />
              </div>
              <div className="project-content">
                <Link legacyBehavior href={project.link}>
                  <a className="project-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <span className="sub-title2">  {project.category}</span>
                <h4>
                  <Link legacyBehavior href={project.link}>
                    <div className="title-project2">{project.name}</div>
                  </Link>
                </h4>
                {project.mini_details && <div className="mini_details">{project.mini_details}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ProjectMasonryIsotop;

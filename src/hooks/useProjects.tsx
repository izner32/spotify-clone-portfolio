import { useEffect, useState } from 'react';

const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('./data/projects.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return projects;
};

export default useProjects;

import useProjects from '@/hooks/useProjects';

import Cards from '@/components/Cards';

function Projects() {
  const projectsData = useProjects();
  return <Cards cardsLimit={0} data={projectsData} type='Projects'></Cards>;
}

export default Projects;

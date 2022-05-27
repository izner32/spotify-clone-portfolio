import useSkills from '@/hooks/useSkills';

import Cards from '@/components/Cards';

function Skills() {
  const skillsData = useSkills();
  return <Cards cardsLimit={0} data={skillsData} type='Skills'></Cards>;
}

export default Skills;

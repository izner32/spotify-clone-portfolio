import useCertifications from '@/hooks/useCertifications';

import Cards from '@/components/Cards';

function Certifications() {
  const certificationsData = useCertifications();
  return (
    <Cards
      cardsLimit={0}
      data={certificationsData}
      type='Certifications'
    ></Cards>
  );
}

export default Certifications;

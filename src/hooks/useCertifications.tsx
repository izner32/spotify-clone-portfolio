import { useEffect, useState } from 'react';

const useCertifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    fetch('./data/certifications.json')
      .then((res) => res.json())
      .then((data) => {
        setCertifications(data);
      });
  }, []);

  return certifications;
};

export default useCertifications;

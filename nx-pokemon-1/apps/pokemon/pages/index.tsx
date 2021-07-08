import React, { useEffect, useState } from 'react';

import styles from './index.module.css';

export function Index() {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  useEffect(() => {
    fetch(`http://localhost:3333/search?q=${search}`)
      .then((resp) => resp.json())
      .then((data) => setPokemon(data));
  }, [search]);

  return <div className={styles.page}></div>;
}

export default Index;

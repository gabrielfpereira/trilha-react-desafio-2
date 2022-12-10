import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <div className='actions'>
          <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
          <a href="#" onClick={handleRemove}  rel="noreferrer" className="remover">Remover</a>
        </div>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;

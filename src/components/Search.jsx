import React from "react"
import styled from "styled-components";



const SearchInput = ({setValue}) => {
  return (
    [   
         <input
        placeholder={'search'}
          type="text"
          onKeyDown={getCity}
          onChange={(e) => setValue(e.target.value)}
        />
    ]

  )
};

export default SearchInput;

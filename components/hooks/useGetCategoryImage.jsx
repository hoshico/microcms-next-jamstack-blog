import React from 'react';

// react typescript などのカテゴリー名が取得できるので
// それをlowercaseに変換してimgをリターンする

export const useGetCategoryImage = (props) => {
  const { category } = props;
  console.log(props)
  //const { blogCategory } = props;
  
  return (
    //{blogCategory ? (<Image w="300px" src={`/${blogCategory.name}.png`} />) : (<Image w="300px" src="/etc.png" />)}
    console.log(category)
  )
}

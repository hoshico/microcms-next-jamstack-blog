import { Image, Stack } from '@chakra-ui/react';
import React from 'react';

// react typescript などのカテゴリー名が取得できるので
// それをlowercaseに変換してimgをリターンする

export const useGetCategoryImage = (props) => {
  const category = props.toLowerCase();
  return (
    <Stack textAlign="center">
      <Image w="300px" src={`/${category}.png`} /> : <Image w="300px" src="/etc.png" />
    </Stack>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import { baseURL, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';

const Banner = ({ purpose, title1, title2, desc1, desc2, imageUrl, buttonText, linkName }) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    { imageUrl ?
      <Image src={imageUrl} width={500} height={300} alt="rentals" /> : ''
    }
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='3xl' fontWeight='bold'>{title1} <br/> {title2}</Text>
      <Text fontSize='lg' paddingTop="3" paddingBottom="3" color='gray.700'>{desc1} <br/> {desc2}</Text>
      <Button fontSize='xl'>
        { linkName ? 
          <Link href={linkName}>{buttonText}</Link>
          : ''
        }
      </Button>
    </Box>
  </Flex>
)

export default function Home({ propertyForRent, propertyForSale }) {
   console.log(propertyForRent, propertyForSale)
  return (
    <Box>
     <Banner 
     purpose={'RENT A HOME'}
     title1={'Rental Homes for'}
     title2={'Everyone'}
     desc1={"Explore Apartments, villas, Homes"}
     desc2={"and more"}
     imageUrl={'https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/rent/021-casa-pi-taller-aragons.jpg'}
     buttonText={'Explore renting'}
     linkName={"/search?purpose=for-rent"}
     />
     <Flex flexWrap='wrap'>
       {propertyForRent?.map((property, id) => <Property key={id} property={property}/>)}
     </Flex>
     <Banner 
     purpose={'BUY A HOME'}
     title1={'Find, Buy & Own Your'}
     title2={'Dream Home'}
     desc1={"Explore Apartments, villas, Homes"}
     desc2={"and more"}
     imageUrl={'https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/rent/CA_AG_DUL_BGA_243.jpg'}
     buttonText={'Explore buy'}
     linkName={"/search?purpose=for-sale"}
     />
      <Flex flexWrap='wrap'>
      {propertyForSale?.map((property, id) => <Property property={property} key={id}/>)}
      </Flex>
    </Box>
  )
}



export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return{
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits
    }
  }
}
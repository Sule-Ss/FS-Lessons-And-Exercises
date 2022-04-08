import React from 'react';
import { Button } from "./button/MyButton";
import Header from "./header/Header";
import Wrapper from "./wrapper/Wrapper";
import Link from "./link/Link"

const StyledComponent = () => {
  return (
   <Wrapper bgColor="bisque">
    <Header baslikRenk="green">Merhaba Cohort-10</Header>
   
   
    <Link href="https://www.clarusway.com" target="_blank" rel="noopener"secondary>
    Clarusway
    </Link>

    <Button renk>Mavi Buton</Button>
    <Button>Mor Buton</Button>
    </Wrapper>
  )
}

export default StyledComponent;
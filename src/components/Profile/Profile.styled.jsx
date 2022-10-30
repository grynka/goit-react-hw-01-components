import styled from "@emotion/styled";

    export const Avatar = styled.img `
    max-height: 100px;
    border-radius: 50%;`;
  
    export const Profiles = styled.div `    
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: ghostwhite;
    margin: 0 auto;
    margin-top: 100px;
    padding-top: 30px;`;

  
    export const Name = styled.p `    
    font-weight: 600;
    margin: 0 15px;`;

    export const Description = styled.div `
    text-align: center;`;

    export const Stats = styled.ul `        
    list-style: none;
    display: inline-flex;
    background-color: lightsteelblue;
    justify-content: space-between;
    padding: 0;
    margin: 0;`;

    
      
    export const StatsLi = styled.li `        
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 33%;
    padding: 10px 0;
    margin: 0;
    border-left: 1px solid white;
    &:first-of-type {
        border-left: none;
      }`;
      
    export const Label = styled.span `        
    font-size: 12px;`;
      
    export const Quantity = styled.span
        `font-size: 20px;`;


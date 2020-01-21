import React from "react"
import styled from "styled-components"

const ColorBook = ({colorsImport, colorsImportName}) => {
    const colorsObj = {...colorsImport}

    const mapColors = Object.keys(colorsObj).map((key,index)=>{
        const colorCode = colorsObj[key]
            return(
            <ColorDiv colorCode={colorCode} key={index}>
                <KeyName >
                {`\$\{${colorsImportName}.${key}\}`}
                </KeyName>
                <ColorName>
                {colorsObj[key]}
                </ColorName>
            </ColorDiv>
            )
    })

    return(
        <Wrapper>
            <HeaderContainer>
            <Header>My ColorBook<span>.</span></Header>
            <Credits>by yarden shalom, check out my portfolio <a href="https://www.yardenshalom.com">👩‍🚀 yardenshalom.com</a></Credits>
            </HeaderContainer>
            <ColorsView>
            {mapColors}
            </ColorsView>
            
        </Wrapper>
    )
}

export default ColorBook

const Wrapper = styled.div`
height: 100vh;
width: 100vw;
background: #0c5b6e;
margin: 0 auto;
display: flex;
flex-direction: column;
`

const HeaderContainer = styled.div`
flex-basis: 7%;
height: 7%;
display: flex;
justify-content: flex-start;
`

const Header = styled.div`
flex-basis: 30%;
height: 100%;
border-radius: 0 0 100px 0;
background: #002129;
color: white;
display: flex;
align-items: center;
font-size: 2rem;
font-family: 'Trebuchet MS', Helvetica, Arial, sans-serif;
padding-left: 10px;

span{
    color:red;
}

@media (max-width:767px) {
    font-size: 0.9rem;
    padding-left: 5px;
}
`
const Credits = styled.div`
flex-basis: 40%;
height: 100%;
display: flex;
align-items: flex-end;
padding-bottom: 10px;
font-size: 0.8rem;
color: white;

a{
    color:white;
    padding-left: 5px;
}

@media (max-width:767px) {
    font-size: 0.5rem;
}
`
const ColorsView = styled.div`
flex-basis: 93%;
height: 93%;
width: 100%;
background: white;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-wrap: wrap;
overflow-y: auto;

    ::-webkit-scrollbar {
  		width: 5px;
	}
	::-webkit-scrollbar-track {
		background-color: darkgray;
	}
	::-webkit-scrollbar-thumb {
  		background-color: #323232;
  		outline: 1px solid slategrey;
	}
`

const ColorDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: space-evenly;
padding: 5px;
height: calc(25% - 10px);
width: calc(25% - 10px);
margin: 5px;
background: ${({colorCode})=>colorCode};
box-shadow: ${({colorCode})=>colorCode};
overflow-y: auto;

@media (max-width:767px) {
    height: calc(50% - 10px);
    width: calc(50% - 10px);
}
`

const KeyName = styled.div`
flex-basis: 15%;
height: 15%;
width: 100%;
text-align: center;
`

const ColorName = styled.div`
flex-basis: 35%;
height: 35%;
width: 100%;
text-align: center;
`
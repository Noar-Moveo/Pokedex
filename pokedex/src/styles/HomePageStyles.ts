import styled from "styled-components";

const mobileBreakpoint = "600px";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  //border: 4px solid blue;
  margin-top: 100px;
  margin-right: 11px;
  width: 100%;

  @media (max-width: 600px) {
    padding: 8px;
    padding-top: 0px;
    margin-top: 0px;
    margin-right: 0px;
    height: 20%;
    /* height: 100vh;
    width: 100vw; */
      //
      border: 4px solid blue;

  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px 26.73px;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 32px 16px;
    //border: 4px solid brown;
    margin: 0px;
  }
`;

export const TopLine = styled.div`
  height: 67px;
  background-color: #020166;
  width: 100%;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: flex-end;
  align-items: center;
  padding: 0 106px 0 20px;
  z-index: 1;
  @media (max-width: ${mobileBreakpoint}) {
    background-color: transparent;
    margin-top: 40px;
    position: absolute;
  }
`;

export const Box = styled.div`
  width: 114px;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const HomeBox = styled(Box)`
  background-color: #94d97e;
  color: black;
  margin-left: 0px;
  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;

export const FavoriteBox = styled(Box)`
  background-color: #020166;
  color: white;
  margin-left: 0px;
  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;

export const BoxText = styled.div`
  font-size: 18px;
  font-weight: bold;
  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;

export const NonClickableBox = styled.div`
  width: 114px;
  height: 67px;
  margin-left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 434px;
  height: 37px;
  border-radius: 9px;
  border: 1px solid #02016680;
  background: #f7f7f9;
  margin: 5px 0;
`;

export const SearchButton = styled.button`
  width: 100%;
  max-width: 87px;
  height: 36px;
  border-radius: 9px;
  background: #373299;
  color: #ffffff;
  cursor: pointer;
  border: none;
  align-self: center;
  margin: 5px 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 0;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const LoadMoreButton = styled.button`
  width: 210px;
  height: 36px;
  margin: 60px auto;
  display: block;
  border-radius: 9px;
  border: 1px solid #373299;
  background-color: #ffffff;
  color: #373299;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 54px;
  position: absolute;
  top: 6px;
  left: 110px;
  opacity: 1;
  @media (max-width: ${mobileBreakpoint}) {
    width: 250px;
    height: 90.44px;
    position: absolute;
    top: 20px;
    //display:grid;
    z-index: 1;
    //border: 4px solid black;
    left: 80px;
  }
`;

// NoticeStyle.jsx
import styled from 'styled-components';

export const NoticeWrapper = styled.div`
    color: black;
    width: 1200px;
    margin: 0px auto;
`

export const Section = styled.section`
  padding: 50px 0;
`

export const PageTitle = styled.div`
  margin-bottom: 30px;
`

export const TitleText = styled.h3`
  margin-top: 10px;  
  margin-left: 10px;
  font-size: 30px;
  color: #333333;
  font-weight: bold; 
`

export const BoardSearchArea = styled.div`
  justify-content: flex-end;
  padding: 15px 0;
`

export const SearchWindow = styled.div`
  justify-content: flex-end;
  padding: 15px 0;
  background-color: #FFFAE0;
`


export const SearchWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-left: 770px;
  width: 100%;
  max-width: 350px;
  align-items: center; /* 수직 가운데 정렬을 위해 추가 */
`

export const SearchButton = styled.button`
  position: absolute; /* 수정된 부분 */
  right: 10px; /* 수정된 부분 */
  height: 40px;
  width: 100px;
  padding: 0;
  font-size: 15px;
  font-weight: 400;
  background: transparent;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  text-transform: uppercase;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 30px;
  transition: all 0.3s;

  &.btn-dark {
    background: #555;
    color: #fff;

    &:hover,
    &:focus {
      background: #373737;
      border-color: #373737;
      color: #fff;
    }
  }
`

export const SearchInput = styled.input`
  height: 40px;
  font-size: 14px;
  padding: 7px 14px;
  border: 2px solid #111;
  flex: 1;
  border-radius: 15px;
  background: #fff;

  &:focus {
    border-color: #111;
    outline: 0;
    border-width: 1px;
    border-radius: 25px;
  }

  /* New style for SVG icon */
  & + svg {
    margin-left: -35px; /* Adjust the margin as needed */
    cursor: pointer;
    fill: #000; /* Adjust the color as needed */
    height: 20px;

  }`
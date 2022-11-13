import styled from "styled-components";

export const Anchor = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit:cover;
  height: 75px;
  width: 75px;
`

export const List = styled.ul`
  display: flex;
  overflow:scroll;
  width: 100%;
  list-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Item = styled.li`
  padding: 0 8px;
`

export const PhotoCardImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding:56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const PhotoCardImg = styled.img`
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const PhotoCardButton = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 4px;
  }
`

export const Svg = styled.svg`
  width: 200px;
  margin-left: -10px;
  margin-top: -30px;
`
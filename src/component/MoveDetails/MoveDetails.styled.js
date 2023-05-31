import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`

font-size: 12px;
text-transform: uppercase;
color: black;
transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
&:hover, :focus{
    color: orange;
}
`
export const Section = styled.section`
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`
export const ButtonBack = styled.button`
background-color: #fff;
display: flex;
align-items: center;

padding: 4px 8px;
border: 1px solid black;
border-radius: 0.2rem;
gap: 3px;
margin: 10px 0;
`
export const FilmCard = styled.div`
display: flex;
gap: 20px;
`

export const FilmPoster = styled.img`
flex-basis: 50%;
width: 100%;
overflow: hidden;
height: 100%;
object-fit: cover;
`
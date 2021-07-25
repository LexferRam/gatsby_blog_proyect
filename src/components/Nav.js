import React from 'react';
import {useStaticQuery, Link, graphql} from "gatsby"
import { NavWrapper } from '../elements/NavElements';

export const Nav = () => {

    const data = useStaticQuery(graphql`
        query{
            logo: file(relativePath: {eq:"logo.jpg"}){
                publicURL
            }
        }
    `)

    return(
        <NavWrapper>
            <Link to="/">
                <img src={data.logo.publicURL} alt="My Logo" />
            </Link>
        </NavWrapper>
    )
}
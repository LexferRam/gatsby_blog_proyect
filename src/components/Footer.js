import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import {FooterWrapper,FooterSocialWrapper,FooterSocialIcons,P} from "../elements"

export const Footer = () => {
    const data = useStaticQuery(graphql`
        query{
            facebook:file(relativePath:{eq: "logoFacebook.svg"}){
                publicURL
            }
            linkedin:file(relativePath:{eq: "logoLinkedin.svg"}){
                publicURL
            }
            instagram:file(relativePath:{eq: "logoInstagram.svg"}){
                publicURL
            }
            twitter:file(relativePath:{eq: "logoTwitter.svg"}){
                publicURL
            }
        }
    `)
    return(
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a href="https://facebook.com" target="_blank">
                        <img src={data.facebook.publicURL} alt="facebook" />
                    </a>
                    <a href="https://linkedin.com" target="_blank">
                        <img src={data.linkedin.publicURL} alt="linkedin" />
                    </a> 
                    <a href="https://instagram.com" target="_blank">
                        <img src={data.instagram.publicURL} alt="instagram" />
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <img src={data.twitter.publicURL} alt="twitter" />
                    </a>
                </FooterSocialIcons>
                <P size="xSmall" color="dark3">@ 2021 Company.All right reserved.</P>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}
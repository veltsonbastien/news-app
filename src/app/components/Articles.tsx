import React, {useEffect, useState} from "react";
import {getArticles} from "../firebase";
import styled from "styled-components";

const ArticleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px;
    padding: 15px;
    border-radius: 1rem;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
    width: 27.5%;

      &:hover {
        transform: scale(1.01);
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.7);
        transition: all 0.2s ease-in-out;
      }

      @media (max-width: 768px) {
        width: 100%;
      }
  `;

export const Articles = () => {
    const [articles, setArticles] = useState<any>();

    const fetchArticles = async () => {
        try {
            const articlesResult = await getArticles()
            if(articlesResult) setArticles(articlesResult)
        } catch (e) {
            console.log("error fetching articles with getArticles(): ", e)
        }
    }

    useEffect(()=>{
        fetchArticles()
    },[]);

    if (!articles) {
        return <div>Loading articles...</div>;
    } else {
        return (
            <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", color: "#222"}}>
                {articles.map((article: any) => (
                    <ArticleDiv key={article.id}>
                        <a href = {article.url} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                            <img src={article.image} alt={`Unable to load at: ${article.image}`} style={{width: "100%", maxWidth: "500px", borderRadius: "1rem"}} />
                            <h2>{article.title}</h2>
                            <p>{article.desc}</p>
                        </a>
                    </ArticleDiv>
                ))}
            </div>
        );
    }
}
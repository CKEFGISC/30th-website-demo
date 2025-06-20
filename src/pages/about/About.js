import React from "react";

import "./About.scss";

import Loading from "../../utils/Loading";
import Markdown from "../../utils/Remarkable";

import contentPath from "../../about/about.md";

export default function About() {
    const [ text, setText ] = React.useState();

    React.useEffect(() => {
        fetch(contentPath)
            .then(response => response.text())
            .then(textContent => setText(textContent));
    }
    , []);

    return (<>
        <section id="title-bar">
            <span>
                關於我們
            </span>
        </section>
        <section id="about">
            <div className="container">
                <div className="text-paragraph">
                    {text ? (
                        <Markdown content={text} />
                    ) : (
                        <Loading />
                    )}
                </div>
            </div>
        </section>
    </>)
}
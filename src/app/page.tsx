'use client';

import Image from "next/image";
import "./styles/globals.css";
import "./styles/page.css";
import React from "react";

export default function Home() {
    var removeTag = (tag: any) => {
        changeSelectedTags(selectedTags.filter((x) => { return x !== tag }));
    }

    var selectTag = (tag: any) => {
        let a = selectedTags;
        a.push(tag);
        changeSelectedTags(a);
        changeTagQuery("");
    }

    var [tagLibrary, changeTagLibrary] = React.useState(['Lorem', 'ipsum,', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit.', 'Omnis', 'corporis', 'est', 'amet', 'obcaecati,', 'corrupti', 'inventore', 'et.', 'Obcaecati', 'nihil,', 'accusantium', 'itaque', 'necessitatibus', 'placeat', 'nostrum,', 'enim', 'quaerat', 'expedita', 'voluptatem,', 'totam', 'repellat', 'corrupti?']);
    var [selectedTags, changeSelectedTags] = React.useState<Array<String>>([]);

    var [tagQuery, changeTagQuery] = React.useState("");

    return (
        <main className="parent">
            <div id="top-bar">
                <h3>
                    assignment-bounty
                </h3>
                <div>
                    <h4 id="balance">
                        RM3.00
                    </h4>
                    <h4 id="username">
                        ajian_nedo
                    </h4>
                    <Image src="/profile.png" alt="profile" width={500} height={500} />
                </div>
            </div>
            <div id="search-query">
                <input id="search" placeholder="search" />
                <hr/>
                <div id="tag-section">
                    <div id="selection-section">
                        <input onChange={(e) => { changeTagQuery(e.target.value); }} value={tagQuery} id="search" placeholder="search for tags..." />
                        <div>
                            <div id="selection-container">
                                {
                                    tagLibrary.filter((e) => { return e.includes(tagQuery); }).filter((e) => { return !selectedTags.includes(e); }).map((e) => {
                                        return (
                                            <h4 className="tag" onClick={() => { selectTag(e); }}>
                                                {e}
                                            </h4>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div id="container">
                        {
                            selectedTags.map((e) => {
                                return (
                                    <div className="tag" onClick={() => { removeTag(e) }}>
                                        <h4>
                                            {e}
                                        </h4>
                                        <h4>
                                            X
                                        </h4>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div id="collection">
                <div className="item">
                    <Image id="thumbnail" src="/bounties/bounty1.png" alt="" height={500} width={500} />
                    <div id="details">
                        <div id="detailChildren">
                            <div>
                                <h3 id="title">
                                    Second derivatives
                                </h3>
                                <div id="tags">
                                    <h4 className="item-tag">
                                        Vector Math
                                    </h4>
                                    <h4 className="item-tag">
                                        Computer Science
                                    </h4>
                                </div>
                            </div>
                            <div id="footer">
                                <div>
                                    <h4 id="date">
                                        3d ago • 
                                    </h4>
                                    <h4 id="status" data-status="completed">
                                        completed
                                    </h4>
                                </div>
                                <h4 id="bounty">
                                    RM5.00
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <Image id="thumbnail" src="/bounties/bounty1.png" alt="" height={500} width={500} />
                    <div id="details">
                        <div>
                            <div>
                                <h3 id="title">
                                    Second derivatives
                                </h3>
                                <div id="tags">
                                    <h4 className="item-tag">
                                        Vector Math
                                    </h4>
                                    <h4 className="item-tag">
                                        Computer Science
                                    </h4>
                                </div>
                            </div>
                            <div id="footer">
                                <div>
                                    <h4 id="date">
                                        3d ago • 
                                    </h4>
                                    <h4 id="status" data-status="completed">
                                        completed
                                    </h4>
                                </div>
                                <h4 id="bounty">
                                    RM5.00
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <Image id="thumbnail" src="/bounties/bounty1.png" alt="" height={500} width={500} />
                    <div id="details">
                        <div>
                            <div>
                                <h3 id="title">
                                    Second derivatives
                                </h3>
                                <div id="tags">
                                    <h4 className="item-tag">
                                        Vector Math
                                    </h4>
                                    <h4 className="item-tag">
                                        Computer Science
                                    </h4>
                                </div>
                            </div>
                            <div id="footer">
                                <div>
                                    <h4 id="date">
                                        3d ago • 
                                    </h4>
                                    <h4 id="status" data-status="completed">
                                        completed
                                    </h4>
                                </div>
                                <h4 id="bounty">
                                    RM5.00
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <Image id="thumbnail" src="/bounties/bounty1.png" alt="" height={500} width={500} />
                    <div id="details">
                        <div>
                            <div>
                                <h3 id="title">
                                    Second derivatives
                                </h3>
                                <div id="tags">
                                    <h4 className="item-tag">
                                        Vector Math
                                    </h4>
                                    <h4 className="item-tag">
                                        Computer Science
                                    </h4>
                                </div>
                            </div>
                            <div id="footer">
                                <div>
                                    <h4 id="date">
                                        3d ago • 
                                    </h4>
                                    <h4 id="status" data-status="completed">
                                        completed
                                    </h4>
                                </div>
                                <h4 id="bounty">
                                    RM5.00
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <Image id="thumbnail" src="/bounties/bounty1.png" alt="" height={500} width={500} />
                    <div id="details">
                        <div>
                            <div>
                                <h3 id="title">
                                    Second derivatives
                                </h3>
                                <div id="tags">
                                    <h4 className="item-tag">
                                        Vector Math
                                    </h4>
                                    <h4 className="item-tag">
                                        Computer Science
                                    </h4>
                                </div>
                            </div>
                            <div id="footer">
                                <div>
                                    <h4 id="date">
                                        3d ago • 
                                    </h4>
                                    <h4 id="status" data-status="completed">
                                        completed
                                    </h4>
                                </div>
                                <h4 id="bounty">
                                    RM5.00
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
    // return (
    //     <main className={styles.main}>
    //         <div className={styles.center}>
    //             <Image
    //                 className={styles.logo}
    //                 src="/next.svg"
    //                 alt="Next.js Logo"
    //                 width={180}
    //                 height={37}
    //                 priority
    //             />
    //         </div>

    //         <div className={styles.grid}>
    //             <a
    //                 href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //                 className={styles.card}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //             >
    //                 <h2>
    //                     Docs <span>-&gt;</span>
    //                 </h2>
    //                 <p>Find in-depth information about Next.js features and API.</p>
    //             </a>

    //             <a
    //                 href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //                 className={styles.card}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //             >
    //                 <h2>
    //                     Learn <span>-&gt;</span>
    //                 </h2>
    //                 <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //             </a>

    //             <a
    //                 href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //                 className={styles.card}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //             >
    //                 <h2>
    //                     Templates <span>-&gt;</span>
    //                 </h2>
    //                 <p>Explore starter templates for Next.js.</p>
    //             </a>

    //             <a
    //                 href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //                 className={styles.card}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //             >
    //                 <h2>
    //                     Deploy <span>-&gt;</span>
    //                 </h2>
    //                 <p>
    //                     Instantly deploy your Next.js site to a shareable URL with Vercel.
    //                 </p>
    //             </a>
    //         </div>
    //     </main>
    // );
}

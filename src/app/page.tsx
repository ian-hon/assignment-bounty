'use client';

import Image from "next/image";
import "./styles/globals.css";
import "./styles/page.css";
import React from "react";

const currencyFormatter = Intl.NumberFormat(
    'en-US', {
        style:'currency',
        currency:'MYR'
    }
);

export class BountyData {
    title: string;
    tags: Array<string>;
    status: string;
    bounty: number;

    constructor(title: string, tags: Array<string>, status: string, bounty: number) {
        this.title = title;
        this.tags = tags;
        this.status = status;
        this.bounty = bounty;
    }
}

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

    var [assigmentCollection, changeAssignmentCollection] = React.useState<Array<BountyData>>([
        new BountyData("assignment one", ["f1", "f2"], "completed", 100),
        new BountyData("assignment two", ["f1", "f2"], "completed", 100),
        new BountyData("yet another assignment", ["f1", "f2"], "completed", 100),
        new BountyData("lorem ipsum", ["f1", "f2"], "completed", 100),
        new BountyData("lorem ipsum", ["f1", "f2"], "completed", 100),
    ]);

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
                {
                    assigmentCollection.map((e) => {
                        return (
                            <div className="item">
                                <Image id="thumbnail" src="/bounties/bounty1.png" alt="" height={500} width={500} />
                                <div id="details">
                                    <div id="detailChildren">
                                        <div>
                                            <h3 id="title">
                                                {e.title}
                                            </h3>
                                            <div id="tags">
                                                {
                                                    e.tags.map((t) => {
                                                        return (<h4 className="item-tag">
                                                            {t}
                                                        </h4>);
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div id="footer">
                                            <div>
                                                <h4 id="date">
                                                    3d ago • 
                                                </h4>
                                                <h4 id="status" data-status="completed">
                                                    {e.status}
                                                </h4>
                                            </div>
                                            <h4 id="bounty">
                                                {currencyFormatter.format(e.bounty)}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </main>
    );
}

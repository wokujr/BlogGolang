import Heading from "@/components/heading/heading";
import {featureData} from "@/data";
import FeaturedCard from "@/components/cards/featured-card";
import ExpandableFeatured from "@/components/expandables/expandable-featured";
import {useState} from "react";

const mainFeatured = featureData[0]

export default function FeaturedSection() {
    return (
        <>
            <div className="pt-24 px-3 lg:px-8">

                {/*Heading*/}
                <Heading number={"01"} title_1={"featured"} title_2={"works"}/>

                {/*Body*/}
                <FeaturedCard
                    title={mainFeatured.title}
                    video={mainFeatured.video}
                    tag={mainFeatured.tag}
                    active={true}
                />

                <div className="mt-24">
                    <ExpandableFeatured/>
                </div>

            </div>
        </>
    );
};
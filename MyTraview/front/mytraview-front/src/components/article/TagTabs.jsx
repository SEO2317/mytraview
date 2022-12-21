import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import ListTable from './ListTable';
import ListTable2 from './ListTable2';

const TagTabs = () => {
    const data = [
        //숙박, 먹거리, 교통, 관광지, 레저, 테마별 코스
        {
            label: "숙박",
            value: "숙박",
            desc: `숙박`,
        },
        {
            label: "먹거리",
            value: "먹거리",
            desc: `먹거리`,
        },

        {
            label: "교통",
            value: "교통",
            desc: `교통`,
        },

        {
            label: "관광지",
            value: "관광지",
            desc: `관광지`,
        },

        {
            label: "레저",
            value: "레저",
            desc: `레저`,
        },

        {
            label: "테마별 코스",
            value: "테마별 코스",
            desc: `테마별 코스`,
        },

        {
            label: "전체",
            value: "전체",
            desc: `전체`,
        },
    ];

    function headerOnClick(label) {
        console.log(label);
        if (label === '전체') {
            fetch(`http://localhost:8100/article`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            }
            )
            .catch(error => console.error(error))
        } else {
            fetch(`http://localhost:8100/article/list/${label}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            }
            )
            .catch(error => console.error(error))
        }
        
    }

    return (
        <Tabs value="html">
            <TabsHeader>
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value} onClick={() => {headerOnClick(label)}}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        <ListTable2 tag={desc}/>
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}

export default TagTabs
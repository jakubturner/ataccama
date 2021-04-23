import React, {useState} from 'react';
import CollapsibleTable from "./components/colaps-table/collaps-table.components";
import MyTable from './components/table/table.component'
import HeaderTable from './components/colaps-table/collaps-table.components'

import data from './data/data.json'

type mainData = {}

const App = () => {

    const [mainData, setMainData] = useState<mainData[]>(data) //Data Loading from Json and saving into state

    return (<>
            <div>Ataccama Task</div>
            {/*<MyTable rows={data}/>*/}
            {/*    <HeaderTable rows={data}/>*/}
            <CollapsibleTable rows={data}/>
        </>
    );
}

export default App;

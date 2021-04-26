import React, {useState} from 'react';
import CollapsibleTable from "./components/colaps-table/collaps-table.components";
import MyTable from './components/table/table.component'
import HeaderTable from './components/colaps-table/collaps-table.components'

import data from './data/data.json'

// TODO: udelat separe fc removeRow
// TODO: napsat funkci ktera smaze cely radek

const App = () => {

    //TODO: rozchodit state a poslat do collTable

    const [mainData, setMainData] = useState(data) //Data Loading from Json and saving into state

    return (<>
            <CollapsibleTable rows={mainData}/>
        </>
    );
}

export default App;

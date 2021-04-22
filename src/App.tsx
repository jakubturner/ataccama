import React, {useState} from 'react';
import MyTable from './components/table/table.component'
import data from './data/data.json'

type mainData = {}

const App = () => {

    const [mainData, setMainData] = useState<mainData[]>(data) //Data Loading from Json and saving into state

    return ( <>
        <div>Ataccama Task</div>
        <MyTable rows={data}/>
        </>
    );
}

export default App;

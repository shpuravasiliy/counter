import React from 'react';
import './App.css';
import {CommonCounterComponent} from './components/CommonCounter/CommonCounterComponent';

function App() {

    // const [value, setValue] = useState<number>(0);
    // useEffect(() => {
    //     let newValueAsString = localStorage.getItem('counterKey');
    //     if (newValueAsString) {
    //         let newValue = JSON.parse(newValueAsString);
    //         setValue(newValue);
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('counterKey', JSON.stringify(value));
    // }, [value])
    // const incHandler = () => {
    //     setValue(value + 1);
    // }
    // const setToLocalStorage = () => {
    //     localStorage.setItem('counterKey', JSON.stringify(value));
    // }
    // const getFromLocalStorage = () => {
    //
    // }
    //
    // const clearLocalStorage = () => {
    //     localStorage.clear();
    //     setValue(0);
    // }
    //
    // const removeItemFromLocalStorage = () => {
    //     localStorage.removeItem('counterKey');
    // }

    return (
        <div className="App">
            <CommonCounterComponent/>
            {/*<SetCounterComponent*/}
            {/*    setNewMaxValue={}*/}
            {/*    setNewStartValue={}*/}
            {/*    sendError={}*/}
            {/*/>*/}
            {/*<h1>{value}</h1>*/}
            {/*<MyButton*/}
            {/*    onClick={incHandler}*/}
            {/*    children={'inc'}*/}
            {/*/>*/}
            {/*<MyButton*/}
            {/*    onClick={setToLocalStorage}*/}
            {/*    children={'setToLocalStorage'}*/}
            {/*/>*/}
            {/*<MyButton*/}
            {/*    onClick={getFromLocalStorage}*/}
            {/*    children={'getFromLocalStorage'}*/}
            {/*/>*/}
            {/*<MyButton*/}
            {/*    onClick={clearLocalStorage}*/}
            {/*    children={'clearLocalStorage'}*/}
            {/*/>*/}
            {/*<MyButton*/}
            {/*    onClick={removeItemFromLocalStorage}*/}
            {/*    children={'removeItemFromLocalStorage'}*/}
            {/*/>*/}
        </div>
    );
}

export default App;

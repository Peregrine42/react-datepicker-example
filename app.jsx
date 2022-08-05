import DatePicker from "react-datepicker";
import { subDays, addDays } from "date-fns";
import * as ReactDOM from "react-dom/client";
import React, { useState } from "react";

const DateFunctionalComponent = () => {
    const [startDate, setStartDate] = useState(null);
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            includeDateIntervals={[
                {
                    start: subDays(new Date(), 5),
                    end: addDays(new Date(), 5)
                },
            ]}
        />
    );
};

class App extends React.Component {
    render() {
        return (
            <div>
                Hello, world!
                <DateFunctionalComponent></DateFunctionalComponent>
            </div>
        )
    }
}

window.addEventListener("load", () => {
    const root = ReactDOM.createRoot(
        document.getElementById("container")
    );

    root.render(<App/>);
});

import React, { useContext, useEffect, useState } from "react";
import { ItemsContext } from "../AdminPanel";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  Resources,
  ViewSwitcher,
  DayView,
  WeekView,
  DragDropProvider,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import "./styles.css";
import { Card, Paper } from "@material-ui/core";
import DragappleCard from "../DragappleCard";
import { render } from "@testing-library/react";

const DayScaleCell = (props) => (
  <MonthView.DayScaleCell
    {...props}
    style={{ textAlign: "center", fontWeight: "bold" }}
  />
);

const AdminCalendar = () => {
  let [itemsFromBackend, setItemsFromBackend] = useContext(ItemsContext);
  // console.log(columnsFromBackend);
  const [data, setData] = useState(itemsFromBackend);

  const commitChanges = ({ added, changed, deleted }) => {
    if (added) {
      const startingAddedId =
        data.length > 0 ? data[data.length - 1].id + 1 : 0;
      setData([...data, { id: startingAddedId, ...added }]);
    }
    if (changed) {
      setData(
        data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        )
      );
    }
    if (deleted !== undefined) {
      setData(data.filter((appointment) => appointment.id !== deleted));
    }
    return { data };
  };
  const dataCard = (e) => {
    console.log(e);
    return(
      <>
      <DragappleCard item={e.data} isEdit={false} />

      </>
    )
    
  };
  return (
    <Paper>
      <Scheduler data={data}>
        <ViewState
          defaultCurrentDate="2021-07-17"
          defaultCurrentViewName="Month"
        />

        <MonthView dayScaleCellComponent={DayScaleCell} />
        <DayView />
        <WeekView startDayHour={10} endDayHour={19} />
        <EditingState onCommitChanges={commitChanges} />
        <Appointments appointmentComponent={(e)=>dataCard(e)}/>

        <Toolbar />
        <ViewSwitcher />
        <DateNavigator />
        <TodayButton />
        <EditRecurrenceMenu />
        <AppointmentTooltip showCloseButton showDeleteButton showOpenButton />
        <DragDropProvider />
      </Scheduler>
    </Paper>
  );
};
export default AdminCalendar;

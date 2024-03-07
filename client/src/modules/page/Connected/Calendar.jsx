import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/fr'; // Importez la localisation française

moment.locale('fr'); // Configurez moment pour utiliser la localisation française

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Événement 1',
    start: new Date(),
    end: new Date(),
  },
  // Ajoutez d'autres événements selon vos besoins
];

const MonCalendrier = () => {
  const formats = {
    dateFormat: 'DD',
    dayFormat: 'dddd DD MMM',
    dayHeaderFormat: 'dddd DD MMM',
    dayRangeHeaderFormat: ({ start, end }) => {
      const startDate = moment(start).format('DD MMM');
      const endDate = moment(end).format('DD MMM');
      return `${startDate} - ${endDate}`;
    },
    monthHeaderFormat: 'MMMM YYYY',
    timeGutterFormat: 'HH:mm',
    monthDayFormat: 'DD MMM',
  };

  const messages = {
    allDay: 'Toute la journée',
    previous: 'Précédent',
    next: 'Suivant',
    today: 'Aujourd\'hui',
    month: 'Mois',
    week: 'Semaine',
    day: 'Jour',
    agenda: 'Agenda',
    date: 'Date',
    time: 'Heure',
    event: 'Événement',
  };

  return (
    <div>
     
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        formats={formats}
        messages={messages}
      />
    </div>
  );
};

export default MonCalendrier;

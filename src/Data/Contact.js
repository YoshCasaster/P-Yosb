import {  MdLocationOn   } from "react-icons/md";
import { FaCalendar} from "react-icons/fa";
import { GiCardAceHearts } from "react-icons/gi";
import { RxHobbyKnife } from "react-icons/rx";


const contact = [
    {
      title: 'Date of birth',
      value: '************',
      dateTime: '2002-10-06',
      icon: <FaCalendar  size={25}/>
    },
    {
      title: 'Address',
      value: 'Semarang, Indonesia',
      icon: <MdLocationOn size={25}/>
    },
    {
      title: 'Hobby',
      value: 'Games',
      icon: <RxHobbyKnife size={25}/>
    },
    {
      title: 'Motivation',
      value: 'Provoco te',
      icon: <GiCardAceHearts size={25}/>
    }
  ];

  export default contact;
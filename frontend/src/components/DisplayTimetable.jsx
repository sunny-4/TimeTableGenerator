import React from 'react'
import './DisplayTimetable.css'

const DisplayTimetable = ({Timetable}) => {
    if(!Timetable){
        return <div className='beforeselect'>Select courses and click generate to view Timetable</div>
    }
  return (
    <div className='timetable'>
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
            </tr>
        </thead>
        <tbody>
        {
            Object.keys(Timetable["M"]).map((time)=>(
                <tr key={time}>
                    <td>{time}</td>
                    {
                        Object.keys(Timetable).map((day)=>(
                            <td key={day}>
                                {
                                    Timetable[day][time].map((courseid)=>(
                                        <div key={courseid}>{courseid}</div> 
                                    ))
                                }
                            </td>
                            
                        ))
                    }
                </tr>
            ))
        }

        </tbody>
    </table>
    </div>
  )
}

export default DisplayTimetable

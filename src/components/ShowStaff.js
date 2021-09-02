import './ShowStaff.css';
import dateFormat from 'dateformat'; 

function ShowStaff(props) {

    let staff = props.item;

    const onCancelShowStaff = () =>{
        props.onCancelStaff(null);
    }

    return(
        <div className="box-show-staff mt-2 mb-2 text-white">
            <h4 className="text-center">Họ và tên: {staff.name}</h4>
            <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
            <p>ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
            <p>Phòng ban: {staff.department.name}</p>
            <p>Số ngày nghĩ còn lại: {staff.annualLeave}</p>
            <p>Số ngày đã làm thêm: {staff.overTime}</p>
            <button onClick={onCancelShowStaff}>Cancel</button>
        </div>
    )
}

export default ShowStaff;
import StaffItem from './StaffItem';
import './StaffList.css';

function StaffList(props) {

    let staffs = props.items;

    return(
        <div className={`row row-cols-1 row-cols-sm-2  ${props.selectedNumberEl}  text-white`}>
            {
                staffs.map( staff => (
                    <StaffItem item={staff} key={staff.id} onShowStaff={props.onShowStaff} />
                ) )
            }
        </div>
    )
}

export default StaffList;
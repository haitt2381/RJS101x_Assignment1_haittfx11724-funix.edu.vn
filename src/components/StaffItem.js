function StaffItem(props) {

    let staff = props.item;

    const onShowStaff = () => {
        props.onShowStaff(staff);
    }

    return(
        <div className="staff-item col" onClick={onShowStaff}>
            <h4 className="text-center">{staff.name}</h4>  
        </div>
    )
}

export default StaffItem;
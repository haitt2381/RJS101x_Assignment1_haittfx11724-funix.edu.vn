import './NavStaff.css';

function NavStaff(props) {

    const onChangeSelected = (event) =>{
        props.onChangeSelected(event.target.value);
    }

    return(
        <div className="nav row"> 
            <h2 className="col-12 col-md-10">Ứng dụng quản lí nhân sự v1.0</h2>
            <select className="col-2" onChange={onChangeSelected} value={props.selectedNumberEl}>
                <option value="row-cols-md-2" > Số lượng hiển thị: 2</option>
                <option value="row-cols-md-3" > Số lượng hiển thị: 3</option>
                <option value="row-cols-md-4" > Số lượng hiển thị: 4</option>
                <option value="row-cols-md-5" > Số lượng hiển thị: 5</option>
            </select>
        </div>
    )
}
export default NavStaff;
import React from "react";
import data from "../Home/data"
import "./Main.css"

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data,
            select:"",
        }
    }
    render(){
        const onEdit=(e)=>{
            console.log(e);
        }

        return(
        <div className="wrapper">
            <h1 className="title">Editable Table Sample</h1>
            <div className="tableContainer">
            <table className="table" border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Education</th>
                        <th>Score</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((value)=>{
                        return <tr key={value.id}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.education}</td>
                        <td>{value.score}</td>
                        <td><button onClick={()=>onEdit(value.id)} className="btn">Edit</button></td>
                    </tr>
                    })}
                </tbody>
            </table>
            </div>
        </div>
            
        )
    }
}
export default Main;
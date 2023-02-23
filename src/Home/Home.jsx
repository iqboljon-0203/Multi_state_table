import React from "react";
import data from "./data"
import "./Home.css"
import down from "./img/down-arrow.png";
import up from './img/up-arrow.png';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data,
            select:"",
        }
    }
    render(){
        ///delete
        const onDelete=(id)=>{
            console.log(id);
            let res=this.state.data.filter((value)=>value.id!==id);
            this.setState({data:res})
        }
        // /////sort
        const onFilter=({target:{value:inputValue}})=>{
            let sl=this.state.select;
            let res=data.filter((value)=>value[sl].toLowerCase().includes(inputValue.toLowerCase()))
            this.setState({data:res})
        }
        const selectValue=({target:{value}})=>{
            this.setState({select:value})
        }
        ////
        const sortDown=(e)=>{
            e.preventDefault();
            console.log(e);
            console.log(data);
            let res=data.sort((a,b)=>Number(a.score)-Number(b.score))
            this.setState({data:res})
        }
        ///
        const sortUp=(e)=>{
            e.preventDefault();
            console.log(e);
            let res=data.sort((a,b)=>Number(b.score)-Number(a.score))
            this.setState({data:res})
        }


        // const onFilterEdu=({target:{value:inputValue}})=>{
        //     let res=data.filter((value)=>value.education?.toLowerCase().includes(inputValue.toLowerCase()))
        //     this.setState({data:res})
        // }
        
        return(
        <div className="wrapper">
            <h1 className="title">Multi State Task with Table</h1>
            <form className="form" action="">
                <label htmlFor=""><div>Filter with selectedValue:</div>
                    <input onChange={onFilter} type="text"  placeholder="name"/>
                </label>
                <select onChange={selectValue} name="" id="">
                    <option value="name">Name</option>
                    <option value="education">Education</option>
                </select>
                <img src="./img/down-arrow.png" alt="" />
                <button><img onClick={sortDown} width={20} src={down} alt="" /></button>
                <button><img onClick={sortUp} width={20} src={up} alt="" /></button>

            </form>
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
                        <td><button onClick={()=>onDelete(value.id)} className="btn">Delete</button></td>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
            
        )
    }
}
export default Home;
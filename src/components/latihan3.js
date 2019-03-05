import { connect } from 'react-redux'
import { hitungKata } from './../1.actions'
import React from 'react'

class Latihan3 extends React.Component{
    state = {toDo : []}

    renderState = () => {
        var jsx = this.state.toDo.map((val,index) => {
            return(
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{val}</td>
                </tr>
            )
        })
        return jsx
    }

    handleBtnAdd = () => {
        var todo = this.refs.todo.value
        this.setState({toDo:[...this.state.toDo , todo]})
        this.refs.todo.value = ''
        this.props.hitungKata(this.state.toDo.length + 1)
    }
    handleHapusAll= () => {
        this.setState({toDo : []})
        this.props.hitungKata(0)
    }
    hapusAllBtnRender = () => {
        if(this.state.toDo.length > 0){
            return <input type="button" className="btn btn-default border-primary" value='Hapus All' onClick={this.handleHapusAll} />
        }
    }
    render(){
        return(
            <div style={{marginTop:'40px'}}>
                <div className='row'>
                    <div className='col-md-4'>
                        <input type="text" className="form-control" placeholder="What will you do?" ref='todo' />
                    </div>
                    <div className = 'col-md-2'>
                        <input type="button" className="btn btn-default border-primary" value='Add' onClick={this.handleBtnAdd} />
                    </div>
                    <div className='col-md-4'>
                        <table class="table table-hover">
                        <tbody>
                            
                           {this.renderState()}
                         
                        </tbody>
                        </table>
                            {this.hapusAllBtnRender()}

                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{hitungKata})(Latihan3);
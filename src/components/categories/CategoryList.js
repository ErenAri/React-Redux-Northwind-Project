import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as categoryActions from '../../redux/actions/categoryActions'
import {ListGroup,ListGroupItem} from "reactstrap"
import {Badge} from 'reactstrap'

class CategoryList extends Component {
    componentDidMount(){
        this.props.actions.getCategories()
    }

    selectCategory=(category)=>{
        this.props.actions.changeCategory(category);
    }

    render() {
        return (
            <div>
               <h3>
                   <Badge color="warning">
                    Categories
                    </Badge></h3> 
               <ListGroup>
                       {this.props.categories.map(category=>(
                           <ListGroupItem active={category.id===this.props.currentCategory.id} onClick={()=> this.props.actions.changeCategory(category)} key={category.id}>
                               {
                                   category.category.categoryName
                               }
                           </ListGroupItem>
                       ))}
               </ListGroup>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        currentCategory:state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispactch){
    return{
        actions:{
            getCategories:bindActionCreators(categoryActions.getCategories),
            changeCategory:bindActionCreators(categoryActions.changeCategory, dispactch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)

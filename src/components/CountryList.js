import React from 'react';
import '../App.css';
 import { connect } from 'react-redux';
import { fetchPosts } from '../actions'; 



 class CountryList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  
  renderList() {
    console.log(this.props.posts);
  if(this.props.posts.length>0){

    return this.props.posts.map(post => {

    
  console.log(post);
      return post.allContinentHierarchy.map(cont => {
        console.log(cont);

        return cont.children.map(child => {
      return (
              
             <ul className ="listul">
               <li id={child.id}>
               {child.name}
               </li>
             </ul>

              
              
           
      );
    });


    });

    });
  }
  
  }

 

 
    render() {
      return <div>{this.renderList()}</div>;
    }


  
}


const mapStateToProps = state => {
  return { posts: state.posts };
};


export default connect(
  mapStateToProps,
  { fetchPosts }
)(CountryList);
 

  
  
  
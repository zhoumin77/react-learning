import React from 'react'
import { NavLink, useHistory,useLocation,useRouteMatch,useParams} from 'react-router-dom';
import data from '../data'

const pageLen = 3;
const len = Math.ceil(data.length / pageLen)
export default function Class(props) {
  // console.log('class props', props);
  return (
    <div>
      <List {...props}></List>
      <ClassNav {...props} />
    </div>
  )
}

function ClassNav(props) {
  // console.log('ClassNav props', props);
  return (
    <nav className="page-nav">
      {[...('.'.repeat(len))].map((item, index) => {
        return <NavLink to={'/class/' + (index + 1)} exact key={index}> {index} </NavLink>
      })}
    </nav>
  )
}

function List(props) {
  // console.log('ListProps', props);
  let page = props.match.params.classPage;
  // useLocation,useRouteMatch,useParams
  console.log('useHistory', useHistory());
  console.log('useLocation', useLocation());
  console.log('useRouteMatch', useRouteMatch());
  console.log('useParams', useParams());
  // console.log('page', page);
  return (
    <ul>
      {data.filter((item, index) => { return index < page * pageLen && index >= (page - 1) * pageLen }).map((item) => {
        return <li key={item.id}>
          {item.title}
        </li>
      })}
      {/* {data.map((item) => {
        return <li key={item.id}>
          {item.title}
        </li>
      })} */}
    </ul>
  )
}
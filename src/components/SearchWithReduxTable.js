import React from "react";
import { connect } from "react-redux";
/* styled components */
import { TableSearchResultsData } from "./styles/style_SearchWithRedux";
import SearchString from "./SearchString";

class SearchWithReduxTable extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<tr key={this.props.id}>
				<TableSearchResultsData>{this.props.id}</TableSearchResultsData>
				<TableSearchResultsData>
					{
						(() => {
							if(Object.keys(this.props.searchStringObj).length === 0 || this.props.searchStringObj.searchKey === "postSearch"){
								return (<div>{this.props.title}</div>);
							}else if(this.props.searchStringObj.searchKey === "titleSearch"){
								return (<SearchString renderTitleOrBody="title" {...this.props}/>);
							}
						})()
					}
				</TableSearchResultsData>
				<TableSearchResultsData>
					{
						(() => {
							if(Object.keys(this.props.searchStringObj).length === 0 || this.props.searchStringObj.searchKey === "titleSearch"){
								return (<div>{this.props.body}</div>);
							}else if(this.props.searchStringObj.searchKey === "postSearch"){
								return (<SearchString renderTitleOrBody="body" {...this.props}/>);
							}
						})()
					}
				</TableSearchResultsData>
			</tr>
		)
	}
}

const mapStateToProps = (state, props) => {    
	return {
		searchStringObj: state.searchStringObj
	};
};

export default connect(mapStateToProps, null)(SearchWithReduxTable);

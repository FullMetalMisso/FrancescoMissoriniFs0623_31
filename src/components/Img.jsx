import { Component } from "react"

class ImageCLass extends Component {
    render(){
        return( 
        <img src={this.props.src} alt={this.props.name} />
        
   ) }
}

export default ImageCLass
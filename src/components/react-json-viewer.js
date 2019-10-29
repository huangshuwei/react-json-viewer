import React,{Fragment} from 'react'
import './react-json-viewer.scss'

class ReactJsonViewer extends React.Component{

    render(){

        return (
            <div className={'react-json-viewer'}>
                <div className={'left-view'}>
                    left
                </div>
                <div className={'right-view'}>
                    right
                </div>
            </div>
        )
    }
}

export default ReactJsonViewer


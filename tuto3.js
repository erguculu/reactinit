function WelcomeFunc ({name, children}){
    return <div>
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>

    </div>

}

class Welcome extends React.Component {

    render (){
        return  <div>
            <h1>Bonjour {this.props.name}</h1>
            <p>
                {this.props.children}
            </p>

    </div>
    }
}

class Clock extends React.Component{

    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }

    render (){
        return <div>
           Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
    }
}

function Home (){
    return <div>
        <Welcome name ="Dorothée" />
        <Welcome name ="Jean" />
        <Clock/>
    </div>

}

ReactDOM.render(<Home/>, document.querySelector('#app'))